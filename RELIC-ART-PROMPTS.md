# 遗物贴图设计与生成记录

全部 12 件遗物使用独立的二维动画物件插画：深色轮廓、明快色块、各不相同的外形和真实透明背景。物件本身体现遗物名称；红心、盾形、金币和闪电等细节提示对应效果。遗物栏、战后奖励、商店、遗物详情和结局回顾统一使用这套贴图。

所有创意绘制与必要修正均使用内置 imagegen。原生输出为 11 张 1254 × 1254 PNG，月之吊坠最终为 1224 × 1285 PNG；保留原生尺寸与透明通道，没有裁切、缩放或手工改画。使用 `scripts/encode-relic-art.cjs` 无损编码为 WebP。页面使用 `object-fit: contain` 保持比例。

图片路径集中在 `lib/relic-art.ts`，不写入游戏存档。

| 遗物 | 游戏效果 | 画面设计 | 游戏资源 |
| --- | --- | --- | --- |
| 月之吊坠 | 每场战斗开始时，获得 2 层月辉。 | 金色月牙环抱两颗青色月珠 | [pendant.webp](public/assets/relics/pendant.webp) |
| 白鸦之羽 | 每场战斗第一回合额外抽 2 张牌。 | 轻盈弯曲的白羽与青色羽轴 | [feather.webp](public/assets/relics/feather.webp) |
| 赤心琥珀 | 最大生命增加 12，获得时恢复 12 点生命。 | 蜂蜜色琥珀中封存着一颗红心 | [ruby.webp](public/assets/relics/ruby.webp) |
| 无声铃 | 每次结束回合时，获得 1 层月辉。 | 系着深蓝蝴蝶结、悬挂月牙铃舌的银蓝小铃 | [bell.webp](public/assets/relics/bell.webp) |
| 断剑铭文 | 每场战斗开始时，获得 1 点力量。 | 红色剑柄与刻有青色印记的银色断刃 | [whetstone.webp](public/assets/relics/whetstone.webp) |
| 晨曦结晶 | 每场战斗第一回合获得 10 点格挡。 | 顶部伸出日光尖角的金色盾形晶体 | [amber.webp](public/assets/relics/amber.webp) |
| 不凋蔷薇 | 每次战斗胜利后，恢复 4 点生命。 | 带着翠绿叶片与心形花芯的粉色蔷薇 | [rose.webp](public/assets/relics/rose.webp) |
| 旅人的罗盘 | 战斗获得的金币增加 25%。 | 红青指针的黄铜罗盘，下方挂着金币 | [compass.webp](public/assets/relics/compass.webp) |
| 流光沙漏 | 每场战斗第一回合额外获得 1 点能量。 | 青色沙漏中流动着闪电形金色光砂 | [hourglass.webp](public/assets/relics/hourglass.webp) |
| 空月之冠 | 每回合额外获得 1 点能量，但少抽 1 张牌。 | 镶嵌紫宝石、中央留有月牙空隙的银白王冠 | [crown.webp](public/assets/relics/crown.webp) |
| 碎银之镜 | 每场战斗开始时，对所有敌人施加 1 回合虚弱。 | 镜面裂成大块碎片的银色椭圆手镜 | [mirror.webp](public/assets/relics/mirror.webp) |
| 命运丝线 | 每打出一张技能牌，额外获得 2 点格挡。 | 珊瑚色丝线从线轴延伸，绕成守护盾的形状 | [thread.webp](public/assets/relics/thread.webp) |

## 完整生成提示词

以下保留提交给 imagegen 的原始提示词。尺寸和阴影细节属于生成要求；交付资源保留工具实际输出，部分物件仍带有少量高光与切面细节。

### 月之吊坠（pendant）

原始提示词：

