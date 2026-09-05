# 可爱动漫角色立绘 · 最终提示词

工具：内置 imagegen。全部角色逐张绘制，并保留真实透明通道；最终图片无损编码为 WebP，未改变构图或颜色。
每个小节列出对应图片、原始绘制提示词，以及实际采用的后续编辑提示词。未采用的候选图不包含在项目中。

## 月咏·莉雅 · hero-cute

[hero-cute-v2.webp](public/assets/characters/hero-cute-v2.webp)

### 绘制提示词

Use case: style-transfer
Asset type: 2D anime deckbuilder heroine transparent sprite.
Input image: provided hero.png is the edit target.
Primary request: redesign the existing heroine much cuter. Preserve her identity's silver-white hair, teal eyes, teal ribbon and cyan katana. Change her face to cute cheerful rounded anime face and a gentle determined smile; redesign hair as side braid with half-up silver-white hair; simple ivory-and-teal sailor-inspired fantasy tunic dress, short cape, modest opaque tights and flat boots, little moon pin. No dramatic high heels or high slits. Character body, face, gaze, and combat pose are facing RIGHT in a readable three-quarter view.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 后续编辑 1

Remove the background from this heroine illustration. Make a transparent background. Keep the heroine exactly unchanged, including all hair, katana and boots.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer. Asset type: transparent full-body fantasy card-game heroine sprite, portrait 1024x1536.
Input images: Image 1 is the silver-haired heroine EDIT TARGET and identity reference. Images 2 (cute purple witch) and 3 (cute red-hood axe fighter) are STYLE REFERENCES ONLY. Closely match their cute cartoon proportions, face shape and bold clean drawing. Never copy the references' hats, clothes or weapons.
Primary request: Decisively REDRAW the heroine in the same cute stylized anime game style as images 2 and 3: oversized rounded head, tiny nose and mouth, big bright teal eyes, rosy cheeks, short torso and short legs, approximately 3.5 to 4 heads tall. Use thick clean dark outlines, broad flat color shapes, ONE hard-edged cel shadow per surface, chunky simplified hair locks. Her expression is friendly, lively and bravely cheerful.
Preserve her heroine identity: silver-white hair half up with a side braid and teal ribbon; ivory and teal cape and modest opaque tunic dress, opaque dark tights, boots; cyan katana. Simplify costume into clear broad shapes and minimal gold accents. She is a nonsexual adult fantasy woman represented in cute cartoon proportions.
Composition: Face AND body facing RIGHT, with her gaze toward screen-right. Confident playful battle-ready stance. Whole body, hair, both boots and entire cyan katana inside the frame; generous empty transparent margin of about 5 percent on all sides. Sprite sits centered, sword held pointing diagonally down toward the right without cropping.
Scene/backdrop: genuinely transparent PNG background with real alpha, including transparent space between her limbs, cape and sword. No floor, no ground shadow, no aura or glow, no checkerboard or painted background.
Avoid: tall long-legged realistic proportions, realistic anatomy rendering, slender elongated face, tiny intricate strands, embroidery, elaborate gold decoration, smooth gradients, soft painterly lighting, blur, text, logo, watermark. Match the reference images' cute bold cartoon rendering while retaining only the heroine's own design.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 荆棘守卫 · sentinel

[sentinel-v2.webp](public/assets/characters/sentinel-v2.webp)

### 绘制提示词

