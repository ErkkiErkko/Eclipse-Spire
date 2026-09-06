import type {HeroActionKind} from './hero-actions.ts';
import type {HeroFrame, MotionRenderer} from './hero-motion-player.ts';
import {HERO_ATTACK_HANDS, HERO_KATANA} from './hero-attack-rig.ts';

export const HERO_ATLASES: Record<HeroActionKind, string> = {
  attack: '/assets/characters/motion/attack-v2.webp',
  guard: '/assets/characters/motion/guard.webp',
  skill: '/assets/characters/motion/skill.webp',
  power: '/assets/characters/motion/power.webp',
};
export const HERO_IDLE_CEL = '/assets/characters/motion/idle.webp';
const loadedImages = new Map<string, Promise<HTMLImageElement | null>>();
function loadImage(src: string) {
  let pending = loadedImages.get(src);
  if (!pending) {
    pending = new Promise<HTMLImageElement | null>(resolve => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => { loadedImages.delete(src); resolve(null); };
      img.src = src;
    });
    loadedImages.set(src, pending);
  }
  return pending;
}

export function createHeroRenderer(canvas: HTMLCanvasElement): {renderer: MotionRenderer; dispose: () => void} | null {
  const context = canvas.getContext('2d');
  if (!context) return null;
  const {width, height} = canvas, stageSize = width, stageTop = height - stageSize;
  const snapshot = document.createElement('canvas'), cel = document.createElement('canvas');
  for (const buffer of [snapshot, cel]) { buffer.width = width; buffer.height = height; }
  const snapshotContext = snapshot.getContext('2d'), celContext = cel.getContext('2d');
  if (!snapshotContext || !celContext) return null;
  let disposed = false, active = false, idleArt: HTMLImageElement | null = null, katana: HTMLImageElement | null = null;
  const sheets: Partial<Record<HeroActionKind, HTMLImageElement>> = {};
  function drawSheet(target: CanvasRenderingContext2D, image: HTMLImageElement, frame: number, columns: number) {
    const cw = image.naturalWidth / columns, ch = image.naturalHeight / 2;
    target.drawImage(image, frame % columns * cw, Math.floor(frame / columns) * ch, cw, ch, 0, stageTop, stageSize, stageSize);
  }
  function paintAttack(frame: number) {
    const body = sheets.attack;
    if (!body || !katana) return;
    const ctx = celContext!, hand = HERO_ATTACK_HANDS[frame], scale = stageSize / 768;
    drawSheet(ctx, body, frame, 4);
    // One fixed single-edged blade, rotated only. Never mirrored or redrawn.
    const weaponWidth = HERO_KATANA.width * scale;
    const weaponHeight = weaponWidth * katana.naturalHeight / katana.naturalWidth;
    ctx.save();
    ctx.translate(hand.x * scale, stageTop + hand.y * scale);
    ctx.rotate(hand.angle * Math.PI / 180);
    ctx.drawImage(katana, -weaponWidth * HERO_KATANA.pivotX, -weaponHeight * HERO_KATANA.pivotY, weaponWidth, weaponHeight);
    ctx.restore();
    // Repaint just the fingers in front of the handle; the blade remains in
    // front of the torso throughout the cut. These are original body pixels.
    ctx.save(); ctx.beginPath();
    ctx.ellipse(hand.x * scale, stageTop + hand.y * scale, 18 * scale, 14 * scale, 0, 0, Math.PI * 2);
    ctx.clip(); drawSheet(ctx, body, frame, 4); ctx.restore();
  }
  function paintIdle() {
    celContext!.clearRect(0, 0, width, height);
    if (sheets.attack && katana) paintAttack(0);
    else if (idleArt) celContext!.drawImage(idleArt, 0, stageTop, stageSize, stageSize);
  }
  function drawIdle(alpha = 1, x = 0) {
    if (!idleArt || alpha <= 0) return;
    paintIdle(); context!.globalAlpha = alpha; context!.drawImage(cel, x, 0); context!.globalAlpha = 1;
  }
  function idle() {
    active = false;
    if (disposed || !idleArt) return;
    context!.clearRect(0, 0, width, height); drawIdle();
    canvas.dataset.ready = 'true'; canvas.dataset.motion = 'idle'; canvas.dataset.frame = '0';
  }
  void loadImage(HERO_IDLE_CEL).then(image => { if (!disposed) { idleArt = image; if (!active) idle(); } });
  void loadImage(HERO_KATANA.src).then(image => { if (!disposed) { katana = image; if (!active) idle(); } });
  for (const [kind, src] of Object.entries(HERO_ATLASES)) {
    void loadImage(src).then(image => { if (!disposed && image) { sheets[kind as HeroActionKind] = image; if (!active) idle(); } });
  }
  const renderer: MotionRenderer = {
    ready: kind => !disposed && !!idleArt && (kind === 'hit' || (!!sheets[kind] && (kind !== 'attack' || !!katana))),
    capture() { snapshotContext.clearRect(0, 0, width, height); snapshotContext.drawImage(canvas, 0, 0); },
    idle,
    draw(frame: HeroFrame) {
      if (disposed) return;
      active = true; context.clearRect(0, 0, width, height);
      canvas.dataset.motion = frame.kind; canvas.dataset.frame = String(frame.frame);
      if (frame.kind === 'hit') { drawIdle(1, -Math.sin(frame.progress * Math.PI * 2) * (1 - frame.progress) * width * .025); return; }
      const image = sheets[frame.kind];
      if (!image) { idle(); return; }
      celContext.clearRect(0, 0, width, height);
      if (frame.kind === 'attack') paintAttack(frame.frame);
      else drawSheet(celContext, image, frame.frame, 3);
      context.globalAlpha = frame.entrance * (1 - frame.recovery);
      context.drawImage(cel, 0, 0); context.globalAlpha = 1;
      if (frame.entrance < 1) { context.globalAlpha = 1 - frame.entrance; context.drawImage(snapshot, 0, 0); context.globalAlpha = 1; }
      if (frame.recovery > 0) drawIdle(frame.recovery);
    },
  };
  return {renderer, dispose() { disposed = true; }};
}