```text
Use case: stylized-concept
Asset type: Chinese cute-anime deckbuilder 月蚀尖塔 inventory relic item illustration.
Style/medium: simple adorable 2D anime game inventory art, bold clean dark navy outlines, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette legible at 28–64 pixels.
Composition: square 1024x1024; one centered COMPLETE object filling about 78% of canvas with clear margins. Actual TRANSPARENT RGBA background, alpha zero outside the item.
Constraints: no matte rectangle, no floor or cast shadow, no haze, no glow cloud, no background scene, no checkerboard drawing, no letters or numbers, no captions, no border, no badge circle, no UI, no person or hand or face, no realistic materials, no gradients, no ornate filigree.
Subject: ONE chunky gold crescent pendant cradling exactly TWO turquoise moon pearls, with a short simple dark-teal necklace loop. Gold, turquoise, and ivory palette. The crescent and two pearls must read unmistakably at tiny size. No other objects.
```

必要修正 1：

```text
Use case: precise-object-edit
Edit target: the provided gold crescent pendant image.
Change only framing and the necklace loop completeness: recreate this same pendant as a centered COMPLETE inventory object within a square 1024x1024 canvas, with at least 11% completely transparent margin on all four sides. The dark-teal necklace must be a SHORT CLOSED LOOP entirely visible above the crescent, with no part touching any canvas edge. Reduce the total object size as needed to keep the entire loop and pendant inside the canvas.
Preserve the same chunky gold crescent design and exactly TWO turquoise moon pearls, bold dark navy outlines, cute 2D anime game art, gold/turquoise/ivory palette. Simplify only if needed for the short loop. Do not crop any part.
Output must have actual TRANSPARENT RGBA background with alpha zero outside the item, not black/white/matte/checkerboard. No letters or numbers, captions, border, badge circle, UI, people, hands, face, background scene, floor, cast shadow, haze, glow cloud, or extra objects.
```

必要修正 2：

```text
Remove the background of this image. Make a transparent background.
```

