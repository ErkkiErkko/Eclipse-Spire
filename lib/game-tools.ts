import {CARDS,FOES} from './game-data';
import {isTargeted} from './game-engine';
import type {Action,GameState} from './game-engine';
export function snapshot(s:GameState){return{phase:s.phase,act:s.act+1,floor:s.floor+1,hp:s.hp,gold:s.gold,energy:s.combat.energy,moon:s.combat.moon,hand:s.combat.hand.map(c=>({uid:c.uid,name:CARDS[c.id].name,cost:CARDS[c.id].cost,targeted:isTargeted(c.id)})),enemies:s.combat.enemies.filter(e=>e.hp>0).map(e=>({uid:e.uid,name:FOES[e.id].name,hp:e.hp,intent:e.intent})),lastAction:s.log[0]};}
export function registerGameTools(get:()=>GameState,apply:(a:Action)=>GameState,busy:()=>boolean,clear:()=>void){
 type Tool={name:string;title:string;description:string;inputSchema:object;annotations:{readOnlyHint:boolean};execute:(input:unknown)=>unknown};
 const context=(document as Document&{modelContext?:{registerTool:(tool:Tool,options:{signal:AbortSignal})=>unknown}}).modelContext;
 if(!context?.registerTool)return;const lifecycle=new AbortController();
 const painted=()=>new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));
 const tools:Tool[]=[
 {name:'read_eclipse_battle',title:'读取月蚀尖塔战况',description:'Read the run, hand, energy, moonlight, and enemy intents.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>snapshot(get())},
 {name:'play_eclipse_card',title:'打出一张卡牌',description:'Play a card using its hand uid and target enemy uid when required. Applies the same rules as the visible controls.',inputSchema:{type:'object',properties:{uid:{type:'integer'},target:{type:'integer'}},required:['uid'],additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input:unknown)=>{
  if(!input||typeof input!=='object'||!Number.isInteger((input as {uid:number}).uid)||Object.keys(input).some(k=>!['uid','target'].includes(k)))throw new Error('Invalid card input');
  const p=input as {uid:number;target?:number};if(p.target!==undefined&&!Number.isInteger(p.target))throw new Error('Invalid target');
  if(busy())throw new Error('Enemy turn in progress');const old=get(),next=apply({type:'play',...p});if(old===next)throw new Error('Card cannot be played: check phase, energy, uid, and target');clear();await painted();return snapshot(next);
 }},
 {name:'end_eclipse_turn',title:'结束战斗回合',description:'End the player turn, resolve enemy actions, and draw the next hand.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input:unknown)=>{
  if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('Expected an empty object');if(busy()||get().phase!=='combat')throw new Error('No active player turn');const next=apply({type:'end'});clear();await painted();return snapshot(next);
 }}
 ];for(const tool of tools){try{void Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}}
 return()=>lifecycle.abort();
}
