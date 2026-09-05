# 月蚀尖塔 · 独立卡图设计与提示词

全部 26 幅插画均使用内置 imagegen 独立生成，以 public/assets/characters/hero-cute-v2.webp 作为唯一画风与角色身份参考。
每张均为全新场景，保留莉雅的银发、侧辫、青色蝴蝶结、青眼、圆脸、象牙白与青色服装；用不同动作、道具和构图表达牌名或机制。

输出为 1536 × 1024 不透明横幅，每个卡牌 ID 对应一张专属图片；基础和升级版共享该图。
全部图片已逐张查看并检查文件格式，经过 scripts/encode-card-art.cjs 无损 WebP 编码，未裁切、缩放或合成。
卡框、费用、名称、效果和角标均由界面绘制，不烘焙进插画。

## 卡图目录

| 卡牌 | 基础效果 | 画面设计 | 文件 |
| --- | --- | --- | --- |
| 弦月斩 | 造成 6 点伤害。获得 1 层月辉。 | 莉雅挥动月刃，划出一道青色弦月斩击 | [strike.webp](public/assets/cards/strike.webp) |
| 月纱 | 获得 5 点格挡。 | 莉雅展开月光薄纱，挡住飞来的碎石 | [guard.webp](public/assets/cards/guard.webp) |
| 月华一闪 | 造成 8 点伤害。消耗所有月辉，每层额外造成 3 点伤害。 | 月辉汇入月刃，莉雅拔刀斩出耀眼的一闪 | [mooncut.webp](public/assets/cards/mooncut.webp) |
| 燕返 | 造成 3 点伤害。抽 1 张牌。 | 莉雅像燕子般腾空折返，沿弯曲风迹挥剑 | [quick.webp](public/assets/cards/quick.webp) |
| 双月 | 造成 5 点伤害两次。 | 莉雅旋身挥剑，两道月牙剑光连续划过夜空 | [crescent.webp](public/assets/cards/crescent.webp) |
| 雾隐步 | 获得 7 点格挡。抽 1 张牌。 | 莉雅轻巧侧身闪入雾气，留下飘动的披风与足迹 | [mist.webp](public/assets/cards/mist.webp) |
| 凝月 | 获得 3 层月辉。 | 莉雅双手聚拢弯月光点，将它们凝成一颗月珠 | [focus.webp](public/assets/cards/focus.webp) |
| 银刃风暴 | 对所有敌人造成 8 点伤害。 | 莉雅唤起卷满银色剑刃的旋风，横扫前方 | [storm.webp](public/assets/cards/storm.webp) |
| 破誓之刃 | 造成 9 点伤害。施加 2 回合易伤。 | 莉雅的月刃劈开红色盾徽，使敌方防御破裂 | [fracture.webp](public/assets/cards/fracture.webp) |
| 月下守望 | 获得 10 点格挡与 1 层月辉。 | 莉雅持剑守望月下石桥，弯月护环在身旁升起 | [ward.webp](public/assets/cards/ward.webp) |
| 月之呼吸 | 每回合开始时，获得 1 层月辉。 | 莉雅闭目调息，弯月随着呼吸轻轻环绕 | [trance.webp](public/assets/cards/trance.webp) |
| 剑心 | 获得 2 点力量。本场战斗持续生效。 | 莉雅双手持剑于心前，剑中的心形光辉唤醒力量 | [blade.webp](public/assets/cards/blade.webp) |
| 坠星 | 造成 18 点伤害。 | 莉雅引落一颗巨大的金色流星，星光撞向地面 | [meteor.webp](public/assets/cards/meteor.webp) |
| 绯色契约 | 造成 8 点伤害。恢复 3 点生命。消耗。 | 绯红契约将暗色水晶中的能量化为爱心，流入莉雅掌中 | [drain.webp](public/assets/cards/drain.webp) |
| 毒蔷薇 | 施加 5 层中毒。每次敌人行动前受到中毒伤害。 | 莉雅召出紫色蔷薇与绿色荆棘，毒泡在花旁升起 | [thorn.webp](public/assets/cards/thorn.webp) |
| 缄默之印 | 获得 4 点格挡。施加 2 回合虚弱。 | 莉雅轻声示意安静，以封印丝带缠住一只铃铛 | [bind.webp](public/assets/cards/bind.webp) |
| 星之启示 | 抽 2 张牌。消耗。 | 莉雅翻开星之书，明亮的星座从书页中浮现 | [insight.webp](public/assets/cards/insight.webp) |
| 终夜轮舞 | 对所有敌人造成 5 点伤害。消耗所有月辉，每层额外造成 3 点伤害。 | 莉雅在午夜月下起舞，一圈弯月剑光横扫四周 | [nightfall.webp](public/assets/cards/nightfall.webp) |
| 永生花 | 恢复 8 点生命。消耗。 | 莉雅捧起充满生命光辉的白花，翠绿新叶悄然舒展 | [bloom.webp](public/assets/cards/bloom.webp) |
| 镜中月 | 月辉层数翻倍。消耗。 | 莉雅举起银镜，镜中与镜外映出成对的月亮 | [echo.webp](public/assets/cards/echo.webp) |
| 月蚀降临 | 每打出一张攻击牌，获得 1 层月辉和 2 点格挡。 | 金色光环勾勒的黑月在莉雅身后升起，月刃与护盾环绕身侧 | [eclipse.webp](public/assets/cards/eclipse.webp) |
| 不破圣域 | 获得 18 点格挡。 | 莉雅撑起巨大的月光晶体护罩，将红色碎片弹开 | [barrier.webp](public/assets/cards/barrier.webp) |
| 追光 | 造成 12 点伤害。获得 1 点能量与 2 层月辉。 | 莉雅沿金色光路奔向星星，月刃拖出青色轨迹 | [comet.webp](public/assets/cards/comet.webp) |
| 静水流深 | 每层月辉获得 3 点格挡。月辉不消耗。 | 莉雅静立于映月的水面，平静涟漪化成守护水环 | [resolve.webp](public/assets/cards/resolve.webp) |
| 天穹碎光 | 造成 36 点伤害。消耗。 | 莉雅举剑击碎天穹中的巨星，璀璨晶片向四方展开 | [nova.webp](public/assets/cards/nova.webp) |
| 旧日梦魇 | 无法打出。回合结束时若在手中，失去 2 点生命。 | 莉雅抱着月牙枕入睡，破月阴影与梦魇飞蛾盘旋在梦中 | [curse.webp](public/assets/cards/curse.webp) |