修正记录：初稿的吊绳顶部被裁切。第一次修正补全了闭合吊绳，但背景成为绘制的棋盘格，未采用该结果；第二次仅移除背景，获得真实透明通道和完整吊坠。最终吊绳顶部留白较小，主体未被裁切。

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-a/pendant-final.png`

游戏贴图：[pendant.webp](public/assets/relics/pendant.webp)

### 白鸦之羽（feather）

原始提示词：

```text
Use case: stylized-concept
Asset type: Chinese cute-anime deckbuilder 月蚀尖塔 inventory relic item illustration.
Style/medium: simple adorable 2D anime game inventory art, bold clean dark navy outlines, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette legible at 28–64 pixels.
Composition: square 1024x1024; one centered COMPLETE object filling about 78% of canvas with clear margins. Actual TRANSPARENT RGBA background, alpha zero outside the item.
Constraints: no matte rectangle, no floor or cast shadow, no haze, no glow cloud, no background scene, no checkerboard drawing, no letters or numbers, no captions, no border, no badge circle, no UI, no person or hand or face, no realistic materials, no gradients, no ornate filigree.
Subject: ONE large gently curved white raven feather with broad simple barbs, a strong navy silhouette outline, pale cyan shadow, and teal quill. Include only two tiny cyan wind strokes beside it. White, navy, pale cyan, and teal palette. No other objects.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-a/feather.png`

游戏贴图：[feather.webp](public/assets/relics/feather.webp)

### 赤心琥珀（ruby）

原始提示词：

```text
Use case: stylized-concept
Asset type: Chinese cute-anime deckbuilder 月蚀尖塔 inventory relic item illustration.
Style/medium: simple adorable 2D anime game inventory art, bold clean dark navy outlines, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette legible at 28–64 pixels. Keep shapes extremely simple, no detailed rendering.
Composition: square 1024x1024; one centered COMPLETE object filling about 78% of canvas with clear 11% margins on EVERY side. Keep every part of the object inside the canvas. Actual TRANSPARENT RGBA background, alpha zero outside the item.
Constraints: no matte rectangle, no floor or cast shadow, no haze, no glow cloud, no background scene, no checkerboard drawing, no letters or numbers, no captions, no border, no badge circle, no UI, no person or hand or face, no realistic materials, no gradients, no ornate filigree.
Subject: ONE chunky honey-orange hexagonal amber gemstone enclosing a clearly visible LARGE RED HEART. The heart fills the center, with a very strong unmistakable simple heart silhouette. Broad flat facet areas and exactly one cream highlight. Warm orange and red palette. No other objects.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-a/ruby.png`

游戏贴图：[ruby.webp](public/assets/relics/ruby.webp)

### 无声铃（bell）

原始提示词：

```text
Use case: stylized-concept
Asset type: Chinese cute-anime deckbuilder 月蚀尖塔 inventory relic item illustration.
Style/medium: simple adorable 2D anime game inventory art, bold clean dark navy outlines, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette legible at 28–64 pixels. Keep shapes extremely simple, no detailed rendering.
Composition: square 1024x1024; one centered COMPLETE object filling about 78% of canvas with clear 11% margins on EVERY side. Keep every part of the object inside the canvas. Actual TRANSPARENT RGBA background, alpha zero outside the item.
Constraints: no matte rectangle, no floor or cast shadow, no haze, no glow cloud, no background scene, no checkerboard drawing, no letters or numbers, no captions, no border, no badge circle, no UI, no person or hand or face, no realistic materials, no gradients, no ornate filigree.
Subject: ONE squat silver-and-pale-blue bell with a dark navy bow tied to the top. A clearly visible ivory CRESCENT-MOON clapper peeks below the rim. Keep the bell body broad and squat and the bow simple. Quiet, no sound waves. Navy, pale blue, silver, and ivory palette. No other objects.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-a/bell.png`

游戏贴图：[bell.webp](public/assets/relics/bell.webp)

### 断剑铭文（whetstone）

原始提示词：

```text
Use case: stylized-concept.
Asset type: inventory relic item illustration for a Chinese cute-anime deckbuilder, 月蚀尖塔.
Style/medium: simple adorable 2D anime game inventory item, bold clean navy contours, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette at 28–64px.
Composition: square 1024x1024, ONE complete centered object about 78% of the canvas, clean margins.
Background: actual TRANSPARENT RGBA with alpha-zero pixels outside the object. Preserve transparency in the output PNG.
Avoid: matte rectangle, floor, cast shadow, haze, glow cloud, scene, painted checkerboard, letters, numbers, captions, border, badge backplate, UI, people, hand, face, realistic materials, gradients, ornate filigree.
Subject: A SHORT BROKEN SWORD, chunky silver blade snapped diagonally at midblade, two simple teal geometric glowing marks (not writing) on the blade, solid bronze hilt and red wrapped grip. Strong diagonal silver/red silhouette. Absolutely no grinding stone. The relic grants +1 strength at battle start; convey this only through the object design, never text.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-b/whetstone.png`

游戏贴图：[whetstone.webp](public/assets/relics/whetstone.webp)

### 晨曦结晶（amber）

原始提示词：

```text
Use case: stylized-concept.
Asset type: inventory relic item illustration for a Chinese cute-anime deckbuilder, 月蚀尖塔.
Style/medium: simple adorable 2D anime game inventory item, bold clean navy contours, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette at 28–64px.
Composition: square 1024x1024, ONE complete centered object about 78% of the canvas, clean margins.
Background: actual TRANSPARENT RGBA with alpha-zero pixels outside the object. Preserve transparency in the output PNG.
Avoid: matte rectangle, floor, cast shadow, haze, glow cloud, scene, painted checkerboard, letters, numbers, captions, border, badge backplate, UI, people, hand, face, realistic materials, gradients, ornate filigree.
Subject: ONE golden dawn crystal shaped like a stout shield with a pointed bottom and three broad sunray tips at the top. Few large amber-yellow/orange facets, one ivory highlight. Recognizable protective sunshine crystal, not a heart gem. The relic grants 10 block on the first turn; convey this only through the protective crystal shape, never text.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-b/amber.png`

游戏贴图：[amber.webp](public/assets/relics/amber.webp)

### 不凋蔷薇（rose）

原始提示词：

```text
Use case: stylized-concept.
Asset type: inventory relic item illustration for a Chinese cute-anime deckbuilder, 月蚀尖塔.
Style/medium: simple adorable 2D anime game inventory item, bold clean navy contours, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette at 28–64px.
Composition: square 1024x1024, ONE complete centered object about 78% of the canvas, clean margins.
Background: actual TRANSPARENT RGBA with alpha-zero pixels outside the object. Preserve transparency in the output PNG.
Avoid: matte rectangle, floor, cast shadow, haze, glow cloud, scene, painted checkerboard, letters, numbers, captions, border, badge backplate, UI, people, hand, face, realistic materials, gradients, ornate filigree.
Subject: ONE plump coral-pink rose in bloom with a few broad petals and two emerald leaves on a very short curved stem; a tiny ivory heart at the flower center hints at healing. Simple pink/green silhouette, no vase or thorn complexity. The relic heals after victory; convey this only through the flower design, never text.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-b/rose.png`

游戏贴图：[rose.webp](public/assets/relics/rose.webp)

### 旅人的罗盘（compass）

原始提示词：

```text
Use case: stylized-concept.
Asset type: inventory relic item illustration for a Chinese cute-anime deckbuilder, 月蚀尖塔.
Style/medium: simple adorable 2D anime game inventory item, bold clean navy contours, broad flat colors, ONE crisp cel shadow, very few details, strong recognizable silhouette at 28–64px.
Composition: square 1024x1024, ONE complete centered object about 78% of the canvas, clean margins.
Background: actual TRANSPARENT RGBA with alpha-zero pixels outside the object. Preserve transparency in the output PNG.
Avoid: matte rectangle, floor, cast shadow, haze, glow cloud, scene, painted checkerboard, letters, numbers, captions, border, badge backplate, UI, people, hand, face, realistic materials, gradients, ornate filigree.
Subject: ONE round chunky brass traveler's compass, large ivory dial with a simple red/teal diamond needle, dark teal outer ring and a tiny gold coin attached to the bottom loop. No directional letters or numerical ticks. Bronze/teal/red strong shape. The relic increases battle coins; convey this only through the attached small coin, never text.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-art-b/compass.png`

