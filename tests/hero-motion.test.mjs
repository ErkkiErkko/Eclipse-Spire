import test from 'node:test';
import assert from 'node:assert/strict';
import {HeroMotionPlayer,HERO_MOTION_MS,heroFrameAt,HERO_FRAME_STARTS} from '../lib/hero-motion-player.ts';

function surface(ready=true) {
  let now=0, nextId=0;
  const scheduled=new Map(), calls=[];
  const renderer={
    ready:()=>ready,
    capture:()=>calls.push({type:'capture'}),
    draw:frame=>calls.push({type:'draw',...frame}),
    idle:()=>calls.push({type:'idle'}),
  };
  const player=new HeroMotionPlayer(renderer,{
    now:()=>now,
    request:callback=>{const id=++nextId;scheduled.set(id,callback);return id;},
    cancel:id=>scheduled.delete(id),
  });
  return {player,calls,scheduled,advance(ms){now+=ms;const callbacks=[...scheduled.values()];scheduled.clear();callbacks.forEach(callback=>callback(now));}};
}

test('each action displays every cel slot in order and returns to idle within 600 ms',()=>{
  for(const kind of ['attack','guard','skill','power']){
    const {player,calls,advance,scheduled}=surface();
    player.play(kind);
    for(let elapsed=10;elapsed<=HERO_MOTION_MS[kind];elapsed+=10)advance(10);
    assert.deepEqual([...new Set(calls.filter(c=>c.type==='draw').map(c=>c.frame))],HERO_FRAME_STARTS[kind].map((_,i)=>i),kind);
    assert.equal(calls.at(-1).type,'idle');
    assert.equal(scheduled.size,0);
    assert.ok(HERO_MOTION_MS[kind]<=600);
  }
});

test('fast cards capture the visible frame and immediately replace the timeline without queueing',()=>{
  const {player,calls,advance,scheduled}=surface();
  player.play('power');advance(180);
  assert.equal(calls.at(-1).frame,2);
  player.play('attack');
  assert.deepEqual(calls.at(-2),{type:'capture'});
  assert.equal(calls.at(-1).kind,'attack');
  assert.equal(calls.at(-1).entrance,0);
  assert.equal(scheduled.size,1);
  advance(140);
  assert.equal(calls.at(-1).kind,'attack');
  assert.equal(calls.at(-1).frame,2);
  player.play('guard');player.play('skill');
  assert.equal(scheduled.size,1);
  advance(520);
  assert.equal(calls.at(-1).type,'idle');
  assert.equal(scheduled.size,0);
});

test('cancel prevents stale frames after reduced-motion, navigation or unmount',()=>{
  const {player,calls,scheduled,advance}=surface();
  player.play('attack');
  const stale=[...scheduled.values()][0];
  player.cancel();
  const count=calls.length;
  stale(100);advance(1000);
  assert.equal(calls.length,count);
  assert.equal(calls.at(-1).type,'idle');
  assert.equal(scheduled.size,0);
});

test('unloaded or failed artwork retains the idle character without queuing late playback',()=>{
  const {player,calls,scheduled}=surface(false);
  assert.equal(player.play('skill'),false);
  assert.deepEqual(calls,[{type:'idle'}]);
  assert.equal(scheduled.size,0);
});

test('frame sampling holds drawings rather than translating between sprite cells',()=>{
  for(const kind of ['attack','guard','skill','power']) {
    for(let frame=0;frame<HERO_FRAME_STARTS[kind].length;frame++) {
      const p=HERO_FRAME_STARTS[kind][frame]+.001;
      assert.equal(heroFrameAt(kind,p*HERO_MOTION_MS[kind]).frame,frame);
    }
    assert.equal(heroFrameAt(kind,-50).progress,0);
    assert.equal(heroFrameAt(kind,9999).progress,1);
    assert.equal(heroFrameAt(kind,9999).recovery,1);
  }
});
