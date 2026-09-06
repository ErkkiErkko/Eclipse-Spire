// Artwork is keyed by the existing potion IDs; saved runs keep their behavior.
export const POTION_ART: Record<string, {src: string; alt: string}> = {
  heal: {src: '/assets/potions/heal.webp', alt: '月露药剂：月牙瓶塞、青色月露与粉色爱心的圆润水滴瓶'},
  energy: {src: '/assets/potions/energy.webp', alt: '星火药剂：金黄液体与闪电图案的五角星药瓶'},
  fire: {src: '/assets/potions/fire.webp', alt: '辉光药剂：珊瑚红液体与金白色光芒的菱形投掷瓶'},
};