## 完整生成提示词

下列每次调用均附带上述莉雅立绘作为图片参考。每张仅生成一次，无修正重绘。

### 弦月斩 · strike

文件：public/assets/cards/strike.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia lunges into a confident horizontal katana swing, seen in dynamic three-quarter waist-up action. ONE strong thick turquoise crescent slash sweeps horizontally across the foreground; a single small glowing moon bead sits at the blade tip. Her determined happy face is clearly visible above the arc. Cape and braid sweep opposite the slash. Scene/backdrop: very simple midnight-blue training courtyard with broad teal ground and two low distant stone shapes. The single crescent slash is the unmistakable focal effect.
```

### 月纱 · guard

文件：public/assets/cards/guard.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia braces gently in a three-quarter crouched pose and draws a wide translucent pale-teal magical gauze ribbon between her hands, opening it into a large curved protective veil. The gauze dominates the composition like one broad soft crescent curtain in front of her and visibly deflects exactly two tiny gray stone projectiles at its outer edge. Her sweet calm face remains visible through a clear open area. Sword stays sheathed at her side. Scene/backdrop: broad pale mint and desaturated teal courtyard shapes, minimal lavender shadows. Gauze is a simple luminous translucent flat shape over an otherwise fully opaque colored scene.
```

### 月华一闪 · mooncut

