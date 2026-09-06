import type {HeroActionKind} from './hero-actions.ts';

export const HERO_MOTION_MS = {attack: 430, guard: 400, skill: 480, power: 600, hit: 240} as const;
type MotionKind = HeroActionKind | 'hit';
type MotionTarget = Pick<HTMLElement, 'animate'>;
type MotionStyle = {transform: string; opacity: string};
const REST = 'translate3d(0,0,0) rotate(0deg) scale(1,1)';

export function heroMotionFrames(kind: MotionKind, from = REST): Keyframe[] {
  const frame = (offset: number, transform: string): Keyframe => ({offset, transform, easing: 'cubic-bezier(.22,.75,.25,1)'});
  const ends = [frame(0, from), frame(1, REST)];
  const moves: Record<MotionKind, Keyframe[]> = {
    attack: [frame(.13, 'translate3d(-2%,1%,0) rotate(-3deg) scale(.99,1.01)'), frame(.32, 'translate3d(10%,-1%,0) rotate(7deg) scale(1.035,.97)'), frame(.52, 'translate3d(6%,0,0) rotate(3deg) scale(1,1)')],
    guard: [frame(.19, 'translate3d(-3%,2%,0) rotate(-4deg) scale(.98,1.01)'), frame(.48, 'translate3d(-1%,1%,0) rotate(-2deg) scale(1,1)')],
    skill: [frame(.25, 'translate3d(0,-2%,0) rotate(-1.5deg) scale(1,1.01)'), frame(.54, 'translate3d(0,-3%,0) rotate(1deg) scale(1,1.01)')],
    power: [frame(.12, 'translate3d(0,2%,0) rotate(0deg) scale(1.015,.97)'), frame(.38, 'translate3d(0,-5%,0) rotate(-1.5deg) scale(1.025,1.025)'), frame(.64, 'translate3d(0,-4%,0) rotate(0deg) scale(1.01,1.02)')],
    hit: [frame(.17, 'translate3d(-3%,0,0) rotate(-3deg) scale(1,1)'), frame(.38, 'translate3d(1%,0,0) rotate(1.5deg) scale(1,1)')],
  };
  return [ends[0], ...moves[kind], ends[1]];
}

// Only three animations exist at once. New cards blend from the current pose;
// no queue, timers, promises, or game-state locks are involved.
export class HeroMotionPlayer {
  private body: MotionTarget;
  private idle: MotionTarget;
  private channel: MotionTarget;
  private read: (node: MotionTarget) => MotionStyle;
  private active: Animation[] = [];

  constructor(body: MotionTarget, idle: MotionTarget, channel: MotionTarget, read: (node: MotionTarget) => MotionStyle) {
    this.body = body; this.idle = idle; this.channel = channel; this.read = read;
  }

  play(kind: MotionKind, channelReady = true) {
    // Snapshot BEFORE cancellation, otherwise interrupted moves would snap to idle.
    const start = this.read(this.body).transform;
    const opacities = [this.read(this.idle).opacity, this.read(this.channel).opacity];
    this.cancel();
    const duration = HERO_MOTION_MS[kind];
    const cast = channelReady && (kind === 'skill' || kind === 'power');
    this.active.push(this.body.animate(heroMotionFrames(kind, start === 'none' ? REST : start), {duration, fill: 'none'}));
    [this.idle, this.channel].forEach((node, index) => {
      const peak = cast ? Number(index === 1) : Number(index === 0);
      this.active.push(node.animate([
        {opacity: opacities[index], offset: 0},
        {opacity: peak, offset: .2},
        {opacity: peak, offset: .64},
        {opacity: Number(index === 0), offset: 1},
      ], {duration, easing: 'ease-out', fill: 'none'}));
    });
  }

  cancel() {
    this.active.forEach(animation => animation.cancel());
    this.active = [];
  }
}
