import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,transition} from '../lib/game-engine.ts';
import {CARDS} from '../lib/game-data.ts';
import {heroActionForPlay} from '../lib/hero-actions.ts';
import {HeroMotionPlayer,HERO_MOTION_MS,heroMotionFrames} from '../lib/hero-motion-player.ts';

function prepared(ids) {
  const state=createGame(43);
  state.combat.hand=ids.map((id,i)=>({id,uid:1000+i,up:false}));
  state.combat.energy=40;
  state.combat.enemies[0].hp=500;
  state.combat.enemies[0].maxHp=500;
  return state;
}
function gesture(id,patch=()=>{}) {
  const before=prepared([id]);patch(before);
  const action={type:'play',uid:1000,target:before.combat.enemies[0].uid};
  return heroActionForPlay(before,transition(before,action),action);
}

test('all playable cards select the intended main gesture, including mixed-effect cards',()=>{
  const groups={
    attack:['strike','mooncut','quick','crescent','storm','fracture','meteor','drain','nightfall','comet','nova'],
    guard:['guard','mist','ward','bind','barrier','resolve'],
    skill:['focus','thorn','insight','bloom','echo'],
    power:['trance','blade','eclipse'],
  };
  assert.deepEqual(Object.values(groups).flat().sort(),Object.keys(CARDS).filter(id=>id!=='curse').sort());
  for(const [kind,ids] of Object.entries(groups))for(const id of ids)assert.equal(gesture(id).kind,kind,id);
});

test('relic-granted block does not replace a draw or moon skill with a defense pose',()=>{
  assert.equal(gesture('insight',s=>s.relics.push('thread')).kind,'skill');
  assert.equal(gesture('focus',s=>s.relics.push('thread')).kind,'skill');
  assert.equal(gesture('insight').cue,'draw');
  assert.equal(gesture('bloom').cue,'heal');
  assert.equal(gesture('blade').cue,'blade');
});

test('invalid, unaffordable, and duplicate card submissions do not animate',()=>{
  const before=prepared(['strike']);
  for(const action of [{type:'play',uid:-1},{type:'play',uid:1000,target:-1}])assert.equal(heroActionForPlay(before,transition(before,action),action),null);
  before.combat.energy=0;
  const action={type:'play',uid:1000};
  assert.equal(heroActionForPlay(before,transition(before,action),action),null);
  before.combat.energy=3;
  const after=transition(before,action);
  assert.equal(heroActionForPlay(after,transition(after,action),action),null);
  assert.equal(gesture('curse'),null);
});

test('turns, potions and initial run state do not impersonate a card animation',()=>{
  const before=createGame(8);
  const action={type:'end'};
  assert.equal(heroActionForPlay(before,transition(before,action),action),null);
  const potion={type:'potion',index:0};before.hp=40;
  assert.equal(heroActionForPlay(before,transition(before,potion),potion),null);
});

test('successive instant plays consume each card once and emit distinct animation serials',()=>{
  let state=prepared(['focus','guard','trance','strike']);
  const serials=[];
  for(const uid of [1000,1001,1002,1003]) {
    const action={type:'play',uid,target:state.combat.enemies[0].uid};
    const next=transition(state,action);
    serials.push(heroActionForPlay(state,next,action).serial);
    state=next;
  }
  assert.equal(state.stats.cardsPlayed,4);
  assert.equal(new Set(serials).size,4);
  assert.equal(state.combat.hand.length,0);
});

test('double strikes and stored-moon finishers keep their specific cues, including lethal hits',()=>{
  assert.equal(gesture('crescent').hits,2);
  assert.equal(gesture('mooncut',s=>s.combat.moon=5).charged,true);
  assert.equal(gesture('mooncut',s=>s.combat.moon=0).charged,false);
  assert.equal(gesture('strike',s=>s.combat.enemies[0].hp=1).kind,'attack');
});

function surface() {
  const calls=[];
  const nodes=['body','idle','channel'].map(name=>({
    name,style:{transform:'none',opacity:name==='channel'?'0':'1'},
    animate(frames,options){
      const call={name,frames,options,canceled:0};calls.push(call);
      return {cancel(){call.canceled++;}};
    },
  }));
  const player=new HeroMotionPlayer(...nodes,node=>node.style);
  return {player,nodes,calls};
}

test('rapid interruptions cancel old motion and blend from the currently visible transform and opacity',()=>{
  const {player,nodes,calls}=surface();
  player.play('power');
  nodes[0].style.transform='matrix(1, 0, 0, 1, 22, -8)';
  nodes[1].style.opacity='.3';nodes[2].style.opacity='.7';
  player.play('attack');
  assert.ok(calls.slice(0,3).every(call=>call.canceled===1));
  assert.equal(calls[3].frames[0].transform,'matrix(1, 0, 0, 1, 22, -8)');
  assert.equal(calls[4].frames[0].opacity,'.3');
  assert.equal(calls[5].frames[0].opacity,'.7');
  assert.equal(calls.length,6);
  player.cancel();player.cancel();
  assert.ok(calls.every(call=>call.canceled===1));
});

test('missing pose image never fades out the idle sprite and motions always recover within 600 ms',()=>{
  const {player,calls}=surface();
  player.play('skill',false);
  assert.equal(calls[1].frames[1].opacity,1);
  assert.equal(calls[2].frames[1].opacity,0);
  for(const [kind,duration] of Object.entries(HERO_MOTION_MS)){
    assert.ok(duration<=600);
    const frames=heroMotionFrames(kind);
    assert.equal(frames.at(-1).offset,1);
    assert.equal(frames.at(-1).transform,'translate3d(0,0,0) rotate(0deg) scale(1,1)');
    assert.deepEqual(frames.map(frame=>frame.offset),frames.map(frame=>frame.offset).sort((a,b)=>a-b));
  }
});