文件：public/assets/cards/mooncut.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: close dynamic view of Lia performing an iaijutsu katana draw from her sheath at the hip. Her cute determined round face is large and clear in the upper central area. ONE brilliant STRAIGHT cyan diagonal flash cuts across the scene from lower left to upper right, visibly straight rather than a curved sword arc. Exactly four small crescent moon beads converge in a short line toward the blade. Her body turns sharply with the draw; cape folds are broad simple shapes. Scene/backdrop: very simple deep indigo and teal night courtyard, with quiet dark outer corners. Emphasize instantaneous focused burst, without clutter or bloom.
```

### 燕返 · quick

文件：public/assets/cards/quick.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia makes an agile reverse aerial leap, torso twisting to look back over her shoulder while she slashes behind her with the cyan katana. Her bent legs and flowing cape make the airborne turn clearly readable. One small stylized dark-teal swallow bird flies beside her. ONE clear wide looping pale-cyan wind trail forms a graceful loop guiding the backward motion around her without obscuring her face. Scene/backdrop: airy sky-blue sky with two broad flat white clouds and a low distant rooftop silhouette. Bright playful action, no extra sword crescents.
```

### 双月 · crescent

文件：public/assets/cards/crescent.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia spins in a compact dynamic three-quarter pose, her ivory-and-teal cape fanning outward. Show exactly TWO large distinct PARALLEL crescent sword arcs sweeping across the scene, cleanly separated and similar in direction, producing a readable double-slash rhythm. Exactly two small pale moon discs sit beside the paired arcs. Her cyan katana and brave round face remain recognizable in the central action. Scene/backdrop: minimal broad navy-blue sky and dark courtyard ground. Palette: navy, white, cyan with small teal and gold costume accents. No extra magical streaks.
```

### 雾隐步 · mist

文件：public/assets/cards/mist.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia makes a nimble side step with body tilted sideways and a playful alert face turned toward one small stone projectile that has just missed her. Half of her trailing cape disappears behind three simple layered pale mist ribbons. Exactly three small curved footprint marks on the ground show her evasive curved path. Keep her head, main hand and leading foot readable, with katana sheathed. Scene/backdrop: simple mint and lavender courtyard with broad pale floor shapes; mist consists of large soft-edged flat graphic ribbons rather than realistic fog. Airy evasive movement is dominant.
```

### 凝月 · focus

文件：public/assets/cards/focus.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: quiet front three-quarter WAIST-UP portrait of Lia with a sweet concentrated face, eyes focused on her cupped hands in the center of the image. Exactly three little crescent moon motes curve inward and gather into ONE bright moon pearl held between her palms. A large simple circular pale moon behind her head supports the composition. No sword drawn. Scene/backdrop: broad deep teal and indigo night-sky shapes, quiet corners, no stars or particle clutter. Intimate calm moon magic, clear round face and hands, simple flat luminous shapes without airbrush glow.
```

### 银刃风暴 · storm

文件：public/assets/cards/storm.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia plants her feet and commands a wide vortex of exactly six large silver-blue spectral sword blades with an outstretched hand and her own cyan katana held low. The blade cyclone occupies most of the image and is the dominant focal action, arranged around ONE sweeping broad pale-cyan wind band. Each spectral sword is a simple readable blade silhouette. Her brave round face stays visible within the calm center of the vortex. Scene/backdrop: minimal navy and blue courtyard, with two tiny abstract shadow target shapes near the lower edge to suggest an attack sweeping across multiple enemies. No gore or extra blades or particle clutter.
```

### 破誓之刃 · fracture

文件：public/assets/cards/fracture.webp

