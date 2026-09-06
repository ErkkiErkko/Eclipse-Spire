import type {HeroActionKind} from './hero-actions.ts';
import type {HeroFrame,MotionRenderer} from './hero-motion-player.ts';
import {HERO_ATLASES,HERO_IDLE_CEL} from './hero-motion-art.ts';
export {HERO_ATLASES,HERO_IDLE_CEL} from './hero-motion-art.ts';

const loadedImages=new Map<string,Promise<HTMLImageElement|null>>();
function loadImage(src:string){
 let pending=loadedImages.get(src);
 if(!pending){pending=new Promise<HTMLImageElement|null>(resolve=>{
  const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{loadedImages.delete(src);resolve(null);};image.src=src;
 });loadedImages.set(src,pending);}
 return pending;
}
const ease=(value:number)=>{const t=Math.max(0,Math.min(1,value));return t*t*(3-2*t);};

export function createHeroRenderer(canvas:HTMLCanvasElement):{renderer:MotionRenderer;dispose:()=>void}|null{
 const context=canvas.getContext('2d');if(!context)return null;
 const {width,height}=canvas;
 const snapshot=document.createElement('canvas'),cel=document.createElement('canvas');
 for(const buffer of [snapshot,cel]){buffer.width=width;buffer.height=height;}
 const captured=snapshot.getContext('2d'),composed=cel.getContext('2d');if(!captured||!composed)return null;
 let disposed=false,active=false,blendFromCapture=false,idleArt:HTMLImageElement|null=null;
 const atlases:Partial<Record<HeroActionKind,HTMLImageElement>>={};
 function paintCell(ctx:CanvasRenderingContext2D,kind:HeroActionKind,index:number,alpha=1){
  if(alpha<=0)return;
  // Reuse the complete first attack drawing as a common ready/return pose.
  if(HERO_ATLASES[kind].idleFrames.includes(index)){kind='attack';index=0;}
  const image=atlases[kind];if(!image)return;
  const config=HERO_ATLASES[kind],cellWidth=image.naturalWidth/config.columns,cellHeight=image.naturalHeight/Math.ceil(config.frames/config.columns);
  ctx.globalAlpha=alpha;
  const scale=Math.min(width/cellWidth,height/cellHeight),dw=cellWidth*scale,dh=cellHeight*scale;
  ctx.drawImage(image,index%config.columns*cellWidth,Math.floor(index/config.columns)*cellHeight,cellWidth,cellHeight,(width-dw)/2,height-dh,dw,dh);
  ctx.globalAlpha=1;
 }
 function paintIdle(ctx:CanvasRenderingContext2D,alpha=1,x=0){
  if(alpha<=0)return;
  ctx.save();ctx.translate(x,0);ctx.globalAlpha=alpha;
  if(atlases.attack)paintCell(ctx,'attack',0,alpha);
  else if(idleArt){const size=Math.min(width,height*.75);ctx.drawImage(idleArt,(width-size)/2,height-size,size,size);}
  ctx.restore();
 }
 function idle(){
  active=false;if(disposed||(!idleArt&&!atlases.attack))return;
  context!.clearRect(0,0,width,height);paintIdle(context!);
  canvas.dataset.ready='true';canvas.dataset.motion='idle';canvas.dataset.frame='0';
 }
 void loadImage(HERO_IDLE_CEL).then(image=>{if(!disposed){idleArt=image;if(!active)idle();}});
 for(const kind of Object.keys(HERO_ATLASES) as HeroActionKind[])void loadImage(HERO_ATLASES[kind].src).then(image=>{
  if(disposed||!image)return;atlases[kind]=image;canvas.dataset.renderer='whole-cels';if(!active)idle();
 });
 const renderer:MotionRenderer={
  ready:kind=>!disposed&&(kind==='hit'?!!(idleArt||atlases.attack):!!atlases.attack&&!!atlases[kind]),
  capture(){blendFromCapture=active;captured.clearRect(0,0,width,height);captured.drawImage(canvas,0,0);},
  idle,
  draw(frame:HeroFrame){
   if(disposed)return;
   active=true;context.clearRect(0,0,width,height);
   canvas.dataset.motion=frame.kind;canvas.dataset.frame=String(frame.frame);canvas.dataset.mix=frame.mix.toFixed(3);
   if(frame.kind==='hit'){paintIdle(context,1,-Math.sin(frame.progress*Math.PI*2)*(1-frame.progress)*width*.025);return;}
   if(!atlases[frame.kind]||!atlases.attack){idle();return;}
   composed.clearRect(0,0,width,height);
   // A brief whole-image dissolve softens the exposure boundary. It never bends,
   // rotates, mirrors or assembles anatomy, and preserves every cel's proportions.
   const blend=frame.next===frame.frame?0:ease((frame.mix-.72)/.28);
   paintCell(composed,frame.kind,frame.frame,1-blend);
   composed.globalCompositeOperation='lighter';paintCell(composed,frame.kind,frame.next,blend);composed.globalCompositeOperation='source-over';
   const entrance=blendFromCapture?frame.entrance:1;
   context.globalAlpha=entrance;context.drawImage(cel,0,0);context.globalAlpha=1;
   if(entrance<1){context.globalCompositeOperation='lighter';context.globalAlpha=1-entrance;context.drawImage(snapshot,0,0);context.globalAlpha=1;context.globalCompositeOperation='source-over';}
  },
 };
 return {renderer,dispose(){disposed=true;}};
}
