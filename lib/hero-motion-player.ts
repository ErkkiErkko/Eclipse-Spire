import type {HeroActionKind} from './hero-actions.ts';

export const HERO_MOTION_MS = {attack: 560, guard: 460, skill: 520, power: 600, hit: 240} as const;
export type MotionKind = HeroActionKind | 'hit';
export type HeroFrame = {kind: MotionKind; frame: number; progress: number; entrance: number; recovery: number};
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

// Attack gets extra drawings for the cutting arc. Other gestures use six
// cel slots (including intentional holds and shared recovery drawings).
export const HERO_FRAME_STARTS = {
  attack: [0, .10, .22, .34, .46, .60, .74, .88],
  guard: [0, .12, .26, .40, .61, .80],
  skill: [0, .12, .26, .40, .61, .80],
  power: [0, .12, .26, .40, .61, .80],
  hit: [0],
} as const;
export function heroFrameAt(kind: MotionKind, elapsed: number): HeroFrame {
  const progress = Math.min(1, Math.max(0, elapsed / HERO_MOTION_MS[kind]));
  let frame = 0;
  const starts = HERO_FRAME_STARTS[kind];
  for (let i = 1; i < starts.length; i++) if (progress >= starts[i]) frame = i;
  return {kind, frame, progress, entrance: Math.min(1, Math.max(0, elapsed / 40)), recovery: Math.max(0, (progress - .88) / .12)};
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
