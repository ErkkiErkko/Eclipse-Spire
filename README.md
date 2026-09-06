# 月蚀尖塔 · Eclipse Spire

原创中文动漫卡牌构筑冒险，灵感来自《杀戮尖塔》。直接进入第一场战斗，可完整通关三幕、24 层尖塔。

- 26 种卡牌及各自的原创卡图、升级效果，月辉爆发、格挡、中毒、能力等构筑。
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
- lib/character-art.ts：主角与每种敌人的独立立绘映射。
- lib/card-art.ts：全部 26 种卡牌的独立插画路径和画面描述。
- lib/relic-art.ts：全部 12 件遗物的独立贴图路径和外形描述。
- lib/game-engine.ts：使用种子随机数的纯游戏状态机。
- components/game-scenes.tsx：冒险场景和结局。
- components/game-ui.tsx：卡牌、图标、血条、路线地图。
- components/game-dialogs.tsx：牌库、指南、设置等对话框。
- lib/game-audio.ts：Web Audio 音效与音乐。
- lib/game-tools.ts：渐进增强的 WebMCP 战斗接口。
- public/assets：原创动画风格图片。
- tests/game-engine.test.mjs：21 项游戏规则回归测试。

## 美术

角色采用可爱的二维动漫女生风格：圆润脸型、明亮眼睛、腮红与各具性格的表情。
主角和全部 12 种敌人分别绘制，发型、服装轮廓、武器、姿态与配色各不相同。
每张角色图均由内置 imagegen 生成，保留真实透明通道，并无损编码为 WebP。
莉雅与前六种普通敌人以镜月魔女、无名处刑者为直接图片参考，统一为更圆润的大头短身比例、明亮大眼睛、粗轮廓与简洁赛璐璐阴影。

- public/assets/characters/hero-cute-v2.webp：银发青眼的月咏·莉雅、青色蝴蝶结与月刃。
- public/assets/characters/：守卫、歌姬、使徒、剑姬、先知、女爵、天使、魔女、处刑者和三位首领，共 12 张独立敌人立绘。
- public/assets/cards/：26 幅独立卡图，以当前莉雅立绘为画风和角色参考，分别设计动作、道具与场景来表达牌名或效果。每幅为 1536 × 1024 不透明横幅，使用质量 92 的 WebP 编码加快加载，保留完整分辨率；本地无损原图保存在 outputs/card-art-originals/。
- public/assets/relics/：12 件独立绘制的简约动画遗物，以月牙、羽毛、红心琥珀、铃铛、断剑、日光晶体、蔷薇、罗盘、沙漏、王冠、碎镜和丝线区分轮廓，保留真实透明通道并无损编码为 WebP。
- public/assets/courtyard.png：巨大月亮与高塔下的废弃哥特圣堂、宽阔战斗地面。

战斗、事件与结局使用角色立绘；手牌、牌库、奖励、商店及升级预览统一使用独立卡图。
每个卡牌 ID 对应一幅专属插画，基础版和升级版共享该画面。图片不写入存档，旧存档可直接继续。
遗物栏、战后奖励、商店、随行遗物详情与结局回顾使用同一套专属贴图，并保留名称和效果说明。
完整角色设定见 CHARACTER-ROSTER.md，新立绘提示词见 CHARACTER-ART-PROMPTS.md，
卡图设计与完整生成提示词见 CARD-ART-PROMPTS.md，背景和早期版本提示词见 ART-PROMPTS.md。
遗物贴图设计、完整生成提示词与必要修正见 RELIC-ART-PROMPTS.md。
未使用原游戏的美术、音频、角色或卡牌文本。

## 验证

21 项规则测试通过，覆盖全部卡牌的两个等级、月辉、状态、多段伤害、双目标、
洗牌、消耗、药剂、一次性奖励、地图路径、营火、商店、事件、幕切换和存档恢复。
TypeScript 检查与生产构建通过。

WebMCP 在支持 document.modelContext 的浏览器中注册 read_eclipse_battle、
play_eclipse_card、end_eclipse_turn，并复用可见界面的状态机。
当前环境未提供可验证此接口的 WebMCP 调用上下文，未声称已完成浏览器接口验证。
