import { CARDS, FOES, RELICS } from './game-data.ts';
import type { Intent } from './game-data.ts';

export type OwnedCard={uid:number;id:string;up:boolean};
export type NodeKind='combat'|'elite'|'camp'|'shop'|'event'|'chest'|'boss';
export type MapNode={row:number;col:number;kind:NodeKind;visited:boolean};
export type Enemy={id:string;uid:number;hp:number;maxHp:number;block:number;strength:number;weak:number;vulnerable:number;poison:number;intent:Intent};
export type Effect={target:number|'hero';kind:'damage'|'block'|'heal'|'moon';value:number};
export type Combat={turn:number;energy:number;block:number;moon:number;strength:number;weak:number;vulnerable:number;moonPerTurn:number;eclipse:number;hand:OwnedCard[];draw:OwnedCard[];discard:OwnedCard[];exhaust:OwnedCard[];enemies:Enemy[];elite:boolean;boss:boolean;played:number};
export type GameState={version:1;seed:number;rng:number;nextUid:number;phase:'combat'|'reward'|'map'|'camp'|'shop'|'event'|'chest'|'victory'|'defeat';act:number;floor:number;col:number;hp:number;maxHp:number;gold:number;deck:OwnedCard[];relics:string[];potions:string[];map:MapNode[][];combat:Combat;reward:{cards:OwnedCard[];gold:number;relic:string|null;potion:string|null};shop:{cards:OwnedCard[];relic:string|null;sold:string[]};event:number;eventResolved:boolean;eventText:string;log:string[];effects:Effect[];serial:number;stats:{battles:number;elites:number;cardsPlayed:number;damage:number;goldEarned:number};};
export type Action={type:'play';uid:number;target?:number}|{type:'end'}|{type:'node';row:number;col:number}|{type:'reward';uid:number|null}|{type:'rest'}|{type:'upgrade';uid:number}|{type:'buy';item:string;uid?:number}|{type:'event';choice:number}|{type:'leave'}|{type:'chest'}|{type:'potion';index:number;target?:number};
const blankCombat=():Combat=>({turn:1,energy:3,block:0,moon:0,strength:0,weak:0,vulnerable:0,moonPerTurn:0,eclipse:0,hand:[],draw:[],discard:[],exhaust:[],enemies:[],elite:false,boss:false,played:0});
function random(s:GameState){let x=s.rng|0;x^=x<<13;x^=x>>>17;x^=x<<5;s.rng=x>>>0;return s.rng/4294967296;}
function pick<T>(s:GameState,a:T[]):T{return a[Math.floor(random(s)*a.length)];}
function shuffle<T>(s:GameState,a:T[]):T[]{const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(random(s)*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function card(s:GameState,id:string,up=false):OwnedCard{return{uid:s.nextUid++,id,up};}
function note(s:GameState,text:string){s.log=[text,...s.log].slice(0,60);}
function has(s:GameState,id:string){return s.relics.includes(id);}
function heal(s:GameState,n:number){const gain=Math.min(n,s.maxHp-s.hp);s.hp+=gain;if(gain)s.effects.push({target:'hero',kind:'heal',value:gain});}
function addRelic(s:GameState,id:string){if(has(s,id))return;s.relics.push(id);if(id==='ruby'){s.maxHp+=12;heal(s,12);}note(s,`获得遗物：${RELICS[id].name}`);}
function randomRelic(s:GameState){return pick(s,Object.keys(RELICS).filter(id=>!has(s,id)))??null;}
export function maxEnergy(s:GameState){return has(s,'crown')?4:3;}
function makeMap(s:GameState){
 const bag:NodeKind[]=['combat','combat','event','event','camp','shop','elite','chest'];
 s.map=Array.from({length:8},(_,row)=>Array.from({length:row===7?1:3},(_,i)=>({row,col:row===7?1:i,kind:row===7?'boss':row===0?'combat':row===6?'camp':row===1&&i===1?'event':row===3&&i===1?'chest':pick(s,bag),visited:false})));
}
function drawCards(s:GameState,n:number){const c=s.combat;for(let i=0;i<n&&c.hand.length<10;i++){if(!c.draw.length){if(!c.discard.length)break;c.draw=shuffle(s,c.discard);c.discard=[];}c.hand.push(c.draw.pop()!);}}
function makeEnemy(s:GameState,id:string,scale=1):Enemy{const f=FOES[id];const maxHp=Math.round(f.hp*scale);return{id,uid:s.nextUid++,hp:maxHp,maxHp,block:0,strength:0,weak:has(s,'mirror')?1:0,vulnerable:0,poison:0,intent:{...f.pattern[0]}};}
function beginCombat(s:GameState,kind:NodeKind){
 const c=blankCombat();s.combat=c;s.phase='combat';c.elite=kind==='elite';c.boss=kind==='boss';c.moon=2;c.energy=maxEnergy(s)+(has(s,'hourglass')?1:0);c.block=has(s,'amber')?10:0;c.strength=has(s,'whetstone')?1:0;
 if(c.boss)c.enemies=[makeEnemy(s,`boss${s.act}`)];
 else if(c.elite)c.enemies=[makeEnemy(s,'elite',1+s.act*.4)];
 else if(s.act===0&&s.floor===0)c.enemies=[makeEnemy(s,'sentinel')];
 else{const pool=[['sentinel','wraith','raven'],['duelist','oracle','reaper'],['seraph','witch','reaper']][s.act];const duo=s.floor>=2&&random(s)<.38;c.enemies=[makeEnemy(s,pick(s,pool),duo?.75:1+s.floor*.025)];if(duo)c.enemies.push(makeEnemy(s,pick(s,pool),.7));}
 c.draw=shuffle(s,s.deck.map(x=>({...x})));
 if(s.act===0&&s.floor===0){const wanted=['strike','guard','mooncut','strike','guard'];for(const id of wanted){const i=c.draw.findIndex(x=>x.id===id);if(i>=0)c.hand.push(c.draw.splice(i,1)[0]);}}
 else drawCards(s,5+(has(s,'feather')?2:0)-(has(s,'crown')?1:0));
 note(s,`进入战斗：${c.enemies.map(e=>FOES[e.id].name).join('、')}`);
}
export function createGame(seed=314159):GameState{
 const s:GameState={version:1,seed,rng:(seed>>>0)||1,nextUid:1,phase:'combat',act:0,floor:0,col:1,hp:72,maxHp:72,gold:99,deck:[],relics:['pendant'],potions:['heal'],map:[],combat:blankCombat(),reward:{cards:[],gold:0,relic:null,potion:null},shop:{cards:[],relic:null,sold:[]},event:0,eventResolved:false,eventText:'',log:[],effects:[],serial:0,stats:{battles:0,elites:0,cardsPlayed:0,damage:0,goldEarned:0}};
 for(const id of ['strike','strike','strike','strike','guard','guard','guard','guard','mooncut','focus'])s.deck.push(card(s,id));
 makeMap(s);s.map[0][1].visited=true;beginCombat(s,'combat');return s;
}
export function isTargeted(id:string){return (CARDS[id].type==='attack'&&!CARDS[id].all)||id==='thorn'||id==='bind';}
export function attackAmount(s:GameState,base:number,e:Enemy){return Math.max(0,Math.floor((base+s.combat.strength)*(s.combat.weak>0?.75:1)*(e.vulnerable>0?1.5:1)));}
export function enemyDamage(s:GameState,e:Enemy){return Math.floor((e.intent.value+e.strength)*(e.weak>0?.75:1)*(s.combat.vulnerable>0?1.5:1));}
function hitEnemy(s:GameState,e:Enemy,n:number,direct=false){if(e.hp<=0)return;const absorbed=direct?0:Math.min(e.block,n);e.block-=absorbed;const damage=Math.min(e.hp,n-absorbed);e.hp-=damage;s.stats.damage+=damage;s.effects.push({target:e.uid,kind:'damage',value:damage});}
function hitHero(s:GameState,n:number,direct=false){const c=s.combat;const absorbed=direct?0:Math.min(c.block,n);c.block-=absorbed;const damage=Math.min(s.hp,n-absorbed);s.hp-=damage;s.effects.push({target:'hero',kind:'damage',value:damage});}
function gainBlock(s:GameState,n:number){s.combat.block+=n;if(n)s.effects.push({target:'hero',kind:'block',value:n});}
function rewardCards(s:GameState,rare=false){const pool=Object.keys(CARDS).filter(id=>CARDS[id].rarity!=='基础'&&CARDS[id].rarity!=='诅咒'&&(!rare||CARDS[id].rarity!=='普通'));return shuffle(s,pool).slice(0,3).map(id=>card(s,id,s.act>0&&random(s)<.18));}
function checkCombat(s:GameState){
 if(s.hp<=0){s.phase='defeat';note(s,'月光暂时熄灭了。');return true;}
 if(s.combat.enemies.some(e=>e.hp>0))return false;
 s.stats.battles++;if(s.combat.elite)s.stats.elites++;
 if(has(s,'rose'))heal(s,4);
 if(s.combat.boss&&s.act===2){s.phase='victory';note(s,'长夜散去，新的月亮升起。');return true;}
 const base=s.combat.boss?90:s.combat.elite?45:20+Math.floor(random(s)*11);
 const gold=Math.floor(base*(has(s,'compass')?1.25:1));s.gold+=gold;s.stats.goldEarned+=gold;
 const relic=s.combat.elite||s.combat.boss?randomRelic(s):null;if(relic)addRelic(s,relic);
 const potion=s.potions.length<3&&random(s)<.28?pick(s,['heal','energy','fire']):null;if(potion)s.potions.push(potion);
 s.reward={cards:rewardCards(s,s.combat.boss||s.combat.elite),gold,relic,potion};s.phase='reward';note(s,`战斗胜利！获得 ${gold} 金币。`);return true;
}
export function reachable(s:GameState,node:MapNode){return s.phase==='map'&&node.row===s.floor+1&&(node.row===0||node.row===7||Math.abs(node.col-s.col)<=1);}
export function cardPrice(id:string){return CARDS[id].rarity==='史诗'?95:CARDS[id].rarity==='稀有'?65:45;}
function returnMap(s:GameState){s.phase='map';if(s.floor===7){s.act++;s.floor=-1;s.col=1;heal(s,Math.ceil(s.maxHp*.35));makeMap(s);note(s,'踏入下一幕，恢复 35% 最大生命。');}}

// Every game mutation uses this same validated, deterministic reducer.
export function transition(previous:GameState,action:Action):GameState{
 const s=structuredClone(previous);s.effects=[];const c=s.combat;
 if(action.type==='play'){
  if(s.phase!=='combat')return previous;
  const index=c.hand.findIndex(x=>x.uid===action.uid);if(index<0)return previous;
  const owned=c.hand[index],d=CARDS[owned.id],u=owned.up?1:0;
  if(d.type==='curse'||c.energy<d.cost)return previous;
  const target=action.target!==undefined?c.enemies.find(e=>e.uid===action.target&&e.hp>0):(c.enemies.filter(e=>e.hp>0).length===1?c.enemies.find(e=>e.hp>0):undefined);
  if(isTargeted(owned.id)&&!target)return previous;
  c.hand.splice(index,1);c.energy-=d.cost;c.played++;s.stats.cardsPlayed++;
  let base=d.damage?.[u]??0;
  if(owned.id==='mooncut'||owned.id==='nightfall'){base+=c.moon*(u?4:3);c.moon=0;}
  if(d.damage){for(const e of d.all?c.enemies:target?[target]:[])for(let n=0;n<(d.hits??1);n++)hitEnemy(s,e,attackAmount(s,base,e));}
  if(d.block)gainBlock(s,d.block[u]);
  if(d.moon){c.moon+=d.moon[u];s.effects.push({target:'hero',kind:'moon',value:d.moon[u]});}
  if(owned.id==='fracture'&&target)target.vulnerable+=u?3:2;
  if(owned.id==='thorn'&&target)target.poison+=u?8:5;
  if(owned.id==='bind'&&target)target.weak+=u?3:2;
  if(owned.id==='trance')c.moonPerTurn+=u?2:1;
  if(owned.id==='blade')c.strength+=u?3:2;
  if(owned.id==='drain')heal(s,u?5:3);
  if(owned.id==='bloom')heal(s,u?12:8);
  if(owned.id==='echo')c.moon=(c.moon+(u?2:0))*2;
  if(owned.id==='eclipse')c.eclipse+=u?2:1;
  if(owned.id==='comet')c.energy++;
  if(owned.id==='resolve')gainBlock(s,c.moon*(u?4:3));
  if(d.type==='attack'&&c.eclipse){c.moon+=c.eclipse;gainBlock(s,c.exhaust.filter(x=>x.id==='eclipse').reduce((n,x)=>n+(x.up?3:2),0));}
  if(d.type==='skill'&&has(s,'thread'))gainBlock(s,2);
  if(d.draw)drawCards(s,d.draw[u]);
  (d.exhaust||d.type==='power'?c.exhaust:c.discard).push(owned);
  note(s,`打出 ${d.name}${owned.up?'＋':''}${target?` → ${FOES[target.id].name}`:''}`);
  checkCombat(s);
 }else if(action.type==='end'){
  if(s.phase!=='combat')return previous;
  for(const x of c.hand)if(x.id==='curse')hitHero(s,2,true);
  c.discard.push(...c.hand);c.hand=[];
  if(s.hp<=0){checkCombat(s);s.serial++;return s;}
  if(has(s,'bell'))c.moon++;
  c.weak=Math.max(0,c.weak-1);c.vulnerable=Math.max(0,c.vulnerable-1);
  // Poison resolves for every enemy before surviving enemies act.
  for(const e of c.enemies){if(e.hp<=0)continue;e.block=0;if(e.poison){hitEnemy(s,e,e.poison,true);e.poison--;}}
  if(checkCombat(s)){s.serial++;return s;}
  for(const e of c.enemies){
   if(e.hp<=0)continue;
   if(e.intent.kind==='attack'||e.intent.kind==='multi'){const n=enemyDamage(s,e);for(let i=0;i<(e.intent.hits??1);i++)hitHero(s,n);note(s,`${FOES[e.id].name}：${e.intent.label}，${n}${e.intent.hits?` × ${e.intent.hits}`:''} 点攻击。`);}
   if(e.intent.kind==='guard'){e.block=e.intent.value;note(s,`${FOES[e.id].name} 获得 ${e.block} 点格挡。`);}
   if(e.intent.kind==='buff'){e.strength+=e.intent.value;note(s,`${FOES[e.id].name} 获得 ${e.intent.value} 点力量。`);}
   if(e.intent.kind==='debuff'){c.weak+=e.intent.value;note(s,`${FOES[e.id].name} 施加 ${e.intent.value} 回合虚弱。`);}
   e.weak=Math.max(0,e.weak-1);e.vulnerable=Math.max(0,e.vulnerable-1);
   const pattern=FOES[e.id].pattern;e.intent={...pattern[c.turn%pattern.length]};
   if(s.hp<=0)break;
  }
  if(checkCombat(s)){s.serial++;return s;}
  c.turn++;c.block=0;c.energy=maxEnergy(s);c.moon+=c.moonPerTurn;c.played=0;
  drawCards(s,5-(has(s,'crown')?1:0));note(s,`第 ${c.turn} 回合 · 能量恢复，抽取手牌。`);
 }else if(action.type==='node'){
  const node=s.map[action.row]?.find(x=>x.col===action.col);if(!node||!reachable(s,node))return previous;
  s.floor=node.row;s.col=node.col;node.visited=true;
  if(['combat','elite','boss'].includes(node.kind))beginCombat(s,node.kind);
  else if(node.kind==='shop'){s.phase='shop';s.shop={cards:rewardCards(s),relic:randomRelic(s),sold:[]};}
  else if(node.kind==='event'){s.phase='event';s.event=Math.floor(random(s)*4);s.eventResolved=false;s.eventText='';}
  else s.phase=node.kind as 'camp'|'chest';
 }else if(action.type==='reward'){
  if(s.phase!=='reward')return previous;
  if(action.uid!==null){const chosen=s.reward.cards.find(x=>x.uid===action.uid);if(!chosen)return previous;s.deck.push(chosen);note(s,`${CARDS[chosen.id].name} 加入牌组。`);}
  returnMap(s);
 }else if(action.type==='rest'){
  if(s.phase!=='camp')return previous;heal(s,Math.ceil(s.maxHp*.3));note(s,'营火的温暖驱散了疲惫。');returnMap(s);
 }else if(action.type==='upgrade'){
  if(s.phase!=='camp')return previous;const chosen=s.deck.find(x=>x.uid===action.uid&&!x.up&&x.id!=='curse');if(!chosen)return previous;chosen.up=true;note(s,`${CARDS[chosen.id].name} 已升级。`);returnMap(s);
 }else if(action.type==='buy'){
  if(s.phase!=='shop')return previous;
  if(action.item==='card'){
   const chosen=s.shop.cards.find(x=>x.uid===action.uid);if(!chosen||s.shop.sold.includes(String(action.uid)))return previous;
   const price=cardPrice(chosen.id);if(s.gold<price)return previous;s.gold-=price;s.deck.push(chosen);s.shop.sold.push(String(chosen.uid));note(s,`购买 ${CARDS[chosen.id].name}。`);
  }else if(action.item==='relic'){
   if(!s.shop.relic||s.shop.sold.includes('relic')||s.gold<125)return previous;s.gold-=125;addRelic(s,s.shop.relic);s.shop.sold.push('relic');
  }else if(action.item==='potion'){
   if(s.gold<35||s.potions.length>=3||s.shop.sold.includes('potion'))return previous;s.gold-=35;s.potions.push('heal');s.shop.sold.push('potion');note(s,'购买月露药剂。');
  }else if(action.item==='remove'){
   const i=s.deck.findIndex(x=>x.uid===action.uid);if(i<0||s.gold<60||s.shop.sold.includes('remove')||s.deck.length<=5)return previous;s.gold-=60;note(s,`从牌组移除 ${CARDS[s.deck[i].id].name}。`);s.deck.splice(i,1);s.shop.sold.push('remove');
  }else return previous;
 }else if(action.type==='event'){
  if(s.phase!=='event'||s.eventResolved||![0,1].includes(action.choice))return previous;
  const first=action.choice===0;
  if(s.event===0){if(first){heal(s,18);s.eventText='你喝下银白色的泉水。那些疼痛，如梦一般消散。恢复 18 点生命。';}else{if(s.hp<=6)return previous;s.hp-=6;s.maxHp+=8;s.eventText='泉水记住了你的名字。失去 6 点生命，最大生命增加 8。';}}
  if(s.event===1){if(first){const choices=shuffle(s,s.deck.filter(x=>!x.up&&x.id!=='curse')).slice(0,2);choices.forEach(x=>{x.up=true;});s.eventText=choices.length?`书页化为星光。${choices.map(x=>CARDS[x.id].name).join('、')} 已升级。`:'你已经领悟了书中所有剑术。恢复 8 点生命。';if(!choices.length)heal(s,8);}else{const gift=pick(s,Object.keys(CARDS).filter(x=>CARDS[x].rarity==='史诗'));s.deck.push(card(s,gift),card(s,'curse'));s.eventText=`你获得了「${CARDS[gift].name}」，但「旧日梦魇」也悄悄混入了你的牌组。`;}}
  if(s.event===2){if(first){if(s.gold<25)return previous;s.gold-=25;if(random(s)<.75){const relic=randomRelic(s);if(relic){addRelic(s,relic);s.eventText=`命运站在你这边。获得「${RELICS[relic].name}」。`;}else{s.gold+=60;s.eventText='你已集齐所有遗物。获得 60 金币。';}}else{s.eventText='一枚空白的硬币。命运没有回应，失去了 25 金币。';}}else{s.gold+=12;s.eventText='你婉拒了赌局。旅人送你 12 金币，祝你平安。';}}
  if(s.event===3){if(first){if(s.hp<=8)return previous;s.hp-=8;const relic=randomRelic(s);if(relic){addRelic(s,relic);s.eventText=`你献出一滴心血。失去 8 点生命，获得「${RELICS[relic].name}」。`;}else{s.gold+=60;s.eventText='祭坛赐予你 60 金币。';}}else{heal(s,6);s.eventText='你静静祈祷，直到月光落在肩上。恢复 6 点生命。';}}
  s.eventResolved=true;note(s,s.eventText);
 }else if(action.type==='chest'){
  if(s.phase!=='chest')return previous;const relic=randomRelic(s);if(relic)addRelic(s,relic);s.gold+=20;note(s,'打开月封宝箱，获得 20 金币。');s.eventText=relic?`获得 ${RELICS[relic].name} 与 20 金币。`:'获得 20 金币。';returnMap(s);
 }else if(action.type==='leave'){
  if(s.phase==='shop'||(s.phase==='event'&&s.eventResolved))returnMap(s);else return previous;
 }else if(action.type==='potion'){
  if(s.phase!=='combat'||!Number.isInteger(action.index))return previous;const potion=s.potions[action.index];if(!potion)return previous;
  if(potion==='heal'){if(s.hp===s.maxHp)return previous;heal(s,20);note(s,'饮用月露药剂，恢复 20 点生命。');}
  else if(potion==='energy'){c.energy+=2;note(s,'饮用星火药剂，获得 2 点能量。');}
  else if(potion==='fire'){const target=action.target!==undefined?c.enemies.find(e=>e.uid===action.target&&e.hp>0):c.enemies.find(e=>e.hp>0);if(!target)return previous;hitEnemy(s,target,20,true);note(s,'投掷辉光药剂，造成 20 点直接伤害。');}
  else return previous;
  s.potions.splice(action.index,1);checkCombat(s);
 }else return previous;
 s.serial++;return s;
}

export function validSave(raw:unknown):raw is GameState{
 try{const s=raw as GameState;return s.version===1&&['combat','reward','map','camp','shop','event','chest','victory','defeat'].includes(s.phase)&&Number.isFinite(s.hp)&&s.hp>=0&&s.hp<=s.maxHp&&s.act>=0&&s.act<3&&Number.isInteger(s.floor)&&s.floor>=-1&&s.floor<=7&&Number.isFinite(s.rng)&&s.deck.length>=5&&s.deck.every(c=>!!CARDS[c.id]&&Number.isInteger(c.uid))&&s.relics.every(id=>!!RELICS[id])&&Array.isArray(s.map)&&s.map.length===8&&s.combat.enemies.every(e=>!!FOES[e.id])&&[...s.combat.hand,...s.combat.draw,...s.combat.discard,...s.combat.exhaust].every(c=>!!CARDS[c.id])&&Array.isArray(s.log)&&!!s.stats&&Array.isArray(s.potions)&&!!s.reward&&!!s.shop;}catch{return false;}
}
