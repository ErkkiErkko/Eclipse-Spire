export type CardType = 'attack' | 'skill' | 'power' | 'curse';
export type CardDef = { name: string; type: CardType; rarity: '基础'|'普通'|'稀有'|'史诗'|'诅咒'; cost: number; icon: string; art: number; text: [string,string]; damage?: [number,number]; block?: [number,number]; moon?: [number,number]; draw?: [number,number]; hits?: number; all?: boolean; exhaust?: boolean; };
export const CARDS: Record<string,CardDef> = {
 strike:{name:'弦月斩',type:'attack',rarity:'基础',cost:1,icon:'swords',art:0,damage:[6,9],moon:[1,1],text:['造成 6 点伤害。获得 1 层月辉。','造成 9 点伤害。获得 1 层月辉。']},
 guard:{name:'月纱',type:'skill',rarity:'基础',cost:1,icon:'shield',art:1,block:[5,8],text:['获得 5 点格挡。','获得 8 点格挡。']},
 mooncut:{name:'月华一闪',type:'attack',rarity:'稀有',cost:1,icon:'moon',art:2,damage:[8,12],text:['造成 8 点伤害。消耗所有月辉，每层额外造成 3 点伤害。','造成 12 点伤害。消耗所有月辉，每层额外造成 4 点伤害。']},
 quick:{name:'燕返',type:'attack',rarity:'普通',cost:0,icon:'feather',art:3,damage:[3,5],draw:[1,1],text:['造成 3 点伤害。抽 1 张牌。','造成 5 点伤害。抽 1 张牌。']},
 crescent:{name:'双月',type:'attack',rarity:'普通',cost:1,icon:'swords',art:4,damage:[5,7],hits:2,text:['造成 5 点伤害两次。','造成 7 点伤害两次。']},
 mist:{name:'雾隐步',type:'skill',rarity:'普通',cost:1,icon:'wind',art:5,block:[7,10],draw:[1,1],text:['获得 7 点格挡。抽 1 张牌。','获得 10 点格挡。抽 1 张牌。']},
 focus:{name:'凝月',type:'skill',rarity:'普通',cost:1,icon:'moon',art:6,moon:[3,5],text:['获得 3 层月辉。','获得 5 层月辉。']},
 storm:{name:'银刃风暴',type:'attack',rarity:'稀有',cost:1,icon:'wind',art:7,damage:[8,11],all:true,text:['对所有敌人造成 8 点伤害。','对所有敌人造成 11 点伤害。']},
 fracture:{name:'破誓之刃',type:'attack',rarity:'普通',cost:1,icon:'zap',art:8,damage:[9,12],text:['造成 9 点伤害。施加 2 回合易伤。','造成 12 点伤害。施加 3 回合易伤。']},
 ward:{name:'月下守望',type:'skill',rarity:'稀有',cost:1,icon:'shield',art:9,block:[10,14],moon:[1,2],text:['获得 10 点格挡与 1 层月辉。','获得 14 点格挡与 2 层月辉。']},
 trance:{name:'月之呼吸',type:'power',rarity:'稀有',cost:1,icon:'moon',art:10,text:['每回合开始时，获得 1 层月辉。','每回合开始时，获得 2 层月辉。']},
 blade:{name:'剑心',type:'power',rarity:'稀有',cost:1,icon:'swords',art:11,text:['获得 2 点力量。本场战斗持续生效。','获得 3 点力量。本场战斗持续生效。']},
 meteor:{name:'坠星',type:'attack',rarity:'普通',cost:2,icon:'star',art:12,damage:[18,25],text:['造成 18 点伤害。','造成 25 点伤害。']},
 drain:{name:'绯色契约',type:'attack',rarity:'稀有',cost:1,icon:'heart',art:13,damage:[8,11],exhaust:true,text:['造成 8 点伤害。恢复 3 点生命。消耗。','造成 11 点伤害。恢复 5 点生命。消耗。']},
 thorn:{name:'毒蔷薇',type:'skill',rarity:'普通',cost:1,icon:'flower',art:14,text:['施加 5 层中毒。每次敌人行动前受到中毒伤害。','施加 8 层中毒。每次敌人行动前受到中毒伤害。']},
 bind:{name:'缄默之印',type:'skill',rarity:'普通',cost:1,icon:'eye',art:15,block:[4,6],text:['获得 4 点格挡。施加 2 回合虚弱。','获得 6 点格挡。施加 3 回合虚弱。']},
 insight:{name:'星之启示',type:'skill',rarity:'稀有',cost:0,icon:'sparkles',art:16,draw:[2,3],exhaust:true,text:['抽 2 张牌。消耗。','抽 3 张牌。消耗。']},
 nightfall:{name:'终夜轮舞',type:'attack',rarity:'史诗',cost:2,icon:'eclipse',art:17,damage:[5,8],all:true,text:['对所有敌人造成 5 点伤害。消耗所有月辉，每层额外造成 3 点伤害。','对所有敌人造成 8 点伤害。消耗所有月辉，每层额外造成 4 点伤害。']},
 bloom:{name:'永生花',type:'skill',rarity:'稀有',cost:1,icon:'flower',art:18,exhaust:true,text:['恢复 8 点生命。消耗。','恢复 12 点生命。消耗。']},
 echo:{name:'镜中月',type:'skill',rarity:'史诗',cost:0,icon:'eclipse',art:19,exhaust:true,text:['月辉层数翻倍。消耗。','获得 2 层月辉，然后月辉层数翻倍。消耗。']},
 eclipse:{name:'月蚀降临',type:'power',rarity:'史诗',cost:2,icon:'eclipse',art:20,text:['每打出一张攻击牌，获得 1 层月辉和 2 点格挡。','每打出一张攻击牌，获得 2 层月辉和 3 点格挡。']},
 barrier:{name:'不破圣域',type:'skill',rarity:'普通',cost:2,icon:'shield',art:21,block:[18,25],text:['获得 18 点格挡。','获得 25 点格挡。']},
 comet:{name:'追光',type:'attack',rarity:'稀有',cost:2,icon:'zap',art:22,damage:[12,17],moon:[2,3],text:['造成 12 点伤害。获得 1 点能量与 2 层月辉。','造成 17 点伤害。获得 1 点能量与 3 层月辉。']},
 resolve:{name:'静水流深',type:'skill',rarity:'稀有',cost:1,icon:'waves',art:23,text:['每层月辉获得 3 点格挡。月辉不消耗。','每层月辉获得 4 点格挡。月辉不消耗。']},
 nova:{name:'天穹碎光',type:'attack',rarity:'史诗',cost:3,icon:'star',art:24,damage:[36,48],exhaust:true,text:['造成 36 点伤害。消耗。','造成 48 点伤害。消耗。']},
 curse:{name:'旧日梦魇',type:'curse',rarity:'诅咒',cost:99,icon:'skull',art:25,text:['无法打出。回合结束时若在手中，失去 2 点生命。','无法打出。回合结束时若在手中，失去 2 点生命。']},
};
export const RELICS: Record<string,{name:string;icon:string;desc:string}> = {
 pendant:{name:'月之吊坠',icon:'moon',desc:'每场战斗开始时，获得 2 层月辉。'},
 feather:{name:'白鸦之羽',icon:'feather',desc:'每场战斗第一回合额外抽 2 张牌。'},
 ruby:{name:'赤心琥珀',icon:'gem',desc:'最大生命增加 12，获得时恢复 12 点生命。'},
 bell:{name:'无声铃',icon:'bell',desc:'每次结束回合时，获得 1 层月辉。'},
 whetstone:{name:'断剑铭文',icon:'swords',desc:'每场战斗开始时，获得 1 点力量。'},
 amber:{name:'晨曦结晶',icon:'sun',desc:'每场战斗第一回合获得 10 点格挡。'},
 rose:{name:'不凋蔷薇',icon:'flower',desc:'每次战斗胜利后，恢复 4 点生命。'},
 compass:{name:'旅人的罗盘',icon:'compass',desc:'战斗获得的金币增加 25%。'},
 hourglass:{name:'流光沙漏',icon:'hourglass',desc:'每场战斗第一回合额外获得 1 点能量。'},
 crown:{name:'空月之冠',icon:'crown',desc:'每回合额外获得 1 点能量，但少抽 1 张牌。'},
 mirror:{name:'碎银之镜',icon:'eye',desc:'每场战斗开始时，对所有敌人施加 1 回合虚弱。'},
 thread:{name:'命运丝线',icon:'sparkles',desc:'每打出一张技能牌，额外获得 2 点格挡。'},
};
export type Intent = { kind:'attack'|'guard'|'buff'|'debuff'|'multi'; value:number; hits?:number; label:string };
export type FoeDef = {name:string;subtitle:string;hp:number;hue:number;pattern:Intent[]};
export const FOES:Record<string,FoeDef> = {
 sentinel:{name:'荆棘守卫',subtitle:'遗忘的誓言',hp:40,hue:0,pattern:[{kind:'attack',value:7,label:'荆棘斩击'},{kind:'guard',value:7,label:'荆棘之盾'},{kind:'attack',value:11,label:'破誓重击'}]},
 wraith:{name:'失声歌姬',subtitle:'回声中的幽影',hp:31,hue:35,pattern:[{kind:'debuff',value:1,label:'哀歌 · 虚弱'},{kind:'attack',value:9,label:'灵魂回响'},{kind:'multi',value:4,hits:2,label:'双重奏'}]},
 raven:{name:'黑羽使徒',subtitle:'月神的弃子',hp:33,hue:-40,pattern:[{kind:'multi',value:3,hits:2,label:'黑羽连斩'},{kind:'buff',value:2,label:'渴血'},{kind:'attack',value:9,label:'噬月'}]},
 duelist:{name:'蔷薇剑姬',subtitle:'不可触及的玫瑰',hp:49,hue:320,pattern:[{kind:'attack',value:10,label:'蔷薇突刺'},{kind:'guard',value:11,label:'剑舞架势'},{kind:'multi',value:6,hits:2,label:'双刃回旋'}]},
 oracle:{name:'盲眼先知',subtitle:'不应被看见的未来',hp:44,hue:70,pattern:[{kind:'debuff',value:2,label:'命运缠绕'},{kind:'attack',value:16,label:'星陨'},{kind:'buff',value:3,label:'禁忌预言'}]},
 reaper:{name:'收魂女爵',subtitle:'午夜的来客',hp:53,hue:180,pattern:[{kind:'attack',value:12,label:'收割'},{kind:'multi',value:5,hits:3,label:'死亡之舞'},{kind:'guard',value:12,label:'幽冥庇护'}]},
 seraph:{name:'折翼天使',subtitle:'光芒尽头的阴影',hp:66,hue:100,pattern:[{kind:'attack',value:15,label:'裁决之刃'},{kind:'debuff',value:2,label:'罪罚'},{kind:'multi',value:7,hits:3,label:'破碎羽翼'}]},
 witch:{name:'镜月魔女',subtitle:'你的倒影在微笑',hp:59,hue:245,pattern:[{kind:'guard',value:16,label:'幻月屏障'},{kind:'buff',value:3,label:'镜像增幅'},{kind:'attack',value:20,label:'月镜破碎'}]},
 elite:{name:'无名处刑者',subtitle:'精英 · 门扉的守望者',hp:76,hue:300,pattern:[{kind:'buff',value:2,label:'杀意觉醒'},{kind:'multi',value:6,hits:2,label:'处刑连斩'},{kind:'attack',value:17,label:'断罪'}]},
 boss0:{name:'缄默圣女 · 伊芙',subtitle:'第一幕首领 · 永远不会响起的钟声',hp:115,hue:25,pattern:[{kind:'attack',value:11,label:'寂静裁决'},{kind:'guard',value:13,label:'圣堂之佑'},{kind:'multi',value:6,hits:3,label:'三重祷告'},{kind:'buff',value:3,label:'黑色福音'}]},
 boss1:{name:'镜之女王 · 赛琳',subtitle:'第二幕首领 · 万千倒影，唯独没有灵魂',hp:160,hue:180,pattern:[{kind:'multi',value:6,hits:2,label:'镜影双生'},{kind:'debuff',value:2,label:'心之裂痕'},{kind:'attack',value:24,label:'破镜之刑'},{kind:'guard',value:20,label:'水银王座'}]},
 boss2:{name:'蚀月神姬 · 诺克丝',subtitle:'终幕首领 · 以黑夜为冠冕',hp:210,hue:285,pattern:[{kind:'attack',value:18,label:'月蚀之刃'},{kind:'buff',value:3,label:'永夜加冕'},{kind:'multi',value:7,hits:3,label:'星辰湮灭'},{kind:'guard',value:22,label:'无光之域'},{kind:'attack',value:30,label:'终焉'}]},
};
export const CHAPTERS = [
 {name:'遗忘庭院',en:'THE FORGOTTEN COURTYARD',title:'寂静之中，拔剑。',story:'月光穿过破碎的穹顶。守卫仍在等待一个永远不会归来的人。',color:'#80cbbd'},
 {name:'镜中回廊',en:'THE HALL OF REFLECTIONS',title:'倒影，也会说谎。',story:'无数个你站在镜子里。只有一个，还记得为何而来。',color:'#a6a1dc'},
 {name:'永夜王座',en:'THE THRONE OF ETERNAL NIGHT',title:'让长夜，终于破晓。',story:'最后一轮月亮正在熄灭。你的剑，是黎明仅存的回声。',color:'#d99cba'},
];
export const NODE_LABELS:Record<string,string>={combat:'战斗',elite:'精英',camp:'营火',shop:'商店',event:'未知事件',chest:'宝藏',boss:'首领'};
export const KEYWORDS = [
 ['月辉','本场战斗中保留。弦月斩等卡牌可以积累月辉；月华一闪、终夜轮舞会消耗所有月辉，造成额外伤害。'],
 ['格挡','优先抵消伤害。在你下个回合开始时清零。敌人的格挡会在它行动前清零。'],
 ['力量','每次攻击的伤害增加对应数值，多段攻击每段都生效。'],
 ['易伤','受到的攻击伤害增加 50%，小数向下取整。'],
 ['虚弱','造成的攻击伤害降低 25%，小数向下取整。'],
 ['中毒','敌人行动前直接失去对应生命，无视格挡；之后减少 1 层。'],
 ['消耗','打出后移入消耗堆，本场战斗不再抽到。永久牌组不会失去这张牌。'],
 ['能力','打出后本场战斗持续生效，然后移入消耗堆。'],
];
