import type {HeroActionKind} from './hero-actions.ts';

// Each cell is one complete illustration: body, all limbs, hands and katana.
// No body-part textures, landmark warping or separate weapon attachments.
export const HERO_ATLASES:Record<HeroActionKind,{src:string;columns:number;frames:number;idleFrames:readonly number[]}>={
 attack:{src:'/assets/characters/motion/attack-whole-v5.webp',columns:4,frames:16,idleFrames:[0,15]},
 guard:{src:'/assets/characters/motion/guard-whole-v5.webp',columns:4,frames:16,idleFrames:[0,14,15]},
 skill:{src:'/assets/characters/motion/skill-whole-v5.webp',columns:4,frames:16,idleFrames:[0,14,15]},
 power:{src:'/assets/characters/motion/power-whole-v5.webp',columns:4,frames:16,idleFrames:[0,14,15]},
};
export const HERO_IDLE_CEL='/assets/characters/motion/idle.webp';
