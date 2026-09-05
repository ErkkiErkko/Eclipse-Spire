# 月蚀尖塔 · Eclipse Spire

原创中文动漫卡牌构筑冒险，灵感来自《杀戮尖塔》。直接进入第一场战斗，可完整通关三幕、24 层尖塔。

- 26 种卡牌及升级效果，月辉爆发、格挡、中毒、能力等构筑。
- 12 件遗物、3 种药剂、12 种敌人（包含 3 位首领）。
- 分岔地图、营火休息与升级、商店购买和删牌、4 类随机事件、宝箱、战后选牌。
- 敌人行动预告、双敌战斗、目标选择、伤害飘字、合成音效与可选背景音乐。
- 浏览器自动存档、触屏横滑手牌、键盘操作、减少动态效果设置。

## 本地运行

要求 Node.js 22.13+，推荐 Node.js 24；依赖使用 pnpm。

    pnpm install
    pnpm dev
    pnpm test
    pnpm build

本机已安装依赖。也可直接运行 node_modules/.bin/vinext.cmd dev（Windows）。
默认开发地址为 http://localhost:3000/ 。

## 操作

点击攻击牌，再点击敌人；技能和能力牌直接生效。数字键 1–9 选牌，
E 或 Enter 结束回合，M 查看地图，D 查看牌组，H 查看指南，Esc 取消选牌。
药剂不消耗能量。菜单中可查看每种状态、卡牌和遗物的效果。
初始教学连招：弦月斩 → 弦月斩 → 月华一闪。

进度保存在 localStorage 的 eclipse-spire-save-v1，仅属于当前浏览器和站点来源。
本地预览和部署网址具有独立的浏览器存档。

## 项目结构

- app/page.tsx：交互、回合节奏、存档、战斗画面。
- app/globals.css：界面、动画与响应式布局。
- lib/game-data.ts：卡牌、遗物、敌人行动与中文规则。
- lib/game-engine.ts：使用种子随机数的纯游戏状态机。
- components/game-scenes.tsx：冒险场景和结局。
- components/game-ui.tsx：卡牌、图标、血条、路线地图。
- components/game-dialogs.tsx：牌库、指南、设置等对话框。
- lib/game-audio.ts：Web Audio 音效与音乐。
- lib/game-tools.ts：渐进增强的 WebMCP 战斗接口。
- public/assets：原创动画风格图片。
- tests/game-engine.test.mjs：21 项游戏规则回归测试。

## 美术

三张原创资产均由内置 imagegen 生成，再根据用户反馈改为简洁二维动画风格：
清晰轮廓、赛璐璐色块、较少的服饰装饰与场景纹理。角色保持 PNG 透明通道。

- public/assets/hero.png：银发、青眼的成年剑姬莉雅，黑白战裙、青色长剑，朝右。
- public/assets/enemy.png：紫发堕落女骑士，深色铠甲、弯月长柄武器，朝左。
- public/assets/courtyard.png：巨大月亮与高塔下的废弃哥特圣堂、宽阔战斗地面。

未使用原游戏的美术、音频、角色或卡牌文本。敌方单位共用骑士立绘，
并以名字、色调、生命和行动模式区分。完整最终编辑提示词见 ART-PROMPTS.md。

## 验证

21 项规则测试通过，覆盖全部卡牌的两个等级、月辉、状态、多段伤害、双目标、
洗牌、消耗、药剂、一次性奖励、地图路径、营火、商店、事件、幕切换和存档恢复。
TypeScript 检查与生产构建通过。

WebMCP 在支持 document.modelContext 的浏览器中注册 read_eclipse_battle、
play_eclipse_card、end_eclipse_turn，并复用可见界面的状态机。
当前环境未提供可验证此接口的 WebMCP 调用上下文，未声称已完成浏览器接口验证。