```text
Use case: stylized-concept.
Asset type: one game-card ILLUSTRATION only, a newly composed full-bleed OPAQUE landscape scene, 1536x1024 pixels, aspect ratio 3:2.
Input image: the supplied heroine image is the SOLE character-identity and drawing-style REFERENCE, not an edit target. Invent a fresh scene and action pose. Do not copy the standing fullbody reference composition.
Subject identity: Lia, a cute nonsexual fantasy ADULT woman drawn in friendly brave 3.5–4-head anime proportions; silver-white half-up hair with a thick side braid, teal hair ribbon, large teal eyes, rosy round face, ivory-and-teal cape dress with simple gold accents, dark opaque tights, boots, cyan katana. Keep her recognizable as the reference heroine.
Style: match the reference's bold dark outlines, large simple shapes and flat saturated color areas, using only one simple cel-shadow. Simplify costume detail for thumbnail readability.
Composition: one dominant action readable at 150x100; face, main prop and major effect within the central 80 percent; quiet outer corners; deliberate simple colored background all the way to every edge.
Constraints: no transparency, frame, border, UI, lettering, writing, numbers, watermark or card title; no blood; no painterly texture, cinematic lighting, ornate microdetails, photorealism, airbrush bloom, particle clutter, busy background or copied fullbody pose.
Primary request: Lia strikes decisively with her cyan katana across a large crimson shield-shaped magical crest in the foreground. The crimson shield is clearly cracked down its center and exactly TWO big fragments peel apart, revealing her determined cute round face behind the sword. The katana remains whole and is the cause of the break. Use a simple jagged break line and two bold tiny impact wedges, no showers of fragments. Scene/backdrop: broad dark teal and muted coral planes suggesting a simple fantasy courtyard. Strong coral-versus-teal contrast makes the broken-defense motif instantly readable.
```

### 月下守望 · ward

文件：public/assets/cards/ward.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Lia stands watch on a quiet arched stone bridge over still moonlit water. Three-quarter medium-full view, her cyan katana held upright by her side, face clearly readable with a composed vigilant expression looking out across the bridge. A broad simple crescent-shaped protective halo arches around and shelters her. Keep the bridge parapets visibly sweeping across the lower foreground, an unmistakable crescent moon over calm water in background. One central watchful heroine silhouette, navy/teal palette with ivory moon. This is observation and shelter on a bridge, not a generic front-facing shield pose.
```

### 月之呼吸 · trance

文件：public/assets/cards/trance.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Medium waist-up view of Lia peacefully meditating, eyes closed, both hands held gently at her chest, shoulders relaxed. A single broad gently curling pale-teal breath ribbon flows from her lips and circles rhythmically around her upper body, carrying three simple small crescent-moon shapes. Keep the face and hands large and serene. Resting cyan katana can be only a simple hilt at her side. Calm lavender/teal backdrop of softly shaped moonlit clouds, drawn as flat graphic masses. One central meditative silhouette, tranquil breathing rhythm.
```

### 剑心 · blade

文件：public/assets/cards/blade.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Close waist-up frontal view of Lia holding the cyan katana vertically before her heart with both hands clasped firmly on its hilt. A small luminous heart-shaped teal crystal is aligned within the blade at chest level, a crisp simple iconic heart shape. Her large teal eyes are focused and determined, her cute rosy face visible alongside the blade. Warm gold circle behind her and calm teal background masses suggest lasting inner strength. Bold quiet symmetrical empowerment composition, no attack, no slash, no extra weapons.
```

### 坠星 · meteor

文件：public/assets/cards/meteor.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Wide action view with a strong diagonal composition. Lia appears upper-left of center, her cute determined face large enough to read, leaning forward and pointing decisively down with one outstretched hand. One ENORMOUS unmistakable golden FIVE-POINTED star plunges diagonally from the upper sky toward the lower-right center, dominating the composition, with a single broad gold trailing wedge. The star strikes a simple stone platform in one bold cream cloud-shaped impact and a few large stone shapes. Keep the heroine's figure and the entire star within the central 80%. Rich navy/gold sky and simple dark cloud masses. No meteor rock, no second star, no particles or tiny debris.
```

### 绯色契约 · drain

