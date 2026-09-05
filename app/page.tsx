'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import type {CSSProperties} from 'react';
import {Moon,Heart,Coins,Map as MapIcon,Layers,Settings,Swords,Shield,Sparkles,ArrowRight,FlaskConical,CircleHelp,Volume2,VolumeX,RotateCcw,ScrollText,X,Flame,MousePointer2} from 'lucide-react';
import {TooltipProvider} from '@/components/ui/tooltip';
import {CardView,HealthBar,Rune,Tip} from '@/components/game-ui';
import {GameScenes,POTIONS} from '@/components/game-scenes';
import {GameDialogs} from '@/components/game-dialogs';
import {CARDS,CHAPTERS,FOES,KEYWORDS,RELICS} from '@/lib/game-data';
import {createGame,enemyDamage,isTargeted,maxEnergy,transition,validSave} from '@/lib/game-engine';
import type {Action,Enemy,GameState,OwnedCard} from '@/lib/game-engine';
import {music,sfx} from '@/lib/game-audio';
import {registerGameTools} from '@/lib/game-tools';
const SAVE_KEY='eclipse-spire-save-v1';
export default function Home(){
 const [s,setS]=useState<GameState>(()=>createGame()),stateRef=useRef(s);
 const [ready,setReady]=useState(false),[modal,setModal]=useState<string|null>(null),[selected,setSelected]=useState<number|null>(null),[target,setTarget]=useState<number|null>(null);
 const [busy,setBusy]=useState(false),busyRef=useRef(false),[motion,setMotion]=useState(true),[sound,setSound]=useState(true),soundRef=useRef(true),[bgm,setBgm]=useState(false);
 const [toast,setToast]=useState(''),[saved,setSaved]=useState(true),[restart,setRestart]=useState(false),[reduced,setReduced]=useState(false);
 const timers=useRef<ReturnType<typeof setTimeout>[]>([]),toastTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const notify=useCallback((message:string)=>{setToast(message);if(toastTimer.current)clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),2800);},[]);
 useEffect(()=>{
  let next=createGame(Date.now());
  try{const raw=localStorage.getItem(SAVE_KEY);if(raw){const parsed=JSON.parse(raw);if(validSave(parsed)){next=parsed;next.effects=[];}else notify('旧存档无法读取，已开始新的旅途。');}
   const prefs=JSON.parse(localStorage.getItem('eclipse-settings')||'{}');if(typeof prefs.sound==='boolean'){setSound(prefs.sound);soundRef.current=prefs.sound;}if(typeof prefs.motion==='boolean')setMotion(prefs.motion);
  }catch{notify('本次旅途暂时无法读取本地存档。');}
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');setReduced(media.matches);
  stateRef.current=next;setS(next);setReady(true);
  return()=>{timers.current.forEach(clearTimeout);if(toastTimer.current)clearTimeout(toastTimer.current);music(false);};
 },[notify]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(SAVE_KEY,JSON.stringify(s));setSaved(true);}catch{setSaved(false);}},[s,ready]);
 useEffect(()=>{soundRef.current=sound;if(ready){try{localStorage.setItem('eclipse-settings',JSON.stringify({sound,motion}));}catch{}}},[sound,motion,ready]);
 const playSound=useCallback((kind:Parameters<typeof sfx>[0])=>{if(soundRef.current)sfx(kind);},[]);
 const apply=useCallback((action:Action)=>{
  const old=stateRef.current,next=transition(old,action);if(next===old)return old;
  stateRef.current=next;setS(next);
  if(next.phase!==old.phase){setSelected(null);setTarget(null);playSound(next.phase==='reward'||next.phase==='victory'?'win':'click');}
  return next;
 },[playSound]);
 const lock=useCallback((ms:number)=>{busyRef.current=true;setBusy(true);timers.current.push(setTimeout(()=>{busyRef.current=false;setBusy(false);},ms));},[]);
 const clickCard=useCallback((owned:OwnedCard)=>{
  const game=stateRef.current;if(busyRef.current||game.phase!=='combat')return;const d=CARDS[owned.id];
  if(d.type==='curse'){notify('旧日梦魇无法打出，回合结束时失去 2 点生命。');return;}
  if(game.combat.energy<d.cost){notify('能量不足。可以使用药剂，或结束回合。');return;}
  if(isTargeted(owned.id)){setSelected(old=>old===owned.uid?null:owned.uid);playSound('card');return;}
  playSound(d.type==='skill'?'block':'card');apply({type:'play',uid:owned.uid});setSelected(null);lock(240);
 },[apply,lock,notify,playSound]);
 const clickEnemy=useCallback((enemy:Enemy)=>{
  if(busyRef.current||stateRef.current.phase!=='combat'||enemy.hp<=0)return;setTarget(enemy.uid);
  if(selected!==null){const old=stateRef.current;const next=apply({type:'play',uid:selected,target:enemy.uid});if(next!==old)playSound('hit');setSelected(null);lock(330);}
  else notify(FOES[enemy.id].name+'：'+enemy.intent.label+(['attack','multi'].includes(enemy.intent.kind)?'，预计造成 '+enemyDamage(stateRef.current,enemy)+(enemy.intent.hits?' × '+enemy.intent.hits:'')+' 点伤害。':''));
 },[selected,apply,lock,notify,playSound]);
 const endTurn=useCallback(()=>{
  if(busyRef.current||stateRef.current.phase!=='combat')return;setSelected(null);busyRef.current=true;setBusy(true);playSound('end');
  timers.current.push(setTimeout(()=>{apply({type:'end'});playSound('hit');timers.current.push(setTimeout(()=>{busyRef.current=false;setBusy(false);},300));},motion&&!reduced?650:100));
 },[apply,motion,reduced,playSound]);
 const drink=(index:number)=>{if(busyRef.current)return;const old=stateRef.current,next=apply({type:'potion',index,target:target??undefined});if(next===old){notify(old.phase!=='combat'?'药剂可在战斗中使用。':'生命已满，保留药剂以备不时之需。');return;}playSound('heal');notify(next.log[0]);};
 const open=useCallback((value:string)=>{setModal(value);playSound('click');},[playSound]);
 useEffect(()=>{
  const handler=(e:KeyboardEvent)=>{
   if(e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;const element=e.target as HTMLElement;if(['INPUT','TEXTAREA','SELECT'].includes(element.tagName))return;
   if(e.key==='Escape'){setSelected(null);return;}if(modal||restart)return;
   if(/^[1-9]$/.test(e.key)&&s.phase==='combat'){const owned=s.combat.hand[Number(e.key)-1];if(owned){e.preventDefault();clickCard(owned);}}
   if((e.key==='Enter'&&element.tagName!=='BUTTON')||e.key.toLowerCase()==='e'){e.preventDefault();endTurn();}
   if(e.key.toLowerCase()==='m')setModal('map');if(e.key.toLowerCase()==='d')setModal('deck');if(e.key.toLowerCase()==='h')setModal('help');
  };window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);
 },[s,modal,restart,clickCard,endTurn]);
 useEffect(()=>registerGameTools(()=>stateRef.current,apply,()=>busyRef.current,()=>setSelected(null)),[apply]);
 const newRun=()=>{timers.current.forEach(clearTimeout);timers.current=[];busyRef.current=false;setBusy(false);const next=createGame(Date.now());stateRef.current=next;setS(next);setRestart(false);setModal(null);setSelected(null);setTarget(null);notify('新的月亮，新的旅途。');};
 const c=s.combat,chapter=CHAPTERS[s.act],living=c.enemies.filter(e=>e.hp>0),selectedCard=c.hand.find(x=>x.uid===selected),combatVisible=s.phase==='combat'||s.phase==='reward';
 const act=(a:Action)=>{const next=apply(a);setSelected(null);setTarget(null);playSound('click');if(a.type==='chest')notify(next.eventText);if(a.type==='buy')notify(next.log[0]);};
 const battleEffects=(who:number|'hero')=><div className="floating-effects" key={s.serial+'-'+who}>{s.effects.filter(e=>e.target===who).map((effect,i)=><span key={i} className={'float-number '+effect.kind} style={{'--effect-delay':i*70+'ms','--effect-x':(i%3-1)*28+'px'} as CSSProperties}>{effect.kind==='damage'?(effect.value===0?'格挡':'−'+effect.value):'+'+effect.value}{effect.kind==='moon'&&' 月辉'}{effect.kind==='block'&&' 格挡'}</span>)}</div>;
 return <TooltipProvider delay={280}><main className={['game-shell','act-'+s.act,'phase-'+s.phase,!motion||reduced?'no-motion':'',busy?'enemy-turn':''].join(' ')} onContextMenu={e=>{if(selected){e.preventDefault();setSelected(null);}}} style={{'--chapter-color':chapter.color} as CSSProperties}>
 <div className="world-backdrop"/><div className="ambient-particles" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{left:(i*37)%100+'%','--delay':i*-.93+'s','--duration':8+i%5+'s'} as CSSProperties}/>)}</div>
 <header className="topbar"><button className="wordmark" onClick={()=>open('help')} aria-label="月蚀尖塔冒险指南"><Moon/><span>月蚀尖塔<small>ECLIPSE SPIRE</small></span></button><div className="hero-hud"><span>月咏 · 莉雅</span><Tip title="生命" text="生命归零时，本次冒险结束。营火和药剂可以恢复生命。"><span className="health"><Heart size={16}/>{s.hp} <em>/ {s.maxHp}</em></span></Tip><Tip title="金币" text="在商店购买卡牌、遗物与药剂。"><span className="gold"><Coins size={16}/>{s.gold}</span></Tip></div><div className="chapter">第{['一','二','三'][s.act]}幕 <span>{chapter.name}</span><small>{String(Math.max(1,s.act*8+s.floor+1)).padStart(2,'0')} / 24</small></div><nav><Tip title="尖塔地图 · M"><button onClick={()=>open('map')} aria-label="查看地图"><MapIcon/></button></Tip><Tip title={'永久牌组 · '+s.deck.length+' 张 · D'}><button className="deck-button" onClick={()=>open('deck')} aria-label="查看牌组"><Layers/><sup>{s.deck.length}</sup></button></Tip><Tip title="设置"><button onClick={()=>open('settings')} aria-label="打开设置"><Settings/></button></Tip></nav></header>
 <div className="relic-bar"><div className="relic-icons">{s.relics.map(id=><Tip key={id} title={RELICS[id].name} text={RELICS[id].desc}><button className="relic-token" onClick={()=>open('relics')} aria-label={RELICS[id].name}><Rune name={RELICS[id].icon} size={21}/></button></Tip>)}</div>{s.relics.length===1&&<span className="starter-relic-label">月之吊坠<small>每场战斗开始时，获得 2 层月辉</small></span>}</div>
 <div className="potion-bar">{Array.from({length:3},(_,i)=>{const potion=POTIONS[s.potions[i]];return <Tip key={i} title={potion?potion.name:'空药剂槽'} text={potion?potion.desc:'最多携带 3 瓶药剂。'}><button className={'potion-slot '+(potion?s.potions[i]:'empty')} onClick={()=>potion&&drink(i)} disabled={!potion||busy||s.phase!=='combat'} aria-label={potion?'使用'+potion.name:'空药剂槽'}><FlaskConical size={23}/>{potion&&<span/>}</button></Tip>;})}<span>药剂</span></div>
 {combatVisible&&<><section className="battle"><div className="encounter-title"><span>{chapter.en}</span><h1>{c.boss?'最后的祷告。':c.elite?'不可退让的一战。':chapter.title}</h1><p>{c.boss?'击败首领，结束这一幕。':c.elite?'更危险的敌人，也守护着更珍贵的遗物。':'击败拦路的守卫，向尖塔深处前进。'}</p></div><div className="turn-banner"><span/>{busy?'敌方行动':'你的回合'} <small>{String(c.turn).padStart(2,'0')}</small><span/></div>
 <div className={'combatants '+(living.length>1?'multiple-enemies':'')}>
 <div className={'fighter hero '+(s.effects.some(e=>e.target==='hero'&&e.kind==='damage'&&e.value>0)?'is-hit':'')} key={'hero-'+s.serial}><div className="fighter-art"><img src="/assets/hero.png" alt="月之剑姬莉雅，银白长发与青色月刃" draggable={false}/>{battleEffects('hero')}</div><div className="fighter-label">月咏 · 莉雅<small>月之剑姬</small></div><HealthBar hp={s.hp} max={s.maxHp}/><div className="status-row"><Tip title="月辉" text={KEYWORDS[0][1]}><span className="moon-status"><Moon size={13}/>{c.moon}</span></Tip>{c.block>0&&<Tip title="格挡" text={KEYWORDS[1][1]}><span className="block-status"><Shield size={13}/>{c.block}</span></Tip>}{c.strength>0&&<Tip title="力量" text={KEYWORDS[2][1]}><span><Swords size={13}/>{c.strength}</span></Tip>}{c.weak>0&&<Tip title="虚弱" text={KEYWORDS[4][1]}><span className="bad-status"><Rune name="wind" size={13}/>{c.weak}</span></Tip>}{c.moonPerTurn>0&&<Tip title="月之呼吸" text={'每回合开始获得 '+c.moonPerTurn+' 月辉。'}><span><Sparkles size={13}/>{c.moonPerTurn}</span></Tip>}{c.eclipse>0&&<Tip title="月蚀降临" text={'每次攻击获得 '+c.eclipse+' 月辉和 '+c.exhaust.filter(x=>x.id==='eclipse').reduce((n,x)=>n+(x.up?3:2),0)+' 格挡。'}><span><Rune name="eclipse" size={13}/>{c.eclipse}</span></Tip>}</div></div>
 <div className="versus" aria-hidden="true">✧</div><div className="enemy-party">{c.enemies.map(enemy=><div key={enemy.uid} className={'enemy-wrap '+(enemy.hp<=0?'fallen':'')}><button className={['fighter','enemy',selected?'targetable':'',target===enemy.uid?'target-locked':'',s.effects.some(e=>e.target===enemy.uid&&e.kind==='damage')?'is-hit':'',c.boss?'boss-fighter':''].join(' ')} key={enemy.uid+'-'+s.serial} disabled={enemy.hp<=0||busy||s.phase!=='combat'} onClick={()=>clickEnemy(enemy)} aria-label={FOES[enemy.id].name+'，生命 '+enemy.hp+'，'+enemy.intent.label+(selected?'，点击打出所选卡牌':'')}>
 <div className={'intent '+enemy.intent.kind}><Rune name={enemy.intent.kind==='guard'?'shield':enemy.intent.kind==='buff'?'sparkles':enemy.intent.kind==='debuff'?'eye':'swords'} size={20}/><strong>{['attack','multi'].includes(enemy.intent.kind)?enemyDamage(s,enemy):enemy.intent.value}{enemy.intent.hits&&<small>×{enemy.intent.hits}</small>}</strong><span>{enemy.intent.label}</span></div><div className="fighter-art"><img src="/assets/enemy.png" alt={FOES[enemy.id].name+'，身穿深色铠甲的女骑士'} style={{filter:'hue-rotate('+FOES[enemy.id].hue+'deg) drop-shadow(0 0 8px #ad7fa622)'}} draggable={false}/>{battleEffects(enemy.uid)}{selected&&<div className="target-reticle"><span/><MousePointer2 size={25}/><small>选择目标</small></div>}</div><div className="fighter-label">{FOES[enemy.id].name}<small>{FOES[enemy.id].subtitle}</small></div><HealthBar hp={enemy.hp} max={enemy.maxHp} enemy/>
 </button><div className="status-row enemy-status">{enemy.block>0&&<Tip title="格挡" text={KEYWORDS[1][1]}><span className="block-status"><Shield size={13}/>{enemy.block}</span></Tip>}{enemy.strength>0&&<Tip title="力量" text={KEYWORDS[2][1]}><span><Swords size={13}/>{enemy.strength}</span></Tip>}{enemy.weak>0&&<Tip title="虚弱" text={KEYWORDS[4][1]}><span><Rune name="wind" size={13}/>{enemy.weak}</span></Tip>}{enemy.vulnerable>0&&<Tip title="易伤" text={KEYWORDS[3][1]}><span className="bad-status"><Rune name="zap" size={13}/>{enemy.vulnerable}</span></Tip>}{enemy.poison>0&&<Tip title="中毒" text={KEYWORDS[5][1]}><span className="poison-status"><Rune name="flower" size={13}/>{enemy.poison}</span></Tip>}</div></div>)}</div>
 </div></section><section className="hand-zone"><div className={'energy-display '+(c.energy===0?'depleted':'')}><div className="energy-orb" key={'energy-'+c.energy}>{c.energy}<small>/ {maxEnergy(s)}</small></div><span>能量</span></div>{selectedCard&&<div className="target-prompt"><Swords size={15}/><span>{CARDS[selectedCard.id].name}</span> 选择一个敌人 <button onClick={()=>setSelected(null)} aria-label="取消选牌"><X size={14}/></button></div>}<div className={'hand '+(c.hand.length>6?'large-hand':'')}>{c.hand.map((owned,i)=><CardView key={owned.uid} owned={owned} selected={selected===owned.uid} disabled={busy||s.phase!=='combat'} index={i} handSize={c.hand.length} onClick={()=>clickCard(owned)}/>)}{c.hand.length===0&&<div className="empty-hand"><Layers size={30}/><span>{busy?'命运正在翻页…':'手牌已空，结束回合以抽取新牌。'}</span></div>}</div><button className="end-turn" onClick={endTurn} disabled={busy||s.phase!=='combat'}>{busy?'敌方行动':'结束回合'}<ArrowRight size={17}/><small>ENTER / E</small></button></section></>}
 <GameScenes s={s} act={act} open={open} newRun={newRun}/>
 <footer className="game-footer"><div className="pile-actions">{combatVisible?<><button onClick={()=>open('draw')}><Layers size={16}/>抽牌堆 <b>{c.draw.length}</b></button><span className="footer-separator"/><button onClick={()=>open('discard')}><RotateCcw size={15}/>弃牌堆 <b>{c.discard.length}</b></button><button className="exhaust-button" onClick={()=>open('exhaust')}><Flame size={14}/><b>{c.exhaust.length}</b></button></>:<span className="save-state"><span className={saved?'save-dot':'save-dot warning'}/>{ready?(saved?'旅途已自动保存':'浏览器无法保存进度'):'正在准备旅途'}</span>}</div><span className="control-hint">{selected?'点击敌人出牌 · Esc 或右键取消':s.phase==='combat'?'数字键 1–9 选牌 · 点击敌人作为目标':'月光为刃，命运为牌。'}</span><div className="footer-actions"><button onClick={()=>{setSound(!sound);if(!sound)sfx('click');}} aria-label={sound?'关闭音效':'打开音效'}>{sound?<Volume2 size={16}/>:<VolumeX size={16}/>}</button><button onClick={()=>open('log')} aria-label="查看战斗记录"><ScrollText size={16}/></button><button onClick={()=>open('help')}><CircleHelp size={16}/><span>冒险指南</span></button></div></footer>
 {toast&&<div className="game-toast" role="status"><Sparkles size={16}/>{toast}</div>}<div className="sr-only" aria-live="polite">{ready?s.log[0]:''}</div>
 <GameDialogs s={s} modal={modal} close={()=>setModal(null)} act={act} sound={sound} setSound={setSound} bgm={bgm} setBgm={setBgm} motion={motion} setMotion={setMotion} reduced={reduced} saved={saved} restart={restart} setRestart={setRestart} newRun={newRun}/>
 </main></TooltipProvider>;
}