Use case: stylized-concept
Asset type: enemy sprite for Chinese anime deckbuilder.
Primary request: brand new character 荆棘守卫, a cute botanical guardian woman with chestnut braided twin buns, warm amber eyes, sage-green hooded tunic and cape, chunky leaf-shaped shield and short thorn sword. Shy protective stance and simple plant motifs. Character body, face, gaze, and combat stance facing LEFT in three-quarter view. Unique soft green plant guardian silhouette.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer.
Asset type: full-body enemy sprite for a cute anime fantasy game.
Input images: Image 1 is the EDIT TARGET (sentinel); Image 2 (witch) and Image 3 (elite) are STYLE REFERENCES ONLY. Redraw Image 1 decisively to match Image 2 and Image 3 as though made by the same cartoon artist for the same set.
Primary request: strong STYLE AND PROPORTION REDRAW, not a light cleanup. The target must become clearly much cuter: oversized rounded head, large bright simple eyes with white glints, tiny nose and mouth, round cheeks with visible rosy blush, short torso and short legs, approx 3.5–4 heads tall, compact cute anime game proportions. A nonsexual adult fantasy woman with a modest opaque costume.
Character identity and pose: Sentinel: retain chestnut twin hair buns with short braids, amber eyes, green hood and cape, cream tunic and brown boots, leaf shield in her forward protective arm on image-right, thorn short sword extended toward image-left. Preserve the spread-legged protective stance turned toward image-left, shy protective expression. Use a modest opaque tunic to above the knee, simple sturdy boots and leggings; simplify leaves and remove ornamental embroidery.
Style/medium: bold clean dark outlines, broad flat color regions, ONE hard-edged cel shadow per region, simple clumped hair, no individual strands, no painterly or soft rendering. Match the rounded expressive facial construction and compact silhouette of the style references. Preserve target's identity, palette, hairstyle category, iconic gear, left-facing pose and personality. Do not copy witch costume, hat, broom or mirror, and do not copy elite axe or red hood.
Composition: one separate character, complete full body including all feet and all props, portrait 1024x1536 PNG, clean empty safety margin about 5% on all sides. Nothing cut off.
Background: genuinely transparent PNG alpha background, empty alpha-zero space around silhouette and between limbs, like reference assets. No painted checkerboard, no opaque background, no scene, floor, ground shadow, glow, halo, haze, gradient, text or watermark.
Avoid: realistic long legs, small head, mature glamorous anatomy, cleavage, soft airbrush shading, detailed embroidery, ornate metalwork, tiny decorative filigree.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 失声歌姬 · wraith

[wraith-v2.webp](public/assets/characters/wraith-v2.webp)

### 绘制提示词

Use case: stylized-concept
Asset type: enemy sprite for Chinese anime deckbuilder.
Primary request: brand new character 失声歌姬, a cute singer woman with pale-aqua wavy bob, blue eyes, periwinkle-and-white puffy stage dress, bell-topped microphone staff, translucent-looking ribbon (body and clothes stay opaque), wistful cute singing pose. Character body, face, gaze, and pose facing LEFT in three-quarter view. Unique puffy singer silhouette; no swords or armor.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer.
Asset type: full-body enemy sprite for a cute anime fantasy game.
Input images: Image 1 is the EDIT TARGET (wraith); Image 2 (witch) and Image 3 (elite) are STYLE REFERENCES ONLY. Redraw Image 1 decisively to match Image 2 and Image 3 as though made by the same cartoon artist for the same set.
Primary request: strong STYLE AND PROPORTION REDRAW, not a light cleanup. The target must become clearly much cuter: oversized rounded head, large bright simple eyes with white glints, tiny nose and mouth, round cheeks with visible rosy blush, short torso and short legs, approx 3.5–4 heads tall, compact cute anime game proportions. A nonsexual adult fantasy woman with a modest opaque costume.
Character identity and pose: Wraith: retain aqua wavy bob, blue eyes, white and blue stage dress, white gloves, bell microphone on a long elegant stand held toward image-left, and two flowing blue ribbons trailing toward image-right. Preserve the sweet gentle singer gesture with free gloved hand near her chest and crossed feet, turned toward image-left. Modest opaque high-neck dress with puff sleeves, simple broad skirt folds, opaque tights and short boots; simplify ruffles and jewels.
Style/medium: bold clean dark outlines, broad flat color regions, ONE hard-edged cel shadow per region, simple clumped hair, no individual strands, no painterly or soft rendering. Match the rounded expressive facial construction and compact silhouette of the style references. Preserve target's identity, palette, hairstyle category, iconic gear, left-facing pose and personality. Do not copy witch costume, hat, broom or mirror, and do not copy elite axe or red hood.
Composition: one separate character, complete full body including all feet and all props, portrait 1024x1536 PNG, clean empty safety margin about 5% on all sides. Nothing cut off.
Background: genuinely transparent PNG alpha background, empty alpha-zero space around silhouette and between limbs, like reference assets. No painted checkerboard, no opaque background, no scene, floor, ground shadow, glow, halo, haze, gradient, text or watermark.
Avoid: realistic long legs, small head, mature glamorous anatomy, cleavage, soft airbrush shading, detailed embroidery, ornate metalwork, tiny decorative filigree.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

### 本次后续编辑 2

Remove every remaining background pixel and background haze from this character. Make the entire background completely transparent, including all four corners and edges. Preserve the character, ribbons, microphone and all character pixels unchanged.

