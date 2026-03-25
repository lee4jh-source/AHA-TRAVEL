const fs = require('fs');

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

// Add the 100th sentence for navigation
const extraSentence = {
  en: "Can you draw me a map?",
  ko: "지도를 그려주실 수 있나요?",
  tip: "길을 말로 설명하기 어려울 때 지도를 그려달라고 부탁할 때 씁니다."
};

const exists = sentencesData.navigation.some(s => s.en === extraSentence.en);
if (!exists) {
  sentencesData.navigation.push(extraSentence);
  console.log("Added the 100th sentence to navigation.");
}

const missingWords = {
  "kids'": { en: "kids'", ko: "아이들의", type: "noun" },
  "saw": { en: "saw", ko: "보았다 (see의 과거형)", type: "verb" },
  "having": { en: "having", ko: "가지는 것, 하고 있는", type: "verb" },
  "cpr": { en: "CPR", ko: "심폐소생술", type: "noun" },
  "something": { en: "something", ko: "무언가", type: "pronoun" },
  "you're": { en: "you're", ko: "당신은 ~이다 (you are)", type: "pronoun" },
  "went": { en: "went", ko: "갔다 (go의 과거형)", type: "verb" },
  "there's": { en: "there's", ko: "~이 있다 (there is)", type: "pronoun" },
  "keys": { en: "keys", ko: "열쇠들", type: "noun" },
  "epipen": { en: "EpiPen", ko: "에피펜 (알레르기 응급 주사기)", type: "noun" },
  "trying": { en: "trying", ko: "시도하는, 노력하는", type: "verb" },
  "hear": { en: "hear", ko: "듣다", type: "verb" },
  "hurt": { en: "hurt", ko: "다치다, 아프다", type: "verb" },
  "band-aid": { en: "Band-Aid", ko: "반창고", type: "noun" },
  "dr": { en: "Dr.", ko: "의사 (Doctor)", type: "noun" },
  "smith": { en: "Smith", ko: "스미스 (이름)", type: "noun" },
  "foreign": { en: "foreign", ko: "외국의", type: "adjective" },
  "health": { en: "health", ko: "건강", type: "noun" },
  "seems": { en: "seems", ko: "~인 것 같다", type: "verb" },
  "today": { en: "today", ko: "오늘", type: "noun" },
  "badly": { en: "badly", ko: "심하게, 나쁘게", type: "adverb" },
  "feeling": { en: "feeling", ko: "느낌, 기분", type: "noun" },
  "morning": { en: "morning", ko: "아침", type: "noun" },
  "nose": { en: "nose", ko: "코", type: "noun" },
  "eyes": { en: "eyes", ko: "눈", type: "noun" },
  "loss": { en: "loss", ko: "상실, 잃음", type: "noun" },
  "getting": { en: "getting", ko: "얻는, ~하게 되는", type: "verb" },
  "ago": { en: "ago", ko: "전에", type: "adverb" },
  "took": { en: "took", ko: "가져갔다, 취했다 (take의 과거형)", type: "verb" },
  "yesterday": { en: "yesterday", ko: "어제", type: "noun" },
  "medications": { en: "medications", ko: "약물, 투약", type: "noun" },
  "known": { en: "known", ko: "알려진", type: "adjective" },
  "taking": { en: "taking", ko: "가져가는, 복용하는", type: "verb" },
  "months": { en: "months", ko: "달, 개월", type: "noun" },
  "ah": { en: "ah", ko: "아 (감탄사)", type: "interjection" },
  "deep": { en: "deep", ko: "깊은", type: "adjective" },
  "x-ray": { en: "X-ray", ko: "엑스레이", type: "noun" },
  "looks": { en: "looks", ko: "보인다", type: "verb" },
  "going": { en: "going", ko: "가는 중인", type: "verb" },
  "doesn't": { en: "doesn't", ko: "~하지 않다 (does not)", type: "verb" },
  "times": { en: "times", ko: "시간들, 번, 배", type: "noun" },
  "thirty": { en: "thirty", ko: "30", type: "number" },
  "ten-year-old": { en: "ten-year-old", ko: "10살의", type: "adjective" },
  "c": { en: "C", ko: "C (알파벳)", type: "noun" },
  "remember": { en: "remember", ko: "기억하다", type: "verb" },
  "gone": { en: "gone", ko: "사라진, 떠난", type: "adjective" },
  "id": { en: "ID", ko: "신분증", type: "noun" },
  "hundred": { en: "hundred", ko: "100", type: "number" },
  "samsonite": { en: "Samsonite", ko: "샘소나이트 (브랜드명)", type: "noun" },
  "towards": { en: "towards", ko: "~을 향하여", type: "preposition" },
  "else": { en: "else", ko: "다른", type: "adjective" },
  "seen": { en: "seen", ko: "보여진 (see의 과거분사)", type: "verb" },
  "reach": { en: "reach", ko: "도달하다", type: "verb" },
  "grand": { en: "grand", ko: "웅장한, 그랜드", type: "adjective" },
  "plaza": { en: "plaza", ko: "광장, 플라자", type: "noun" },
  "already": { en: "already", ko: "이미", type: "adverb" },
  "canceled": { en: "canceled", ko: "취소된", type: "adjective" },
  "provide": { en: "provide", ko: "제공하다", type: "verb" },
  "men": { en: "men", ko: "남자들", type: "noun" },
  "felt": { en: "felt", ko: "느꼈다 (feel의 과거형)", type: "verb" },
  "someone's": { en: "someone's", ko: "누군가의", type: "pronoun" },
  "came": { en: "came", ko: "왔다 (come의 과거형)", type: "verb" },
  "macbook": { en: "MacBook", ko: "맥북", type: "noun" },
  "pro": { en: "Pro", ko: "프로", type: "noun" },
  "camera": { en: "camera", ko: "카메라", type: "noun" },
  "asked": { en: "asked", ko: "물었다 (ask의 과거형)", type: "verb" },
  "using": { en: "using", ko: "사용하는", type: "verb" },
  "gps": { en: "GPS", ko: "GPS", type: "noun" },
  "shows": { en: "shows", ko: "보여주다", type: "verb" },
  "brown": { en: "brown", ko: "갈색", type: "noun" },
  "somewhere": { en: "somewhere", ko: "어딘가에", type: "adverb" },
  "told": { en: "told", ko: "말했다 (tell의 과거형)", type: "verb" },
  "read": { en: "read", ko: "읽다", type: "verb" },
  "yes": { en: "yes", ko: "네", type: "interjection" },
  "couldn't": { en: "couldn't", ko: "~할 수 없었다 (could not)", type: "verb" },
  "landmark": { en: "landmark", ko: "랜드마크, 주요 지형지물", type: "noun" },
  "past": { en: "past", ko: "지나서, 과거의", type: "preposition" },
  "supermarket": { en: "supermarket", ko: "슈퍼마켓", type: "noun" },
  "cross": { en: "cross", ko: "건너다", type: "verb" },
  "directions": { en: "directions", ko: "길 안내, 방향", type: "noun" },
  "you've": { en: "you've", ko: "당신은 ~했다 (you have)", type: "pronoun" },
  "flash": { en: "flash", ko: "플래시, 번쩍임", type: "noun" },
  "famous": { en: "famous", ko: "유명한", type: "adjective" },
  "attraction": { en: "attraction", ko: "명소, 매력", type: "noun" },
  "support": { en: "support", ko: "지원하다", type: "verb" },
  "5g": { en: "5G", ko: "5G", type: "noun" },
  "remaining": { en: "remaining", ko: "남아있는", type: "adjective" },
  "micro": { en: "micro", ko: "마이크로", type: "adjective" },
  "documents": { en: "documents", ko: "문서들", type: "noun" },
  "overseas": { en: "overseas", ko: "해외의", type: "adjective" },
  "forgot": { en: "forgot", ko: "잊었다 (forget의 과거형)", type: "verb" },
  "pin": { en: "PIN", ko: "비밀번호 (PIN)", type: "noun" },
  "south": { en: "south", ko: "남쪽", type: "noun" },
  "korea": { en: "Korea", ko: "한국", type: "noun" },
  "later": { en: "later", ko: "나중에", type: "adverb" },
  "casino": { en: "casino", ko: "카지노", type: "noun" },
  "laundry": { en: "laundry", ko: "세탁", type: "noun" },
  "schedule": { en: "schedule", ko: "일정", type: "noun" },
  "today's": { en: "today's", ko: "오늘의", type: "noun" },
  "activities": { en: "activities", ko: "활동들", type: "noun" },
  "customer": { en: "customer", ko: "고객", type: "noun" },
  "draw": { en: "draw", ko: "그리다", type: "verb" }
};

let addedWords = 0;
for (const [word, def] of Object.entries(missingWords)) {
  const lowerWord = word.toLowerCase();
  if (!dictionaryData[lowerWord]) {
    dictionaryData[lowerWord] = def;
    addedWords++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
fs.writeFileSync(dictionaryFile, JSON.stringify(dictionaryData, null, 2));

console.log(`Added ${addedWords} missing words to dictionary.`);
