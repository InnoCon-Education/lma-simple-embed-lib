const GAME_TITLE = "學習色相測試";
const GAME_SUBTITLE = "分析你的學習模式";
const GAME_NOTICES = [
  "你在學習時，曾否有過「明明已經很努力了，但成績還是不理想」的經歷？",
  "很多人都不清楚自己的學習傾向，而使用了不適合自己的學習方式，結果事倍功半。",
  "這個測試旨在幫助你探索自己的學習傾向，並提供適合你的學習方式。",
  "在遊戲中，你將會遇到不同的學習情境，請選擇最接近你想法的答案。",
  "遊戲結束後，你將會得到一份學習傾向報告，了解自己的學習傾向。",
  "為使我們的分析更準確，我們會匿名收集你的學習傾向，請放心填寫。",
];
const SPLASH_BUTTON_TEXT = "開始";
const GAME_SCENARIOS = [
  "遙遠的寄宿學校「機械與魔法學院」人才輩出，很多學生都渴望於這間學校內學習世上最頂尖的新技術和學說。",
  "你因成績優異，獲得了機械與魔法學院一年交換生計劃的資格。",
  "今天是新學期的開始，你站在校園門口，看起來有點興奮，又有點緊張……",
];

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
      "改良現存設計的單項技術缺陷，完美",
      "改善現有系統的性能，再埋一點彩蛋",
      "融合幾個類似技術，再修復一些漏洞",
      "將鬼點子全部融合！有空再修正錯誤",
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

const RESULTS = {
  aies: {
    description: "主動|獨立|感性|專精",
    title: "孤詣者",
    motto: "「別吵我，我只想一個人把這東西鑽研到最完美。」",
    subjects: "純藝術｜文學創作｜考古學",
    jobs: "工藝創作｜文物鑑修",
    friend: "PCRM|博納者"
  },
  aiem: {
    description: "主動|獨立|感性|融會",
    title: "遠見者",
    motto: "「雖然還沒人信，但我直覺這幾件事一定有關連，我想試試看。」",
    subjects: "哲學｜宗教學｜未來學",
    jobs: "概念設計｜自媒體",
    friend: "PCRS|聆聽者"
  },
  airs: {
    description: "主動|獨立|理性|專精",
    title: "深究者",
    motto: "「先別急著動手，讓我自己把背後的邏輯徹底搞懂再說。」",
    subjects: "純數學｜資訊科學｜理論物理",
    jobs: "數據科學｜後端程式開發",
    friend: "PCEM|調和者"
  },
  airm: {
    description: "主動|獨立|理性|融會",
    title: "建構者",
    motto: "「我要把這些散亂的資訊，重新組建成一套完整的系統架構。」",
    subjects: "建築學｜系統工程｜經濟學",
    jobs: "系統架構師｜都市策劃",
    friend: "PCES|體驗者"
  },
  aces: {
    description: "主動|互動|感性|專精",
    title: "演繹者",
    motto: "「大家看我這邊！我剛練成的這一招真的超有感覺的！」",
    subjects: "表演藝術｜體育科學｜幼兒教育",
    jobs: "演藝人員｜業務代表",
    friend: "PIRM|剖析者"
  },
  acem: {
    description: "主動|互動|感性|融會",
    title: "號召者",
    motto: "「嘿！我們把大家找來，一起激盪出更好玩的點子吧！」",
    subjects: "社會學｜市場行銷｜政治學",
    jobs: "社群經營｜活動策劃",
    friend: "PIRS|旁觀者"
  },
  acrs: {
    description: "主動|互動|理性|專精",
    title: "辯證者",
    motto: "「等一下，這個論點有漏洞，我們來討論清楚證據在哪裡？」",
    subjects: "法律｜刑事司法｜辯論與修辭",
    jobs: "訴訟代理｜調查記者",
    friend: "PIEM|沈思者"
  },
  acrm: {
    description: "主動|互動|理性|融會",
    title: "統籌者",
    motto: "「好，大家集合！我們統整一下手上的資源，規劃下一步怎麼走。」",
    subjects: "企業管理｜國際關係｜工業工程",
    jobs: "專案經理｜創業家",
    friend: "PIES|鑑賞者"
  },
  pies: {
    description: "被動|獨立|感性|專精",
    title: "鑑賞者",
    motto: "「這細節真美……就讓我靜靜地欣賞、品味一會兒吧。」",
    subjects: "藝術史｜圖書資訊學｜園藝學",
    jobs: "博物管理｜測試人員",
    friend: "ACRM|統籌者"
  },
  piem: {
    description: "被動|獨立|感性|融會",
    title: "沈思者",
    motto: "「我在想……剛剛看到的這一切，感覺起來好像都在我腦中融合了。」",
    subjects: "心理學｜人類學｜比較文學",
    jobs: "心理治療師｜使用者體驗研究",
    friend: "ACRS|辯證者"
  },
  pirs: {
    description: "被動|獨立|理性|專精",
    title: "旁觀者",
    motto: "「我就在旁邊看看，確認它是不是照著原本的原理在跑。」",
    subjects: "會計學｜統計學｜藥學",
    jobs: "審計師｜實驗室研究",
    friend: "ACEM|號召者"
  },
  pirm: {
    description: "被動|獨立|理性|融會",
    title: "剖析者",
    motto: "「給我點時間獨處，我要把剛接收到的這些龐大資訊冷靜分析一下。」",
    subjects: "歷史學｜地理學｜資訊管理",
    jobs: "市場分析師｜技術專家",
    friend: "ACES|演繹者"
  },
  pces: {
    description: "被動|互動|感性|專精",
    title: "體驗者",
    motto: "「帶我一起做！感覺跟著大家動手體驗看看挺好玩的。」",
    subjects: "護理學｜餐旅管理｜烹飪藝術",
    jobs: "客戶服務｜護理師",
    friend: "AIRM|建構者"
  },
  pcem: {
    description: "被動|互動|感性|融會",
    title: "調和者",
    motto: "「別吵架嘛，我覺得你們說的都有道理，我們可以試著融合看看呀。」",
    subjects: "社會工作｜人力資源｜傳播學",
    jobs: "人力資源｜社會工作者",
    friend: "AIRS|深究者"
  },
  pcrs: {
    description: "被動|互動|理性|專精",
    title: "聆聽者",
    motto: "「專家怎麼說我就怎麼做，跟著標準流程走準沒錯。」",
    subjects: "法律助理｜土木工程｜行政管理",
    jobs: "行政人員｜法務助理",
    friend: "AIEM|遠見者"
  },
  pcrm: {
    description: "被動|互動|理性|融會",
    title: "博納者",
    motto: "「原來還有這種說法？不管是誰的意見，我都先記下來吸收再說。」",
    subjects: "通識教育｜教育學｜新聞學",
    jobs: "行政秘書｜培訓導師",
    friend: "AIES|孤詣者"
  }
}