// Small procedural soundtrack and feedback; no downloaded audio or autoplay.
let ctx:AudioContext|null=null;let timer:ReturnType<typeof setInterval>|null=null;let step=0;
function context(){if(!ctx)ctx=new AudioContext();if(ctx.state==='suspended')void ctx.resume();return ctx;}
function tone(freq:number,start:number,duration:number,volume:number,type:OscillatorType='sine'){
 const a=context(),o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(freq,a.currentTime+start);g.gain.setValueAtTime(0,a.currentTime+start);g.gain.linearRampToValueAtTime(volume,a.currentTime+start+.03);g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+start+duration);o.connect(g);g.connect(a.destination);o.start(a.currentTime+start);o.stop(a.currentTime+start+duration+.1);
}
export function sfx(kind:'card'|'hit'|'block'|'end'|'win'|'click'|'heal'){
 try{if(kind==='hit'){tone(110,0,.18,.055,'triangle');tone(660,.02,.1,.025,'sawtooth');}else if(kind==='block'){tone(440,0,.25,.045);tone(880,.04,.4,.025);}else if(kind==='win'){[392,493.88,587.33,783.99].forEach((f,i)=>tone(f,i*.1,.8,.045));}else if(kind==='end'){tone(220,0,.6,.035);tone(329.63,.12,.5,.025);}else if(kind==='heal'){[523.25,659.25,783.99].forEach((f,i)=>tone(f,i*.09,.5,.04));}else tone(kind==='card'?587.33:440,0,.13,.025,'triangle');}catch{/* Audio may be unavailable in embedded browsers. */}
}
export function music(on:boolean){
 if(timer){clearInterval(timer);timer=null;}if(!on)return;
 try{context();const play=()=>{const roots=[146.83,130.81,110,130.81];const root=roots[step++%4];[1,1.5,2,2.5].forEach((m,i)=>tone(root*m,i*.35,3.8,.015));[2,3,2.5,4].forEach((m,i)=>tone(root*m,.7+i*.6,1.5,.009));};play();timer=setInterval(play,4000);}catch{/* Sound is optional. */}
}