## 黑羽使徒 · raven

[raven-v2.webp](public/assets/characters/raven-v2.webp)

### 绘制提示词

Use case: stylized-concept
Asset type: transparent anime deckbuilder enemy sprite.
Primary request: brand new cute woman 黑羽使徒. Navy-black short bob with one side tuft, gold eyes, little feather beret, black-and-white feather cape, short shorts over opaque leggings, crow-headed wand, mischievous grin. Character body, face, gaze, and playful pose facing LEFT in three-quarter view. Distinct crow magician silhouette; no sword or armor.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer.
Asset type: full-body enemy sprite for a cute anime fantasy game.
Input images: Image 1 is the EDIT TARGET (raven); Image 2 (witch) and Image 3 (elite) are STYLE REFERENCES ONLY. Redraw Image 1 decisively to match Image 2 and Image 3 as though made by the same cartoon artist for the same set.
Primary request: strong STYLE AND PROPORTION REDRAW, not a light cleanup. The target must become clearly much cuter: oversized rounded head, large bright simple eyes with white glints, tiny nose and mouth, round cheeks with visible rosy blush, short torso and short legs, approx 3.5–4 heads tall, compact cute anime game proportions. A nonsexual adult fantasy woman with a modest opaque costume.
Character identity and pose: Raven: retain navy bob hair, golden eyes, feather beret, black-and-white feather cape, dark shorts over opaque tights, white blouse, dark vest and boots, and crow-headed wand held at image-left. Preserve the playful crossed-leg pose with a gloved finger near her mouth, looking toward image-left. Cute mischievous smile. Modest opaque blouse and vest fully cover torso, no bare midriff. Simplify cape feathers into broad layered shapes and remove fine chains/filigree.
Style/medium: bold clean dark outlines, broad flat color regions, ONE hard-edged cel shadow per region, simple clumped hair, no individual strands, no painterly or soft rendering. Match the rounded expressive facial construction and compact silhouette of the style references. Preserve target's identity, palette, hairstyle category, iconic gear, left-facing pose and personality. Do not copy witch costume, hat, broom or mirror, and do not copy elite axe or red hood.
Composition: one separate character, complete full body including all feet and all props, portrait 1024x1536 PNG, clean empty safety margin about 5% on all sides. Nothing cut off.
Background: genuinely transparent PNG alpha background, empty alpha-zero space around silhouette and between limbs, like reference assets. No painted checkerboard, no opaque background, no scene, floor, ground shadow, glow, halo, haze, gradient, text or watermark.
Avoid: realistic long legs, small head, mature glamorous anatomy, cleavage, soft airbrush shading, detailed embroidery, ornate metalwork, tiny decorative filigree.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 蔷薇剑姬 · duelist

[duelist-v2.webp](public/assets/characters/duelist-v2.webp)

### 绘制提示词

Use case: stylized-concept
Asset type: transparent anime deckbuilder enemy sprite.
Primary request: brand new cute woman 蔷薇剑姬. Coral-pink curled twin tails, green eyes, rose-red and cream frilled duelist dress, elegant thin rapier and a single rose brooch, confident playful fencing stance. Character body, face, gaze, and fencing stance facing LEFT in three-quarter view. Feminine rose fencer silhouette, no shield, no green guardian cape.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer. Asset type: full-body enemy sprite for anime fantasy card game.
Input images: Image 1 is the character EDIT TARGET, source of identity, palette, gear, and distinct LEFT-facing pose. Image 2 (witch) and Image 3 (elite) are the SAME STYLE REFERENCES for this batch; copy their cute stylized proportions, face design, linework and cel-color economy ONLY. Do not copy their costume, hair, hat or weapons.
Primary request: Decisive full STYLE + PROPORTION REDRAW of image 1 to match the witch and elite. Give the adult character an oversized rounded head, very short torso and legs, approximately 3.5–4 heads tall from crown to soles, rounded cheeks with blush, tiny nose and mouth. Cute nonsexual adult fantasy woman in a modest opaque outfit. Broad flat-color areas, bold clean dark outlines and just ONE hard-edged cel shadow per material. Simple chunky hair locks with very few interior strokes. Simplify every costume decoration and fold. The final drawing must immediately belong to the same cute cartoon roster as image 2 and 3.
Scene/backdrop: Genuine transparent PNG alpha background. No painted checkerboard, backdrop, floor, shadow on ground, aura, glow or border.
Composition/framing: ONE separate full body character, portrait 1024x1536. Face and action angle LEFT as in image 1. All hair, props, weapon tips, feet inside canvas with about 5% empty margin on all sides.
Avoid: tall realistic anatomy, long legs, tiny head, mature realistic facial proportions, pinup posing, exposed cleavage or thighs, sensual clothing, detailed embroidery, filigree, many hair strands, soft airbrush shading, gradients, photorealism, multiple characters, text, watermark.

