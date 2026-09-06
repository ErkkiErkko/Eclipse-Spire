import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,transition} from '../lib/game-engine.ts';
import {CARDS} from '../lib/game-data.ts';
import {heroActionForPlay} from '../lib/hero-actions.ts';


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
