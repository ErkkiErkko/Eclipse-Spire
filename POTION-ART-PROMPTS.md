# 药剂贴图设计与生成记录

三种药剂分别使用水滴、五角星和菱形瓶身，以青色爱心、金色闪电和珊瑚红光芒表达恢复生命、补充能量和直接伤害。采用简约二维动画风格、深色轮廓、明快色块与真实透明背景。药剂栏、战后奖励和商店统一使用独立贴图。

全部图片由内置 imagegen 生成，使用 Sharp 无损编码为 WebP，保留工具原生尺寸和透明通道，没有缩放、裁切或手工改画。显示时使用 `object-fit: contain` 保持完整瓶型。

| 药剂 | 效果 | 图案 | 游戏资源 | 实际尺寸 |
| --- | --- | --- | --- | --- |
| 月露药剂 | 恢复 20 点生命，不消耗能量。 | 月牙瓶塞、青色月露与粉色爱心的圆润水滴瓶 | [heal.webp](public/assets/potions/heal.webp) | 1254 × 1254 |
| 星火药剂 | 获得 2 点能量。 | 金黄液体与闪电图案的五角星药瓶 | [energy.webp](public/assets/potions/energy.webp) | 1254 × 1254 |
| 辉光药剂 | 对选中敌人造成 20 点直接伤害。默认目标为第一个存活敌人。 | 珊瑚红液体与金白色光芒的菱形投掷瓶 | [fire.webp](public/assets/potions/fire.webp) | 1254 × 1254 |

## 完整生成提示词

### 月露药剂（heal）

```text
Use case: stylized-concept
Asset type: original transparent inventory potion icon for the Chinese cute 2D anime deckbuilder 月蚀尖塔; potion id heal, named 月露药剂, restores 20 HP. Do not render any text.
Primary request: ONE squat rounded teardrop glass bottle containing pale aqua moon-dew liquid and a chunky pink heart inside, with a small crescent moon stopper and a tiny ivory ribbon tied at the neck.
Style/medium: simple cheerful 2D animation inventory art; thick dark navy outlines, broad flat colors, one crisp cel shadow, minimal detail and minimal highlights. Strong instantly readable silhouette at 32–64 pixels. Cute and clean, not realistic.
Composition/framing: square 1024x1024 canvas, one complete bottle centered with generous transparent margins on every side; entire stopper, bottle and ribbon visible; bottle occupies roughly two thirds of canvas height.
Scene/backdrop: genuinely transparent RGBA PNG background, alpha zero outside the artwork; preserve natural crisp antialiased edges.
Constraints: one single complete bottle only, pale aqua liquid, chunky pink heart, crescent stopper, tiny ivory neck ribbon. No people, text, letters, numbers, UI, badges, borders, watermark, extra objects, floor, cast shadow, background scenery, matte, checkerboard pattern, glow cloud or gradient background.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/potion-art/heal.png`

游戏贴图：[heal.webp](public/assets/potions/heal.webp)

### 星火药剂（energy）

```text
Use case: stylized-concept
Asset type: original transparent 2D anime game inventory potion icon for Chinese cute deckbuilder 月蚀尖塔; item id energy, 星火药剂, grants 2 energy (context only, no text in image).
Primary request: ONE compact five-point STAR-SHAPED glass bottle containing bright golden-yellow liquid and a single bold amber lightning bolt clearly visible inside. The bottle has a short navy neck and cork, with a tiny teal neck-band. Give it a strong, instantly recognizable five-point star silhouette legible at 32–64px.
Style/medium: simple cheerful 2D animation inventory art, thick dark navy outlines, broad flat colors, one crisp cel shadow, minimal detail and highlights. Clean front-facing icon.
Composition/framing: square 1024×1024 image requested. Center one COMPLETE bottle with generous empty transparent margins around every edge. Bottle occupies about 65–70% of the canvas; no cropping.
Scene/backdrop: actual transparent RGBA PNG background, with alpha-zero pixels outside the bottle. Preserve actual alpha transparency; do not draw a background representation.
Constraints: exactly one bottle, complete five-point star glass shape, golden-yellow liquid, one bold amber lightning bolt, navy neck/cork, tiny teal neck-band. No matte, checkerboard, floor, cast shadow, glow cloud, text, lettering, UI, badge, people, decorative objects, or watermark.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/potion-art/energy.png`

游戏贴图：[energy.webp](public/assets/potions/energy.webp)

### 辉光药剂（fire）

```text
Use case: stylized-concept
Asset type: original transparent potion inventory icon for the Chinese cute 2D anime deckbuilder 月蚀尖塔. Asset id fire; in-game name 辉光药剂; thrown at one enemy for 20 direct damage (context only; do not render words or numbers).
Primary request: One complete stout, angular DIAMOND-SHAPED throw flask with coral-red liquid. Its broad faceted diamond body must have a clearly pointed bottom, broad angular left and right shoulders, and a short wide dark-plum neck/cork with one simple gold collar. Inside the liquid is ONE large bold ivory-gold sunburst, with chunky simple rays. The flask silhouette is distinctly a faceted diamond, never round and never star-shaped.
Style/medium: cheerful cute 2D anime animation inventory art, thick dark navy outlines, broad flat colors, one crisp cel shadow, very minimal details and minimal highlights. Readable at 32–64 pixels. No realism, no complex texture, no gradient shading.
Composition/framing: square 1024 x 1024 image. Center the one complete upright bottle with generous transparent margins on all sides. Entire cork and bottom tip fully visible.
Scene/backdrop: genuinely transparent RGBA image; all background pixels must be alpha zero. Preserve antialiased opaque bottle edges.
Constraints: Only the complete potion bottle; no text, numbers, logos, UI, badge, people, extra objects, sparkle particles, checkerboard, matte, colored background, floor, cast shadow, glow cloud, or scenery.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/potion-art/fire.png`

游戏贴图：[fire.webp](public/assets/potions/fire.webp)
