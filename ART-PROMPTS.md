# Background and previous character asset prompts

The current 13 cute character portraits are documented in CHARACTER-ART-PROMPTS.md.
The courtyard prompt below remains current; hero.png and enemy.png describe the previous character set.

Tool: built-in imagegen. Output files are project-local under public/assets.
The style was revised following the user's request for simpler animation-style artwork.

## courtyard.png — style edit

Use case: style-transfer. Input image 1 is the edit target: the existing battle background for the original anime game 月蚀尖塔.
Redraw the supplied scene comprehensively into a deliberate, simple 2D television-anime animation layout. Keep the wide 16:9 composition, large moon and distant tower in the center, gothic arches on both sides, and completely open horizontal combat ground in the lower half. Transform elaborate architecture into broad graphic silhouettes and clean readable shapes: a few arches, tower spires, and large stone pavement shapes only. Use a restrained five-color navy/blue/teal palette with flat solid local colors, confident medium-dark outline drawing, and at most 1 or 2 hard-edged shadow values. The large moon is a simple flat pale disc with only a few stylized shapes. Restrained depth built from flat layered scenery. This should feel like an actual hand-drawn background layout from a television animation episode, with large restful shapes and little detail, not a lavish digital illustration.
Remove tiny masonry lines, foliage microdetails, ornate decoration, complex surface textures, filmic lighting, gradients, bloom, particles, glitter, photorealism, painterly brush texture, and shiny material highlights. No characters, no text, no logo, no watermark, no interface. Maintain overall environment identity and placement, but simplify the shapes very strongly.

## hero.png — style edit

Use case: style-transfer. Input image 1 is the edit target: the original silver-haired heroine.
Redraw this same adult heroine as a simple 2D television-anime production animation cel. Keep her silver-white long hair, teal eyes, black-and-ivory battle dress with a few flat gold accents, cyan katana, graceful combat stance facing right, entire uncut full body and complete weapon. Simplify her costume into memorable readable shapes: clean ivory tunic-like front, broad black dress panels, a single teal ribbon, plain tall boots, minimal gold trim, one small hair ornament. Simplify hair into a small number of large flowing locks; remove all tiny individual hair strands. Use confident medium-dark outline drawing, flat opaque solid local colors, and only one or two simple hard-edged cel-shadow tones, as if this were a frame hand-drawn for TV anime. Simplify the face into expressive TV-anime eyes, small nose and mouth. The cyan sword is a flat clean blade shape without glow or particles.
Strongly remove intricate gold filigree, embroidery, jewellery clusters, tiny lace details, surface texture, painterly shading, gradients, airbrush lighting, bloom, glitter, luminous aura, photorealism, shiny material rendering. Dignified nonsexual adult character. Generous transparent margins on every side; entire hair silhouette, clothing, boots, and sword inside the image without cropping. Preserve genuine transparent PNG alpha around the isolated character and between shapes. No backdrop, checkerboard graphic, floor, shadows behind her, text, logo, watermark, or UI.

## enemy.png — style edit

Use case: style-transfer. Input image 1 is the edit target: the original violet-haired fallen cathedral knight.
Redraw this same adult knight as a simple 2D television-anime production animation cel. Keep her pale violet long hair, black armored dress with muted crimson accents, winglike cape, moon-crescent polearm, and combat-ready three-quarter stance facing left. Simplify costume into memorable readable shapes: plain broad black breastplate and shoulder armor, broad black skirt panels, a simple crimson-lined winglike cape, plain armored boots, one small crown silhouette. Simplify hair into a few large flowing locks and eliminate tiny individual strands. Simplify the weapon into one elegant solid crescent blade on a clean pole with a small muted crimson inset, no complex spikes or ornamentation. Use confident medium-dark outlines, flat opaque solid local colors, and one or two simple hard-edged cel-shadow tones, like a hand-drawn frame for TV anime. Expressive clean TV-anime facial features. The entire design should be easy for an animator to draw repeatedly.
Strongly remove intricate armor filigree, thorn clusters, lace, embroidery, dense jewellery, material texture, painterly shading, gradients, bloom, particles, glitter, photorealism, and shiny metal highlights. Dignified nonsexual adult character. Entire uncut full body and full polearm, boots, hair, and cape, all within the canvas with generous transparent safe margins on every side. Preserve genuine transparent PNG alpha around the isolated character and between shapes. No backdrop, checkerboard graphic, floor, cast shadows behind her, text, logo, watermark, or UI.

## Character transparency correction

Remove the checkerboard background from this image and output the exact character on a genuinely transparent background with PNG alpha transparency. This is a background extraction edit only. Preserve the existing character pixels, flat cel drawing style, outline, colors, pose, face, hair, costume, complete weapon, framing and safe margins exactly. Every checkerboard square must be removed, including enclosed spaces between hair, arms, dress panels and weapon. Do not paint any replacement background or transparency preview pattern. Only the isolated character should be opaque; the entire background must have zero alpha.

## Final heroine transparency correction

Make the background transparent. Deliver a transparent-background PNG cutout of this heroine. Keep her clean flat-color anime cel style and entire full-body figure, long hair, sword, and boots. Remove all gray and white background squares around and between the figure. Keep the illustration unchanged.
