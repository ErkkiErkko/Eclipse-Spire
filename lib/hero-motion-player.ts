import type {HeroActionKind} from './hero-actions.ts';
import {HERO_ATLASES} from './hero-motion-art.ts';

export const HERO_MOTION_MS = {attack: 560, guard: 460, skill: 520, power: 600, hit: 240} as const;
export type MotionKind = HeroActionKind | 'hit';
export type HeroFrame = {kind: MotionKind; frame: number; next: number; mix: number; progress: number; entrance: number; recovery: number};
export type MotionRenderer = {
  ready: (kind: MotionKind) => boolean;
  capture: () => void;
  draw: (frame: HeroFrame) => void;
  idle: () => void;
};
export type MotionClock = {
  now: () => number;
  request: (callback: (time: number) => void) => number;
  cancel: (id: number) => void;
};

// More complete in-between drawings give a regular exposure cadence. Every
// image already includes the whole body, both hands and the held katana.
const starts=(kind:HeroActionKind)=>Array.from({length:HERO_ATLASES[kind].frames},(_,i)=>i/HERO_ATLASES[kind].frames);
export const HERO_FRAME_STARTS = {
  attack: starts('attack'),
  guard: starts('guard'),
  skill: starts('skill'),
  power: starts('power'),
  hit: [0],
} as const;
export function heroFrameAt(kind: MotionKind, elapsed: number): HeroFrame {
  const progress = Math.min(1, Math.max(0, elapsed / HERO_MOTION_MS[kind]));
  let frame = 0;
  const starts = HERO_FRAME_STARTS[kind];
  for (let i = 1; i < starts.length; i++) if (progress >= starts[i]) frame = i;
  const next = Math.min(frame + 1, starts.length - 1);
  const end = starts[next] ?? 1;
  const mix = next === frame ? 0 : (progress - starts[frame]) / (end - starts[frame]);
  const ease = (n: number) => {const t = Math.max(0, Math.min(1, n)); return t * t * (3 - 2 * t);};
  return {kind, frame, next, mix, progress, entrance: ease(elapsed / 70), recovery: ease((progress - .80) / .20)};
}

// One visual clock, no action queue and no gameplay lock. Capture the actual
// displayed pixels on interruption so even fast consecutive cards can blend.
export class HeroMotionPlayer {
  private renderer: MotionRenderer;
  private clock: MotionClock;
  private requestId: number | null = null;
  private generation = 0;

  constructor(renderer: MotionRenderer, clock: MotionClock) {
    this.renderer = renderer;
    this.clock = clock;
  }

  play(kind: MotionKind) {
    if (!this.renderer.ready(kind)) { this.cancel(); return false; }
    this.renderer.capture();
    this.stop();
    const generation = this.generation;
    const start = this.clock.now();
    const tick = (time: number) => {
      if (generation !== this.generation) return;
      this.requestId = null;
      const frame = heroFrameAt(kind, time - start);
      if (frame.progress >= 1) { this.renderer.idle(); return; }
      this.renderer.draw(frame);
      this.requestId = this.clock.request(tick);
    };
    tick(start);
    return true;
  }

  private stop() {
    this.generation++;
    if (this.requestId !== null) this.clock.cancel(this.requestId);
    this.requestId = null;
  }

  cancel() { this.stop(); this.renderer.idle(); }
}