文件：public/assets/cards/drain.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Waist-up three-quarter close scene of Lia, clear curious concentrated rosy face. One hand touches a simple red circular magical seal at center-left, drawn only from clean concentric circles and a few plain geometry marks with NO letters or runes. A cracked dark purple crystal floats at left; from it a single broad heart-shaped crimson ribbon flows across the seal into Lia's open other palm near center-right and reforms into one small bright coral-red heart above her palm. The ribbon's large looping heart shape and little recovered heart tell a harmless fantasy energy-transfer story. Calm cream backdrop with deep crimson circular color mass and teal costume. No blood, wounds, injury, veins, sinister horror, or texture. Large simple props and face.
```

### 毒蔷薇 · thorn

文件：public/assets/cards/thorn.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Close three-quarter view, Lia on the right half of center, slightly leaning toward a summoned flower with a curious mischievous cute expression and bright teal eyes. She presents one open hand beneath an unmistakable LARGE violet ROSE at left-center foreground. The rose has broad simplified layered petals, with two thick curling emerald-green thorn vines wrapping beneath it; clearly visible chunky triangular thorns, just three round purple poison bubbles floating nearby. Rose and vines dominate the foreground; heroine face remains large and readable. Quiet emerald and deep violet garden background as flat leaf silhouettes, no small foliage detail, no multiple flowers, no particles. Cyan sword only a simple sheathed hilt if visible.
```

### 缄默之印 · bind

文件：public/assets/cards/bind.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Medium close-up three-quarter view of Lia on the left half of center, looking outward with a cute composed secretive expression, one index finger held vertically to her lips in a clear shushing gesture. Her other open palm casts a large simple cyan circular seal at right-center. Inside the seal floats one unmistakable gold bell, its body and clapper tightly wrapped with two broad teal binding ribbons so it cannot ring. The bell is large and dominant, tied ribbon ends gently curl. Seal uses only two plain concentric circles and four simple diamond shapes, absolutely no writing/runes/letters. Indigo/teal palette and calm dark indigo background masses. Readable face, open palm, seal, and bound bell all in central 80%; no sound lines, no particles.
```

### 星之启示 · insight

文件：public/assets/cards/insight.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Waist-up slightly high camera angle on Lia leaning over an open large ivory storybook centered in the lower foreground, held in both hands. Her face above the book has delighted revelation: wide teal eyes, rosy cheeks, small joyful open smile. From the blank pages rise EXACTLY THREE bold gold star constellations, each made from only three or four large gold five-pointed star nodes connected by thick simple gold lines. Arrange the three recognizable constellation groups in a spacious upward fan around her face without covering it. Rich midnight navy and gold palette, simple broad night-sky and cloud backdrop. The book pages are completely blank with no text, letters, symbols, or card UI. Cel-shaded graphic magical shapes, no tiny stars or particles.
```

### 终夜轮舞 · nightfall

文件：public/assets/cards/nightfall.webp

```text
Use case: stylized-concept. Asset: independent illustration for a fantasy deckbuilder, artwork only.
INPUT IMAGE ROLE: the supplied heroine image is an identity and drawing-style REFERENCE ONLY, never an edit target. Create a NEW scene composition and pose.
Heroine Lia: same cute anime adult woman as the reference, silver-white half-up hair with a thick side braid, teal ribbon with gold flower clasp, very large teal eyes and rosy round face; 3.5–4-head stylized proportions, modest ivory and teal cape dress with simple gold trim, dark tights and boots, cyan katana.
EXACT reference drawing language: bold clean dark outlines, broad flat color shapes, just one crisp hard-edged cel shadow, simple magical shapes, calm background masses. No painterly detail, photographic lighting, tiny filigree, texture, bloom, or particles.
Format: full-bleed OPAQUE landscape illustration, 1536x1024, approximately 3:2. Simple solid-colored scenery covers the whole canvas; no transparency. Readable at 150x100: one dominant central action or prop, large readable face, important subjects inside central 80%. NO frame, card border, UI, text, letters, numbers, written runes, or watermark. Nonsexual fantasy scene, no gore.
NEW SCENE: Wide full-body dynamic action scene of Lia performing a graceful spinning sword dance beneath one HUGE midnight violet moon. Cute 3.5–4-head proportions, large clearly visible teal eyes and joyous determined rosy face. She balances mid-turn with one knee bent and modest cape dress sweeping broadly sideways; dark tights fully cover legs. Her cyan katana extends along the turn, and a broad tilted circular ring of SIX large clean cyan crescent blades encircles her at waist height, distinct repeated crescent shapes along one sweeping orbit. Keep the full heroine, sword and main crescent ring inside central 80% with room around her boots and head. Huge moon behind upper body, simple dark navy stone terrace and violet cloud masses. Epic navy/violet palette with ivory and cyan contrast. Use bold flat silhouette and one hard cel shadow; no speed-line clutter, tiny particles or secondary characters.
```

