const GAME_STATES = ["splash", "game", "result"];

// 情境：遙遠的寄宿學校「機械與魔法學院」人才輩出，很多學生都渴望於這間學校內學習世上最頂尖的新技術和學說。你因成績優異，獲得了機械與魔法學院一年交換生計劃的資格。
// 今天是新學期的開始，你站在校園門口，看起來有點興奮，又有點緊張。

const QUESTIONS = [
  {
    question:
      "新學期開始了！作為機械與魔法學院一年交換生計劃的參加者，你對這學年有甚麼想法？",
    answers: [
      "不管是師生或是知識，我全都要認識",
      "真想親眼見識校舍生成新設施的過程",
      "朋友說想一起參加學會活動，看一下",
      "按照課綱學習就可以安全畢業了對吧",
    ],
    answerScores: [
      { active: 2 },
      { active: 1 },
      { passive: 1 },
      { passive: 2 },
    ],
    situation_1: "background-castle",
  },
  {
    question:
      "上課一個月後，導師告訴你們可以用個人或團體為單位完成一個研習課題，你會怎樣選擇？",
    answers: [
      "只要資源沒有限制，當然是一人軍隊",
      "我想測試自己的極限，必要時才求救",
      "想與朋友一起討論、學習，完成課題",
      "團體！！沒隊友的話我絕對會孤獨死",
    ],
    answerScores: [
      { independent: 2 },
      { independent: 1 },
      { collaborative: 1 },
      { collaborative: 2 },
    ],
    situation_1: "character-ledwizard",
    situation_background: "background-castle",
  },
  {
    question:
      "決定研習方向後，你努力構思研習課題，但始終遇到了技術樽頸。這時候你會怎樣做？",
    answers: [
      "這可是我最喜歡的領域，三日內攻略",
      "把這個機械系統擬人化應該會更好懂",
      "來試試施放這難解的魔法到水蜜桃上",
      "先理清底層原理，一邊實驗一邊學習",
    ],
    answerScores: [
      { emotional: 2 },
      { emotional: 1 },
      { logical: 1 },
      { logical: 2 },
    ],
    situation_1: "background-craftingstation",
    situation_background: "background-bedroom",
  },
  {
    question:
      "經過漫長的九個月，你終於完成了交換生計劃的研習課題。在展示會上，你拿出了怎樣的作品？",
    answers: [
      "無縫自動貼合任何型號的防水手機殼",
      "以透明防曬防彈魔法布料製成的雨傘",
      "附有打火石及遙控發聲功能的鑰匙包",
      "能減輕任何病痛半成症狀的複合藥丸",
    ],
    answerScores: [
      { specialized: 2 },
      { specialized: 1 },
      { melded: 1 },
      { melded: 2 },
    ],
    situation_1: "character-ledredchan",
    situation_2: "character-ledgreenchan",
    situation_background: "background-castle",
  },
];