Identity invariants: Coral-pink curly twin tails with chunky loose curls and red rose bows, huge bright GREEN eyes, proud playful closed-mouth smile. Red and cream rose-themed dress, modest high cream front and sleeves, simple gold trim, opaque cream tights and short red boots. Rose bows remain recognizable but simplified. Preserve her dynamic fencing pose with forward arm extended LEFT, rapier pointed upper LEFT and the other hand extended back. Make the curved rapier hilt simple gold, retaining the thin straight silver blade. Keep whole blade inside with margins. Reduce torso and legs substantially; enlarge round face decisively.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 盲眼先知 · oracle

[oracle-v2.webp](public/assets/characters/oracle-v2.webp)

### 绘制提示词

Use case: stylized-concept
Asset type: transparent anime deckbuilder enemy sprite.
Primary request: brand new cute woman 盲眼先知. Mint-green very long straight hair, soft cream blindfold with a tiny star (eyes fully covered), lavender-and-cream oversized robe with big star sleeves, a hovering star-shaped crystal held between both hands, calm sweet smile. Character body, face, and gentle pose facing LEFT in three-quarter view. Distinct large flowing robe silhouette; no blade or armor.
Style/medium: very cute appealing hand-drawn 2D anime JRPG adult fantasy woman, softly rounded face, very large expressive eyes, rosy cheeks, playful or earnest expression, modest cute costume, roughly 4.5-head stylized proportions (not infant chibi). Clear dark contours, flat colors and only 1-2 hard-edge cel shadows. Charming readable silhouette and expressive pose. No detailed realism, no ornate filigree, no shiny rendered materials, no particles or glow backdrop. Nonsexual.
Composition: single full body character, portrait 1024x1536. Comparable size for a game roster, tallest point at 5-8% of imageheight, feet at 90-94%, generous 5-8% safe margin around all uncut hair, feet, and entire weapon. 
Background: genuinely transparent PNG with actual RGBA alpha channel; all background fully alpha=0. No floor, no ground shadow, no backdrop, no painted checkerboard, no text or watermark. Opaque character body and clothes.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer. Asset type: full-body enemy sprite for anime fantasy card game.
Input images: Image 1 is the character EDIT TARGET, source of identity, palette, gear, and distinct LEFT-facing pose. Image 2 (witch) and Image 3 (elite) are the SAME STYLE REFERENCES for this batch; copy their cute stylized proportions, face design, linework and cel-color economy ONLY. Do not copy their costume, hair, hat or weapons.
Primary request: Decisive full STYLE + PROPORTION REDRAW of image 1 to match the witch and elite. Give the adult character an oversized rounded head, very short torso and legs, approximately 3.5–4 heads tall from crown to soles, rounded cheeks with blush, tiny nose and mouth. Cute nonsexual adult fantasy woman in a modest opaque outfit. Broad flat-color areas, bold clean dark outlines and just ONE hard-edged cel shadow per material. Simple chunky hair locks with very few interior strokes. Simplify every costume decoration and fold. The final drawing must immediately belong to the same cute cartoon roster as image 2 and 3.
Scene/backdrop: Genuine transparent PNG alpha background. No painted checkerboard, backdrop, floor, shadow on ground, aura, glow or border.
Composition/framing: ONE separate full body character, portrait 1024x1536. Face and action angle LEFT as in image 1. All hair, props, weapon tips, feet inside canvas with about 5% empty margin on all sides.
Avoid: tall realistic anatomy, long legs, tiny head, mature realistic facial proportions, pinup posing, exposed cleavage or thighs, sensual clothing, detailed embroidery, filigree, many hair strands, soft airbrush shading, gradients, photorealism, multiple characters, text, watermark.