游戏贴图：[compass.webp](public/assets/relics/compass.webp)

### 流光沙漏（hourglass）

原始提示词：

```text
Use case: stylized-concept.
Asset type: standalone inventory relic illustration for the Chinese cute-anime deckbuilder 月蚀尖塔.
Primary request: Generate one new independent raster illustration, square 1024x1024.
Style/medium: Simple adorable 2D anime game inventory object. Bold clean dark-navy outlines, broad flat colors, ONE crisp cel-shadow tone, very few details. A strong readable silhouette at 28–64px.
Composition/framing: One complete centered object fills about 78% of the square canvas, with clean transparent margins. No cropping.
Scene/backdrop: ACTUAL TRANSPARENT RGBA PNG, alpha-zero background everywhere outside the object; preserve transparency, including any open spaces within the object. No matte rectangle.
Text: Absolutely no letters, numbers, captions, title, or watermark.
Avoid: floor, cast shadow, haze, glow cloud, scene, checkerboard drawing, border, badge backplate, UI, people, hands, faces, realistic materials, gradients, ornate filigree.
Subject: ONE small hourglass with a bold dark-teal frame and clear pale-cyan glass. Bright GOLDEN LIGHT sand flows between the chambers in a simple LIGHTNING shape. Simple turquoise and gold silhouette. Its game meaning is extra 1 energy on the first turn, conveyed only by the lightning-shaped golden sand.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-hourglass.png`

游戏贴图：[hourglass.webp](public/assets/relics/hourglass.webp)

### 空月之冠（crown）

原始提示词：