### 永生花 · bloom

文件：public/assets/cards/bloom.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: A warm restorative close-up of Lia smiling tenderly while nurturing ONE radiant ivory blossom in her cupped hands near her chest. The blossom is large and readable, with fresh emerald leaves; only two gentle heart-shaped petals drift beside it. Tilted three-quarter face composition, flower and hands central, her hair braid and cape framing the scene. A simple mint garden backdrop in large flat leafy shapes fills every edge. Mint, cream, emerald and warm gold palette. Healthy comforting feeling; use crisp graphic golden rays around the flower instead of soft glow.
```

### 镜中月 · echo

文件：public/assets/cards/echo.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: Lia holds a LARGE ROUND SILVER HAND-MIRROR toward the viewer, with an amused astonished expression and raised eyebrows. The mirror clearly contains ONE ivory crescent moon reflected on dark indigo glass, and a MATCHING SECOND ivory crescent moon floats just outside the mirror beside it. The obvious two-moon pairing is the dominant motif. Medium close-up from a slightly high camera, Lia to one side and round mirror plus paired moon at center, spare angular night garden shapes filling canvas. Silver, teal and indigo palette. Exactly two large moons, few decorative details, playful discovery.
```

### 月蚀降临 · eclipse

文件：public/assets/cards/eclipse.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: Lia in a confident empowered wide-legged stance beneath a HUGE BLACK ECLIPSE DISC, with a crisp gold rim and a few bold violet corona wedges. Cute determined face, low camera, cape spreads in a strong triangular silhouette. ONE cyan crescent blade shape and ONE small shield-like ivory moon shard orbit at her sides, visually expressing attack plus protection. The eclipse centered above her head occupies the upper scene; purple sky and simple indigo ground fill the canvas. Epic flat graphic silhouettes in purple, gold, indigo and cyan. No intricate magic circles and no particle cloud.
```

### 不破圣域 · barrier

文件：public/assets/cards/barrier.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: A LARGE faceted pale-cyan crystalline moon dome dominates the entire scene. Lia braces at its center, feet apart, forearms raised protectively and cute determined face visible, while TWO RED METEOR SHARDS bounce away from opposite outer sides with short red zigzag motion trails. The dome is almost circular, built from only a few large crisp hexagonal and triangular crystal facets, with a strong bright outline and dark navy environment visible through its flat pale cyan inner panels. Moderate wide front camera, entire heroine small enough to fit inside the complete protective dome. Simple navy rocky ground and sky, pale cyan/silver shield against navy. The main readable silhouette is an intact protective bubble, no cracks, no intricate patterned shield, no extra projectiles.
```

### 追光 · comet

