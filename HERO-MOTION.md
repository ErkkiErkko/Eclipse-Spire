# 莉雅的出牌动作

| 行为 | 动作与效果 | 时长 |
| --- | --- | --- |
| 攻击 | 短蓄势、向右突进、青白月刃扫出、收剑回位；双月追加第二道斩光，月辉终结技增强斩光 | 430 ms |
| 防御 | 重心后移、收身架势、半月盾从身体右侧展开并回收 | 400 ms |
| 其他技能 | 闭眼抬掌引导施法；月辉、抽牌、治疗、负面效果使用不同符号与色彩 | 480 ms |
| 能力强化 | 短暂下沉后提身、三层金色月环逐级升起、胸前强化符号亮起并淡出 | 600 ms |

动作由成功的卡牌状态变化触发；攻击附带月辉仍采用攻击动作，技能因遗物获得额外格挡不会被误判为防御。格挡兼抽牌的卡牌优先表现防御主动作。受击另用 240 ms 短促后仰。

动画只改变视觉图层。卡牌效果、资源扣除和手牌更新即时生效，没有等待动画结束的出牌锁。下一张牌会读取当前可见位移和姿势透明度，再取消上一个动画并平滑衔接；不会堆积动作队列。数值、角色名称、意图和点击区域保持原位，特效不接收指针事件。

攻击和防御沿用当前干净的莉雅立绘，通过位移、旋转、轻微形变和月刃/月盾特效完成；技能与能力牌额外使用同一张闭眼抬掌姿势，以短交叉淡化进出。所有动作恢复到原有待机立绘。动作生成阶段的攻击、防御候选因背景透明度和局部结构问题未被采用。

关闭动态效果或启用系统减少动态效果时，立即停止动作与特效；重新打开时不会重播旧动作。图片尚未加载时保留待机立绘并播放位移效果，不会出现空白角色。动作数据不写入存档。

## 施法姿势

使用内置 imagegen，以当前莉雅立绘作为严格角色与画风参考。选定 PNG 为 1024 × 1536、真实 RGBA，保留原生尺寸，以 WebP 质量 92、透明度质量 100 编码为 [hero-channel.webp](public/assets/characters/hero-channel.webp)，没有裁切、缩放或手工改画。

原始图片：`C:/Users/erkki/.codex/visualizations/2026/09/05/01a07002-3ca7-7533-81cb-b0885582fb8d/hero-motion/channel.png`

完整提示词：

```text
Use case: identity-preserve.
Asset type: ONE transparent full-body game character magic-channeling key pose shared by skill and self-buff animations.
Input image 1 is the STRICT identity, costume, proportions, linework, palette and cel-shading reference for the existing character Liya. Create the SAME silver-haired, teal-eyed chibi girl, with exactly the same cute face, large head/small body proportions, side braid, teal hair bow, gold flower hair ornament, ivory-and-teal gold-trimmed outfit, moon brooch, dark tights, white teal/gold boots, and cyan-bladed sword. Do not redesign her.
Change only the pose and facial expression: facing right in the same three-quarter orientation, poised upright with feet planted close together. Her free hand is lifted near her chest/chin with a relaxed open palm as though gathering moonlight, while her other hand holds the sword lowered diagonally at her side. Eyes softly closed with a peaceful small smile. The braid and cape gently float to the left. Clean anatomically coherent hands. The cyan sword is a solid prop, with no emitted glow or VFX.
Composition: requested portrait 1024x1536. Whole body, hair, boots, hands, cape and entire sword contained inside the canvas. Character body centered; top of hair at 6-8% and boot soles at 96% canvas height, total visible character height 88-92%. Avoid excess empty space or clipping.
Background: genuinely transparent PNG RGBA, alpha 0 outside the clean character silhouette, including gaps between limbs and sword. Preserve crisp anti-aliased alpha edges. No background color, scene, ground plane, cast shadow, checkerboard, text, UI, cards, extra characters, aura, magical effects, particles, glowing moons or energy. Magic will be animated separately. Exactly one image; no variants, no contact sheet.
```

## 参考与验证

设计参考方向为《杀戮尖塔 2》的角色辨识度与动作表达。查阅了 [Mega Crit 官方动画制作文章](https://www.megacrit.com/news/2026-7-17-neowsletter-issue-24/)；本实现采用独立动作与特效，没有使用原游戏美术或动画数据，也未测量或声称复制其动画时序。

8 项动作测试覆盖全部可打出卡牌的动作分类、遗物附加效果、非法/重复输入、非出牌动作、连续出牌、双段与月辉攻击、动作中断衔接、取消清理、资源加载回退和归位时长。与 21 项游戏规则测试一并运行。未进行浏览器交互或动画录屏验收。