Identity invariants: Mint-green long flowing hair in a few broad locks, cream bow at back, cream STAR BLINDFOLD covering both eyes completely, NO visible eyes. Round cheerful blushing face with small smiling mouth. Lavender and cream WIDE-SLEEVE FULL ROBE with simple gold star motifs, modest closed front reaching ankles; no slit, cleavage, exposed shoulders or thighs. Small visible cream shoes. Preserve serene LEFT-facing three-quarter pose with both hands cupped up in front toward the LEFT, holding a FLOATING faceted lavender/blue star crystal above palms. The crystal has solid flat-color facets, no external glow or aura. Simplify hanging ornaments to a few bold stars. Much shorter body and oversized rounded head in same proportions as references.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 收魂女爵 · reaper

[reaper-v2.webp](public/assets/characters/reaper-v2.webp)

### 绘制提示词

Create a transparent anime game character sprite: 收魂女爵, a very cute adult fantasy woman with lavender side ponytail, large violet eyes, soft rounded face and rosy cheeks, tiny tilted black top hat, plum-and-black doll-like gothic dress with white collar, opaque stockings, rounded crescent scythe, bashful smile. Single full-body figure facing LEFT, generous uncut margin. Hand-drawn 2D anime JRPG, simple clean dark contour linework, flat colors, only one or two hard-edge cel shadows. Slightly oversized cute head, roughly 4.5-head stylized proportions, not baby chibi. Very simple costume: no embroidery, no rendered textures, no shiny materials, no detailed lace, no ornate filigree. Cute and dignified, nonsexual, no skulls or horror. Portrait 1024x1536, full figure from tilted hat at 6% imageheight to boots at 93%, entire scythe inside safe margins. Isolated character with a transparent background.

### 统一为第二轮角色风格

风格参考：[镜月魔女](public/assets/characters/witch.webp)、[无名处刑者](public/assets/characters/elite.webp)。

Use case: style-transfer. Asset type: full-body enemy sprite for anime fantasy card game.
Input images: Image 1 is the character EDIT TARGET, source of identity, palette, gear, and distinct LEFT-facing pose. Image 2 (witch) and Image 3 (elite) are the SAME STYLE REFERENCES for this batch; copy their cute stylized proportions, face design, linework and cel-color economy ONLY. Do not copy their costume, hair, hat or weapons.
Primary request: Decisive full STYLE + PROPORTION REDRAW of image 1 to match the witch and elite. Give the adult character an oversized rounded head, very short torso and legs, approximately 3.5–4 heads tall from crown to soles, rounded cheeks with blush, tiny nose and mouth. Cute nonsexual adult fantasy woman in a modest opaque outfit. Broad flat-color areas, bold clean dark outlines and just ONE hard-edged cel shadow per material. Simple chunky hair locks with very few interior strokes. Simplify every costume decoration and fold. The final drawing must immediately belong to the same cute cartoon roster as image 2 and 3.
Scene/backdrop: Genuine transparent PNG alpha background. No painted checkerboard, backdrop, floor, shadow on ground, aura, glow or border.
Composition/framing: ONE separate full body character, portrait 1024x1536. Face and action angle LEFT as in image 1. All hair, props, weapon tips, feet inside canvas with about 5% empty margin on all sides.
Avoid: tall realistic anatomy, long legs, tiny head, mature realistic facial proportions, pinup posing, exposed cleavage or thighs, sensual clothing, detailed embroidery, filigree, many hair strands, soft airbrush shading, gradients, photorealism, multiple characters, text, watermark.

Identity invariants: Light-lavender SIDE PONYTAIL in a few large sweeping curls, little black top hat with plum bow, huge bright violet eyes and a bashful cute smile with rosy cheeks. Modest opaque plum-and-black doll dress with puffed sleeves, high cream bib, simple gold buttons, plum bows, opaque dark tights and short black boots. Preserve LEFT-facing three-quarter pose, one gloved hand near chin and other hand holding long scythe diagonally. Crescent scythe remains recognizable: black shaft, simplified gold crescent near purple jewel, single clean long lavender crescent blade curving on the RIGHT side of character. Keep full scythe blade and shaft in frame. Draw a much larger rounded head, very short torso and legs, like the witch and elite references.

### 本次后续编辑 1

Remove the background of this image. Make a transparent background.

## 折翼天使 · seraph

