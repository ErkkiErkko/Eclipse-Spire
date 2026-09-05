import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,transition,reachable,validSave,enemyDamage} from '../lib/game-engine.ts';
import {CARDS} from '../lib/game-data.ts';
const prepared=(ids,up=false)=>{const s=createGame(42);s.combat.hand=ids.map((id,i)=>({id,uid:1000+i,up}));s.combat.energy=20;s.combat.enemies[0].hp=500;s.combat.enemies[0].maxHp=500;return s;};
const play=(s,id,target)=>transition(s,{type:'play',uid:s.combat.hand.find(c=>c.id===id).uid,target});
test('seeded runs are reproducible; initial battle is immediately playable',()=>{
 assert.deepEqual(createGame(91),createGame(91));const s=createGame(91);assert.equal(s.deck.length,10);assert.deepEqual(s.combat.hand.map(c=>c.id),['strike','guard','mooncut','strike','guard']);assert.equal(s.combat.energy,3);assert.equal(s.combat.moon,2);assert.ok(validSave(s));
});
test('moonlight accumulates and a finisher consumes exactly the accumulated amount',()=>{
 let s=prepared(['strike','mooncut']);s=play(s,'strike');assert.equal(s.combat.moon,3);assert.equal(s.combat.enemies[0].hp,494);s=play(s,'mooncut');assert.equal(s.combat.enemies[0].hp,477);assert.equal(s.combat.moon,0);
});
test('block absorbs damage, then resets at the next player turn',()=>{
 let s=prepared(['guard']);s=play(s,'guard');assert.equal(s.combat.block,5);s=transition(s,{type:'end'});assert.equal(s.hp,70);assert.equal(s.combat.block,0);assert.equal(s.combat.energy,3);assert.equal(s.combat.hand.length,5);
});
test('invalid, unaffordable, and duplicate actions do not change state',()=>{
 let s=createGame(2);assert.equal(transition(s,{type:'play',uid:99999}),s);assert.equal(transition(s,{type:'play',uid:s.combat.hand[0].uid,target:-1}),s);s.combat.energy=0;assert.equal(transition(s,{type:'play',uid:s.combat.hand[0].uid}),s);s=prepared(['guard']);const uid=s.combat.hand[0].uid;s=transition(s,{type:'play',uid});assert.equal(transition(s,{type:'play',uid}),s);
});
test('targeted cards require a living target when multiple enemies exist',()=>{
 let s=prepared(['strike']);s.combat.enemies.push({...structuredClone(s.combat.enemies[0]),uid:999});assert.equal(transition(s,{type:'play',uid:1000}),s);s=transition(s,{type:'play',uid:1000,target:999});assert.equal(s.combat.enemies[0].hp,500);assert.equal(s.combat.enemies[1].hp,494);
});
test('area attacks hit all living enemies and consume moonlight once',()=>{
 let s=prepared(['nightfall']);s.combat.moon=4;s.combat.enemies.push({...structuredClone(s.combat.enemies[0]),uid:999});s=play(s,'nightfall');assert.deepEqual(s.combat.enemies.map(e=>e.hp),[483,483]);assert.equal(s.combat.moon,0);
});
test('strength, weak, vulnerable and multihit use rounded per-hit damage',()=>{
 let s=prepared(['crescent']);s.combat.strength=2;s.combat.weak=1;s.combat.enemies[0].vulnerable=2;s=play(s,'crescent');assert.equal(s.combat.enemies[0].hp,486);
});
test('poison bypasses block and can win before enemy attack',()=>{
 let s=prepared(['thorn']);s.combat.enemies[0].hp=4;s.combat.enemies[0].block=99;s=play(s,'thorn');s=transition(s,{type:'end'});assert.equal(s.phase,'reward');assert.equal(s.hp,72);assert.equal(s.stats.battles,1);
});
test('weak reduces the displayed attack and persists for the correct enemy turns',()=>{
 let s=prepared(['bind']);s=play(s,'bind');assert.equal(s.combat.enemies[0].weak,2);assert.equal(enemyDamage(s,s.combat.enemies[0]),5);s=transition(s,{type:'end'});assert.equal(s.combat.enemies[0].weak,1);assert.equal(s.hp,71);
});
test('exhausted cards are removed only from this combat; powers persist',()=>{
 let s=prepared(['insight','trance']);s.deck.push({uid:1000,id:'insight',up:false});s=play(s,'insight');assert.ok(s.combat.exhaust.some(c=>c.id==='insight'));assert.ok(s.deck.some(c=>c.id==='insight'));s=play(s,'trance');assert.equal(s.combat.moonPerTurn,1);s=transition(s,{type:'end'});assert.equal(s.combat.moon,3);
});
test('stacked eclipse powers each supply their own moon and block',()=>{
 let s=prepared(['eclipse','eclipse','strike']);s.combat.hand[1].up=true;s=play(s,'eclipse');s=play(s,'eclipse');s=play(s,'strike');assert.equal(s.combat.moon,6);assert.equal(s.combat.block,5);
});
test('draw reshuffles discard and never draws more than ten cards',()=>{
 let s=prepared(['insight'],true);s.combat.draw=[];s.combat.discard=[{uid:2001,id:'guard',up:false},{uid:2002,id:'strike',up:false}];s=play(s,'insight');assert.equal(s.combat.hand.length,2);assert.equal(s.combat.discard.length,0);s.combat.hand=Array.from({length:10},(_,i)=>({uid:3000+i,id:i===0?'insight':'guard',up:true}));s.combat.draw=Array.from({length:5},(_,i)=>({uid:4000+i,id:'guard',up:false}));s=play(s,'insight');assert.equal(s.combat.hand.length,10);
});
test('curse can kill and defeat prevents further play',()=>{
 let s=prepared(['curse']);s.hp=2;s=transition(s,{type:'end'});assert.equal(s.phase,'defeat');assert.equal(s.hp,0);assert.equal(transition(s,{type:'end'}),s);
});
test('potions are consumed once; healing is capped; damage targets are validated',()=>{
 let s=createGame();assert.equal(transition(s,{type:'potion',index:0}),s);s.hp=65;s=transition(s,{type:'potion',index:0});assert.equal(s.hp,72);assert.equal(s.potions.length,0);assert.equal(transition(s,{type:'potion',index:0}),s);s.potions=['fire'];assert.equal(transition(s,{type:'potion',index:0,target:-1}),s);s=transition(s,{type:'potion',index:0});assert.equal(s.combat.enemies[0].hp,20);
});
test('rewards are one-shot, support skipping, and only offer valid unique cards',()=>{
 let s=prepared(['strike']);s.combat.enemies[0].hp=1;s=play(s,'strike');const gold=s.gold;assert.equal(s.phase,'reward');assert.equal(new Set(s.reward.cards.map(x=>x.id)).size,3);s=transition(s,{type:'reward',uid:s.reward.cards[0].uid});assert.equal(s.phase,'map');assert.equal(s.deck.length,11);assert.equal(s.gold,gold);assert.equal(transition(s,{type:'reward',uid:null}),s);
});
test('only adjacent next-row map nodes are reachable',()=>{
 const s=createGame(8);s.phase='map';s.floor=2;s.col=0;assert.ok(reachable(s,s.map[3][0]));assert.ok(reachable(s,s.map[3][1]));assert.ok(!reachable(s,s.map[3][2]));assert.equal(transition(s,{type:'node',row:3,col:2}),s);assert.equal(transition(s,{type:'node',row:6,col:0}),s);
});
test('boss rewards advance chapter, heal, and final boss ends the run',()=>{
 let s=prepared(['strike']);s.floor=7;s.combat.boss=true;s.combat.enemies[0].hp=1;s.hp=30;s=play(s,'strike');s=transition(s,{type:'reward',uid:null});assert.equal(s.act,1);assert.equal(s.floor,-1);assert.equal(s.phase,'map');assert.ok(s.hp>=56);assert.ok(s.map[0].every(n=>reachable(s,n)));
 s=prepared(['strike']);s.act=2;s.floor=7;s.combat.boss=true;s.combat.enemies[0].hp=1;s=play(s,'strike');assert.equal(s.phase,'victory');
});
test('camp rest and upgrade are exclusive and cannot upgrade curses',()=>{
 let s=createGame();s.phase='camp';s.hp=20;s=transition(s,{type:'rest'});assert.equal(s.hp,42);assert.equal(s.phase,'map');assert.equal(transition(s,{type:'upgrade',uid:s.deck[0].uid}),s);
 s=createGame();s.phase='camp';const uid=s.deck[0].uid;s=transition(s,{type:'upgrade',uid});assert.ok(s.deck.find(x=>x.uid===uid).up);assert.equal(s.phase,'map');
});
test('shop purchases, removals and event rewards cannot be duplicated',()=>{
 let s=createGame();s.phase='shop';s.gold=200;s.shop={cards:[{uid:900,id:'meteor',up:false}],relic:'ruby',sold:[]};s=transition(s,{type:'buy',item:'card',uid:900});assert.equal(s.gold,155);assert.equal(transition(s,{type:'buy',item:'card',uid:900}),s);s=transition(s,{type:'buy',item:'relic'});assert.equal(s.maxHp,84);assert.equal(s.hp,84);s.gold=100;const uid=s.deck[0].uid;s=transition(s,{type:'buy',item:'remove',uid});assert.ok(!s.deck.some(x=>x.uid===uid));assert.equal(s.gold,40);assert.equal(transition(s,{type:'buy',item:'remove',uid:s.deck[0].uid}),s);
 s.phase='event';s.event=3;s.eventResolved=false;s.hp=8;assert.equal(transition(s,{type:'event',choice:0}),s);s=transition(s,{type:'event',choice:1});assert.equal(s.hp,14);assert.equal(transition(s,{type:'event',choice:1}),s);
});
test('every card, at both upgrade levels, resolves without invalid numeric state',()=>{
 for(const id of Object.keys(CARDS).filter(x=>x!=='curse'))for(const up of [false,true]){let s=prepared([id],up);s.hp=40;s=play(s,id);assert.notEqual(s.combat.hand[0]?.uid,1000,id);assert.ok(Number.isFinite(s.hp)&&s.hp<=s.maxHp,id);assert.ok(Number.isFinite(s.combat.block)&&s.combat.block>=0,id);assert.ok(Number.isFinite(s.combat.moon)&&s.combat.moon>=0,id);assert.ok(s.combat.enemies.every(e=>Number.isFinite(e.hp)&&e.hp>=0),id);}
});
test('save roundtrip continues deterministically; malformed data is rejected',()=>{
 let s=createGame(484);s=transition(s,{type:'end'});const restored=JSON.parse(JSON.stringify(s));assert.ok(validSave(restored));assert.deepEqual(transition(s,{type:'end'}),transition(restored,{type:'end'}));assert.equal(validSave(null),false);assert.equal(validSave({version:1}),false);const corrupt=structuredClone(s);corrupt.deck[0].id='invalid';assert.equal(validSave(corrupt),false);
});
