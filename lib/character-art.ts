// Separate from run state: existing saves automatically use the current illustrations.
export type CharacterArt = {
  src: string;
  alt: string;
};

export const HERO_ART: CharacterArt = {
  src: '/assets/characters/hero-cute-v2.webp',
  alt: '月之剑姬莉雅：银白长发、青色眼睛与蝴蝶结，穿着象牙白和青色短披肩裙装，微笑着握住月刃',
};

export const FOE_ART: Record<string, CharacterArt> = {
  sentinel: { src: '/assets/characters/sentinel-v2.webp', alt: '荆棘守卫：栗色双丸子辫，鼠尾草绿兜帽与叶片盾牌，抱着荆棘短剑的可爱守卫' },
  wraith: { src: '/assets/characters/wraith-v2.webp', alt: '失声歌姬：浅水蓝短卷发，蓝白蓬袖舞台裙，握着铃铛麦克风轻声歌唱' },
  raven: { src: '/assets/characters/raven-v2.webp', alt: '黑羽使徒：深蓝短发、金色眼睛、羽毛贝雷帽与黑白斗篷，俏皮地挥动乌鸦魔杖' },
  duelist: { src: '/assets/characters/duelist-v2.webp', alt: '蔷薇剑姬：珊瑚粉卷曲双马尾，红白蔷薇裙，自信地举起细剑' },
  oracle: { src: '/assets/characters/oracle-v2.webp', alt: '盲眼先知：薄荷绿长直发，星星眼罩和宽袖长袍，双手托起星形水晶' },
  reaper: { src: '/assets/characters/reaper-v2.webp', alt: '收魂女爵：淡紫侧马尾、小礼帽与紫黑娃娃裙，羞涩地抱着弯月镰刀' },
  seraph: { src: '/assets/characters/seraph.webp', alt: '折翼天使：蓬松金色短发，断环光环、小天使翅膀和蓝披风，拿着太阳短矛' },
  witch: { src: '/assets/characters/witch.webp', alt: '镜月魔女：紫色麻花辫、大大的软沿魔女帽，手握银镜和小扫帚，露出好奇的笑容' },
  elite: { src: '/assets/characters/elite.webp', alt: '无名处刑者：灰色双辫、酒红大兜帽与厚实外套裙，鼓着脸颊抱住巨大的宽刃斧' },
  boss0: { src: '/assets/characters/boss0.webp', alt: '缄默圣女伊芙：珍珠白长发、奶油色修女头纱与钟形白裙，持金色铃杖温柔祝祷' },
  boss1: { src: '/assets/characters/boss1.webp', alt: '镜之女王赛琳：冰蓝长卷发、水晶小皇冠和银蓝宽摆礼裙，身旁漂浮着椭圆银镜' },
  boss2: { src: '/assets/characters/boss2.webp', alt: '蚀月神姬诺克丝：靛紫长双马尾、大月牙发饰、月形斗篷和星星魔杖，露出得意的可爱笑容' },
};

const CARD_CHARACTERS: Record<string, string> = {
  thorn: 'sentinel', bloom: 'sentinel', fracture: 'duelist', crescent: 'duelist',
  drain: 'reaper', mist: 'wraith', insight: 'oracle', resolve: 'oracle',
  quick: 'raven', storm: 'raven', ward: 'seraph', barrier: 'seraph',
  echo: 'boss1', bind: 'witch', curse: 'witch', trance: 'boss0',
  eclipse: 'boss2', nightfall: 'boss2', nova: 'boss2',
};

export function cardPortrait(id: string): string {
  return FOE_ART[CARD_CHARACTERS[id]]?.src ?? HERO_ART.src;
}