[seraph.webp](public/assets/characters/seraph.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: transparent full-body 2D enemy battle sprite for the Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE unique VERY CUTE appealing hand-drawn 2D anime fantasy woman character, adult depicted with cute stylized roughly 4.5-head body proportions, not infant chibi. Softly rounded face, large expressive eyes, rosy cheeks, playful/earnest expression, modest cute costume, dignified nonsexual.
Style: clean dark contours, flat colors and only 1-2 hard-edge cel shadow tones, simple graphic shapes, charming polished anime game sprite. Avoid detailed realism, painterly rendering, ornate filigree, shiny material rendering, tiny surface decorations, particles and glowy backgrounds.
Composition: portrait 1024x1536 PNG, full body including all hair, feet, clothing and entire weapon visible, isolated alone facing LEFT in a three-quarter battle-ready pose. Highest point at 5-8% image height, feet at about 90-94% height, 5-8% clear margins around all hair, feet, accessories and weapons.
Background: genuinely transparent RGBA PNG with actual alpha=0 outside the cutout. No backdrop, no floor, no cast shadow, no checkerboard drawn into image, no text or watermark.
Character: 折翼天使. Fluffy golden short hair, sky-blue eyes, a broken little halo, asymmetric small ivory angel wings. Cream and gold tunic dress with short blue cape. Carries a small sun-shaped spear. Brave pouting expression with flushed cheeks. Distinct cute small-winged angel silhouette. All weapons and halo fully contained in frame.

### 后续编辑 1

Use case: style-transfer.
Input image: edit target, an existing anime girl enemy sprite.
Primary request: redraw this SAME character as a noticeably CUTER, simpler hand-drawn anime game sprite. Keep her identity, palette, distinctive hairstyle, costume silhouette, props, expression and left-facing pose. Change the rendering and proportions to a rounder, big-eyed, rosy-cheeked adult in cute 4.5-head stylization, with a visibly larger head and shorter legs. Use clean bold dark outlines, flat colors and only ONE simple hard-edged shadow color per surface. Remove tiny filigree, multiple highlights, metallic texture and ornate buckles. Keep costume modest.
Framing correction: fit the ENTIRE character and ALL props inside portrait 1024x1536 canvas with real clear 7% margin on ALL four sides. Highest point about y=108, feet no lower than y=1428. Nothing touches the edges. Center silhouette without stretching.
Transparency: genuinely transparent RGBA PNG with alpha=0 everywhere outside the exact character and prop cutouts. Preserve clean opaque interiors. Remove all background light/glow/shadow/gradient residue. No backdrop, floor, checkerboard graphic, particles, text or watermark.

### 后续编辑 2

Remove the background of this image. Make a transparent background.

## 镜月魔女 · witch

[witch.webp](public/assets/characters/witch.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: transparent full-body 2D enemy battle sprite for the Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE unique VERY CUTE appealing hand-drawn 2D anime fantasy woman character, adult depicted with cute stylized roughly 4.5-head body proportions, not infant chibi. Softly rounded face, large expressive eyes, rosy cheeks, playful/earnest expression, modest cute costume, dignified nonsexual.
Style: clean dark contours, flat colors and only 1-2 hard-edge cel shadow tones, simple graphic shapes, charming polished anime game sprite. Avoid detailed realism, painterly rendering, ornate filigree, shiny material rendering, tiny surface decorations, particles and glowy backgrounds.
Composition: portrait 1024x1536 PNG, full body including all hair, feet, clothing and entire weapon visible, isolated alone facing LEFT in a three-quarter battle-ready pose. Highest point at 5-8% image height, feet at about 90-94% height, 5-8% clear margins around all hair, feet, accessories and weapons.
Background: genuinely transparent RGBA PNG with actual alpha=0 outside the cutout. No backdrop, no floor, no cast shadow, no checkerboard drawn into image, no text or watermark.
Character: 镜月魔女. Purple hair in braids, pink-violet eyes, huge floppy purple witch hat with a simple moon pin. Navy and lavender modest dress. One hand holds a round silver hand-mirror, the other holds a stubby broom, both fully visible. Curious sweet smile. Distinct broad floppy-hat silhouette.

### 后续编辑 1

Use case: style-transfer.
Input image: edit target, an existing anime girl enemy sprite.
Primary request: redraw this SAME character as a noticeably CUTER, simpler hand-drawn anime game sprite. Keep her identity, palette, distinctive hairstyle, costume silhouette, props, expression and left-facing pose. Change the rendering and proportions to a rounder, big-eyed, rosy-cheeked adult in cute 4.5-head stylization, with a visibly larger head and shorter legs. Use clean bold dark outlines, flat colors and only ONE simple hard-edged shadow color per surface. Remove tiny filigree, multiple highlights, metallic texture and ornate buckles. Keep costume modest.
Framing correction: fit the ENTIRE character and ALL props inside portrait 1024x1536 canvas with real clear 7% margin on ALL four sides. Highest point about y=108, feet no lower than y=1428. Nothing touches the edges. Center silhouette without stretching.
Transparency: genuinely transparent RGBA PNG with alpha=0 everywhere outside the exact character and prop cutouts. Preserve clean opaque interiors. Remove all background light/glow/shadow/gradient residue. No backdrop, floor, checkerboard graphic, particles, text or watermark.

### 后续编辑 2

Remove the background of this image. Make a transparent background.

## 无名处刑者 · elite

[elite.webp](public/assets/characters/elite.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: transparent full-body 2D enemy battle sprite for the Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE unique VERY CUTE appealing hand-drawn 2D anime fantasy woman character, adult depicted with cute stylized roughly 4.5-head body proportions, not infant chibi. Softly rounded face, large expressive eyes, rosy cheeks, playful/earnest expression, modest cute costume, dignified nonsexual.
Style: clean dark contours, flat colors and only 1-2 hard-edge cel shadow tones, simple graphic shapes, charming polished anime game sprite. Avoid detailed realism, painterly rendering, ornate filigree, shiny material rendering, tiny surface decorations, particles and glowy backgrounds.
Composition: portrait 1024x1536 PNG, full body including all hair, feet, clothing and entire weapon visible, isolated alone facing LEFT in a three-quarter battle-ready pose. Highest point at 5-8% image height, feet at about 90-94% height, 5-8% clear margins around all hair, feet, accessories and weapons.
Background: genuinely transparent RGBA PNG with actual alpha=0 outside the cutout. No backdrop, no floor, no cast shadow, no checkerboard drawn into image, no text or watermark.
Character: 无名处刑者. Ash-gray twin braids, ruby eyes, oversized burgundy executioner hood with her entire face fully visible, charcoal and red thick coat dress. Holds a huge broad blunt-tipped fantasy axe, entire axe visible within frame. Stubborn rosy-cheeked pout. Cute dignified adult fantasy woman, no blood or gore, no face covering, modest clothing.

### 后续编辑 1

Use case: style-transfer.
Input image: edit target, an existing anime girl enemy sprite.
Primary request: redraw this SAME character as a noticeably CUTER, simpler hand-drawn anime game sprite. Keep her identity, palette, distinctive hairstyle, costume silhouette, props, expression and left-facing pose. Change the rendering and proportions to a rounder, big-eyed, rosy-cheeked adult in cute 4.5-head stylization, with a visibly larger head and shorter legs. Use clean bold dark outlines, flat colors and only ONE simple hard-edged shadow color per surface. Remove tiny filigree, multiple highlights, metallic texture and ornate buckles. Keep costume modest.
Framing correction: fit the ENTIRE character and ALL props inside portrait 1024x1536 canvas with real clear 7% margin on ALL four sides. Highest point about y=108, feet no lower than y=1428. Nothing touches the edges. Center silhouette without stretching.
Transparency: genuinely transparent RGBA PNG with alpha=0 everywhere outside the exact character and prop cutouts. Preserve clean opaque interiors. Remove all background light/glow/shadow/gradient residue. No backdrop, floor, checkerboard graphic, particles, text or watermark.

### 后续编辑 2

Remove the background of this image. Make a transparent background.

## 缄默圣女·伊芙 · boss0

[boss0.webp](public/assets/characters/boss0.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: isolated transparent full-body 2D enemy boss battle sprite for Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE VERY CUTE anime cartoon girl character: adult fantasy woman drawn with a large rounded head and short legs at roughly 4.5-head body proportions. Large round expressive eyes, rosy cheeks, small mouth, sweet appealing face, modest cute costume, dignified nonsexual. The emphasis is CARTOON CUTE, not glamorous realistic illustration.
Style: simple hand-drawn anime game sprite. Clean bold dark outlines, flat colors with just ONE hard-edge cel shadow color per surface. Broad readable simplified forms, minimal decorative details, no smooth rendering, no metallic texture, no ornate filigree, no realistic proportions or long legs.
Composition: portrait 1024x1536 PNG, full body with all hair, feet, clothes and entire props fully visible. Facing LEFT in a three-quarter battle-ready pose. Fit the ENTIRE silhouette within 7% clear margins on all four sides, highest point about y=108 and feet about y=1428. No part touches image edges.
Background: genuinely TRANSPARENT RGBA PNG with actual alpha=0 outside the exact character cutout, not a depiction of transparency. No backdrop, background glow, floor, cast shadow, checkerboard graphic, particles, text or watermark.
Character: 缄默圣女·伊芙. Long pearl-white hair arranged in twin low loops, gentle honey-colored eyes, small cream-and-teal nun veil and delicate thin ring halo. White modest bell-shaped dress with simple teal accents. Holds a large ceremonial gold bell staff, while other hand is open in blessing. Serene sweet smile. Strong iconic bell-and-veil silhouette with very few simple details.

## 镜之女王·赛琳 · boss1

[boss1.webp](public/assets/characters/boss1.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: isolated transparent full-body 2D enemy boss battle sprite for Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE VERY CUTE anime cartoon girl character: adult fantasy woman drawn with a large rounded head and short legs at roughly 4.5-head body proportions. Large round expressive eyes, rosy cheeks, small mouth, sweet appealing face, modest cute costume, dignified nonsexual. The emphasis is CARTOON CUTE, not glamorous realistic illustration.
Style: simple hand-drawn anime game sprite. Clean bold dark outlines, flat colors with just ONE hard-edge cel shadow color per surface. Broad readable simplified forms, minimal decorative details, no smooth rendering, no metallic texture, no ornate filigree, no realistic proportions or long legs.
Composition: portrait 1024x1536 PNG, full body with all hair, feet, clothes and entire props fully visible. Facing LEFT in a three-quarter battle-ready pose. Fit the ENTIRE silhouette within 7% clear margins on all four sides, highest point about y=108 and feet about y=1428. No part touches image edges.
Background: genuinely TRANSPARENT RGBA PNG with actual alpha=0 outside the exact character cutout, not a depiction of transparency. No backdrop, background glow, floor, cast shadow, checkerboard graphic, particles, text or watermark.
Character: 镜之女王·赛琳. Icy-blue long curled hair, sapphire eyes, modest silver-and-ice-blue royal gown with a wide skirt, a small crystal crown. An oval silver mirror floats beside her and she holds a short crystal scepter. Proud adorable queen expression with flushed cheeks. Distinct broad royal gown silhouette. Simple decorative shapes, no filigree.

## 蚀月神姬·诺克丝 · boss2

[boss2.webp](public/assets/characters/boss2.webp)

### 绘制提示词

Use case: stylized-concept.
Asset type: isolated transparent full-body 2D enemy boss battle sprite for Chinese JRPG 月蚀尖塔.
Primary request: Create exactly ONE VERY CUTE anime cartoon girl character: adult fantasy woman drawn with a large rounded head and short legs at roughly 4.5-head body proportions. Large round expressive eyes, rosy cheeks, small mouth, sweet appealing face, modest cute costume, dignified nonsexual. The emphasis is CARTOON CUTE, not glamorous realistic illustration.
Style: simple hand-drawn anime game sprite. Clean bold dark outlines, flat colors with just ONE hard-edge cel shadow color per surface. Broad readable simplified forms, minimal decorative details, no smooth rendering, no metallic texture, no ornate filigree, no realistic proportions or long legs.
Composition: portrait 1024x1536 PNG, full body with all hair, feet, clothes and entire props fully visible. Facing LEFT in a three-quarter battle-ready pose. Fit the ENTIRE silhouette within 7% clear margins on all four sides, highest point about y=108 and feet about y=1428. No part touches image edges.
Background: genuinely TRANSPARENT RGBA PNG with actual alpha=0 outside the exact character cutout, not a depiction of transparency. No backdrop, background glow, floor, cast shadow, checkerboard graphic, particles, text or watermark.
Character: 蚀月神姬·诺克丝. Deep-indigo long twin tails fading to violet, bright amethyst eyes, oversized crescent moon hair ornament. A modest black-plum and cream moon-themed dress with broad crescent-shaped cape silhouette. Floating small crescent relic beside her and simple star wand in her hand. Smug cute smile. Final-boss magical-girl presence, very simple large design shapes without intricate ornamentation.
