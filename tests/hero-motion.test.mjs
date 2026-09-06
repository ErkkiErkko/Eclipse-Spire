import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {HeroMotionPlayer,HERO_MOTION_MS,heroFrameAt,HERO_FRAME_STARTS} from '../lib/hero-motion-player.ts';
import {HERO_ATLASES} from '../lib/hero-motion-art.ts';

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

test('each action traverses every key pose in order and returns to idle within 600 ms',()=>{
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
  assert.equal(calls.at(-1).frame,4);
  player.play('attack');
  assert.deepEqual(calls.at(-2),{type:'capture'});
  assert.equal(calls.at(-1).kind,'attack');
  assert.equal(calls.at(-1).entrance,0);
  assert.equal(scheduled.size,1);
  advance(140);
  assert.equal(calls.at(-1).kind,'attack');
  assert.equal(calls.at(-1).frame,4);
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

test('frame sampling exposes an adjacent pose and continuous subframe progress',()=>{
  for(const kind of ['attack','guard','skill','power']) {
    for(let frame=0;frame<HERO_FRAME_STARTS[kind].length;frame++) {
      const p=HERO_FRAME_STARTS[kind][frame]+.001;
      assert.equal(heroFrameAt(kind,p*HERO_MOTION_MS[kind]).frame,frame);
      if(frame<HERO_FRAME_STARTS[kind].length-1){
        const current=heroFrameAt(kind,p*HERO_MOTION_MS[kind]);
        const later=heroFrameAt(kind,(p+.005)*HERO_MOTION_MS[kind]);
        assert.equal(current.next,frame+1);assert.ok(later.mix>current.mix);
      }
    }
    assert.equal(heroFrameAt(kind,-50).progress,0);
    assert.equal(heroFrameAt(kind,9999).progress,1);
    assert.equal(heroFrameAt(kind,9999).recovery,1);
  }
});


test('full-character cel exposure remains under 40 ms for every gesture',()=>{
 for(const kind of ['attack','guard','skill','power']){
  const starts=HERO_FRAME_STARTS[kind];
  assert.ok(starts.length>=15,'Enough complete in-between drawings for '+kind);
  for(let i=0;i<starts.length;i++){
   const exposure=((starts[i+1]??1)-starts[i])*HERO_MOTION_MS[kind];
   assert.ok(exposure>0&&exposure<=40);
  }
 }
});

test('every configured whole-character atlas is included in the deployed public assets',()=>{
 for(const [kind,atlas] of Object.entries(HERO_ATLASES)){
  const bytes=readFileSync(new URL('../public'+atlas.src,import.meta.url));
  assert.ok(bytes.length>1000,kind);
  assert.equal(bytes.toString('ascii',0,4),'RIFF');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');
 }
});