```text
Use case: stylized-concept.
Asset type: standalone inventory relic illustration for the Chinese cute-anime deckbuilder 月蚀尖塔.
Primary request: Generate one new independent raster illustration, square 1024x1024.
Style/medium: Simple adorable 2D anime game inventory object. Bold clean dark-navy outlines, broad flat colors, ONE crisp cel-shadow tone, very few details. A strong readable silhouette at 28–64px.
Composition/framing: One complete centered object fills about 78% of the square canvas, with clean transparent margins. No cropping.
Scene/backdrop: ACTUAL TRANSPARENT RGBA PNG, alpha-zero background everywhere outside the object; preserve transparency, including any open spaces within the object. No matte rectangle.
Text: Absolutely no letters, numbers, captions, title, or watermark.
Avoid: floor, cast shadow, haze, glow cloud, scene, checkerboard drawing, border, badge backplate, UI, people, hands, faces, realistic materials, gradients, ornate filigree.
Subject: ONE ivory-silver three-point crown with crescent-shaped outer horns, a visibly hollow crescent-shaped open space at center, and one violet diamond gem at the base. Strong royal ivory/violet silhouette, a few gold accents, no fine jewelry. Its game meaning is extra 1 energy each turn with 1 less draw, conveyed only by the hollow moon crown.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-crown.png`

游戏贴图：[crown.webp](public/assets/relics/crown.webp)

### 碎银之镜（mirror）

原始提示词：

```text
Use case: stylized-concept.
Asset type: standalone inventory relic illustration for the Chinese cute-anime deckbuilder 月蚀尖塔.
Primary request: Generate one new independent raster illustration, square 1024x1024.
Style/medium: Simple adorable 2D anime game inventory object. Bold clean dark-navy outlines, broad flat colors, ONE crisp cel-shadow tone, very few details. A strong readable silhouette at 28–64px.
Composition/framing: One complete centered object fills about 78% of the square canvas, with clean transparent margins. No cropping.
Scene/backdrop: ACTUAL TRANSPARENT RGBA PNG, alpha-zero background everywhere outside the object; preserve transparency, including any open spaces within the object. No matte rectangle.
Text: Absolutely no letters, numbers, captions, title, or watermark.
Avoid: floor, cast shadow, haze, glow cloud, scene, checkerboard drawing, border, badge backplate, UI, people, hands, faces, realistic materials, gradients, ornate filigree.
Subject: ONE broken SILVER oval handmirror with a short dark-navy handle. Flat plum-blue glass is divided by exactly TWO thick fracture lines into three large pieces. One small separated silver shard rests near the edge as part of the same object illustration. Silver, indigo, and violet palette. No reflected scene or face, no ornate frame. Its game meaning is all foes start with 1 weakness, conveyed only by the broken mirror.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-mirror.png`

游戏贴图：[mirror.webp](public/assets/relics/mirror.webp)

### 命运丝线（thread）

原始提示词：

```text
Use case: stylized-concept.
Asset type: standalone inventory relic illustration for the Chinese cute-anime deckbuilder 月蚀尖塔.
Primary request: Generate one new independent raster illustration, square 1024x1024.
Style/medium: Simple adorable 2D anime game inventory object. Bold clean dark-navy outlines, broad flat colors, ONE crisp cel-shadow tone, very few details. A strong readable silhouette at 28–64px.
Composition/framing: One complete centered object fills about 78% of the square canvas, with clean transparent margins. No cropping.
Scene/backdrop: ACTUAL TRANSPARENT RGBA PNG, alpha-zero background everywhere outside the object; preserve transparency, including any open spaces within the object. No matte rectangle.
Text: Absolutely no letters, numbers, captions, title, or watermark.
Avoid: floor, cast shadow, haze, glow cloud, scene, checkerboard drawing, border, badge backplate, UI, people, hands, faces, realistic materials, gradients, ornate filigree.
Subject: ONE ivory thread spool wound with vivid CORAL-PINK thread. A thick loose thread loop sweeps from the spool into a simple SHIELD-SHAPED loop on the right and ends in a small teal star-knot. Simple strong coral, ivory, and teal object. The shield shape is made of the loose thread itself, with a transparent interior, never a background shield badge. Its game meaning is gaining 2 block for each skill card, conveyed only by the thread shield loop.
```

最终 PNG 原图：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/relic-thread.png`

游戏贴图：[thread.webp](public/assets/relics/thread.webp)