文件：public/assets/cards/comet.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: Lia dashes rapidly from left toward right along a SWEEPING GOLDEN LIGHT PATH in a cyan-blue sky, her torso leaning forward and one arm reaching toward ONE LARGE BRIGHT GOLD STAR ahead. Her other hand holds her cyan katana trailing behind, drawing a single clean teal crescent streak; the dress cape, ribbon and silver braid sweep backward. Dynamic three-quarter side camera, compact full-body foreshortened leaping pose, eager determined smiling face. The golden path curves boldly from the lower left behind her toward the star in the upper right. Big simple cream cloud shapes and sky fill all edges. Gold and cyan palette; crisp flat geometric light marks, no diffuse glow, no particle cloud.
```

### 静水流深 · resolve

文件：public/assets/cards/resolve.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: Lia calmly meditates standing just above PERFECTLY STILL REFLECTIVE WATER, eyes peacefully closed and hands held together near chest. ONE LARGE IVORY MOON hangs above and is clearly reflected in the pond below her, making a strong circular reflection. Broad concentric protective water rings collect around her feet, drawn as smooth crisp teal/silver ellipse lines; the water between the rings is calm and mirror-like, reflecting her compact figure. Elegant centered full-body composition viewed from slightly above water level. Large flat navy shore silhouettes, teal water and silver moon fill entire landscape. Quiet navy/teal/silver palette, clean graphic reflection, no fog, mist, haze, foam or particles.
```

### 天穹碎光 · nova

文件：public/assets/cards/nova.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: Lia raises her CYAN KATANA OVERHEAD with both hands to split a GIGANTIC CRYSTAL STAR in the sky, and its BIG BRIGHT GEOMETRIC FRAGMENTS cascade outward in a forceful starburst. Show a three-quarter view from a low camera, her cute determined face turned toward the viewer enough to remain recognizable, feet braced on a small flat indigo cloud-like ledge, cape sweeping downward. The enormous broken gold-and-blue four-point crystal star and sword contact fill upper center; 6 to 8 large blue, gold and violet facets fly outward. Emphasize one bold centered impact silhouette above the heroine, no glitter particles, no many tiny fragments, no lightning scribbles. Simple deep violet sky with broad blue cloud silhouettes fills the entire canvas. Golden/blue/violet palette, crisp cel shading.
```

### 旧日梦魇 · curse

文件：public/assets/cards/curse.webp

```text
Use case: illustration-story. Create ONE ORIGINAL landscape card illustration for the Chinese anime deckbuilder 月蚀尖塔. Output landscape 1536x1024, 3:2, full-bleed OPAQUE scene.
Image 1 is the SOLE STYLE AND CHARACTER IDENTITY REFERENCE, NOT an edit target. Compose an entirely NEW scene with a different pose and camera; do not reuse the standing portrait.
Heroine Lia: cute anime adult woman with compact 3.5–4-head proportions, silver-white half-up hair with a side braid and teal ribbon, round rosy face, large teal eyes, modest ivory/teal cape dress with simple gold edging, opaque dark tights and boots, cyan katana where relevant. Match reference's bold clean dark contours, broad flat color regions and ONE crisp cel-shadow. Keep the art especially simple and legible when displayed at 150x100 pixels; one strong action or prop, face and main effect inside central 80%.
No text, letters, numbers, logos, watermark, card border, frame, UI, transparency. No painted texture, detailed filigree, photorealism, cinematic lighting, airbrush haze, dense particles. No sexualization, gore or injury. Simple colored environment must fill the entire canvas.
Scene: A cute, gently eerie dream scene of Lia ASLEEP HUGGING ONE LARGE IVORY CRESCENT PILLOW under a muted-plum blanket, her closed eyes and worried little brow visible, silver braid and teal ribbon draped onto the pillow. Three-quarter overhead cozy bed camera, her head and crescent pillow fill center. Her modest ivory/teal costume is partly visible above the opaque blanket. A LOOMING DARK BROKEN-MOON SHADOW curls across the indigo dream background above her; 3 or 4 simple dark nightmare moth silhouettes curl around the blanket edges. Background is a full-bleed simple dark room/dream-space of indigo and muted plum blocks, no transparent cutout. Mildly unsettling but adorable, no graphic horror, wounds, injury, fear faces in the darkness, threatening weapons, text or UI. Large clear shapes, no elaborate bedding patterns, no haze.
```
