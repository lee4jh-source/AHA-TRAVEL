const fs = require('fs');

const missingWords = {
  "cruise": { en: "cruise", ko: "크루즈, 유람선", type: "noun" },
  "drop-off": { en: "drop-off", ko: "하차, 맡기는 곳", type: "noun" },
  "stateroom": { en: "stateroom", ko: "특실, 객실", type: "noun" },
  "seven": { en: "seven", ko: "7, 일곱", type: "noun" },
  "delivered": { en: "delivered", ko: "배달된", type: "adjective" },
  "fix": { en: "fix", ko: "고치다, 수리하다", type: "verb" },
  "muster": { en: "muster", ko: "소집, 점호", type: "noun" },
  "attendance": { en: "attendance", ko: "출석, 참석", type: "noun" },
  "mandatory": { en: "mandatory", ko: "의무적인, 필수의", type: "adjective" },
  "all-aboard": { en: "all-aboard", ko: "전원 승선", type: "noun" },
  "visa": { en: "visa", ko: "비자, 사증", type: "noun" },
  "gangway": { en: "gangway", ko: "승하선용 통로", type: "noun" },
  "located": { en: "located", ko: "위치한", type: "adjective" },
  "seating": { en: "seating", ko: "좌석 배정, 식사 시간대", type: "noun" },
  "dinner": { en: "dinner", ko: "저녁 식사", type: "noun" },
  "anytime": { en: "anytime", ko: "언제든지", type: "adverb" },
  "tonight's": { en: "tonight's", ko: "오늘 밤의", type: "adjective" },
  "formal": { en: "formal", ko: "격식을 차린, 정장의", type: "adjective" },
  "beverage": { en: "beverage", ko: "음료", type: "noun" },
  "alcoholic": { en: "alcoholic", ko: "알코올의, 술의", type: "adjective" },
  "theater": { en: "theater", ko: "극장", type: "noun" },
  "reserve": { en: "reserve", ko: "예약하다", type: "verb" },
  "club": { en: "club", ko: "클럽, 동호회", type: "noun" },
  "scheduled": { en: "scheduled", ko: "예정된", type: "adjective" },
  "newsletter": { en: "newsletter", ko: "소식지, 회보", type: "noun" },
  "pools": { en: "pools", ko: "수영장들", type: "noun" },
  "tubs": { en: "tubs", ko: "욕조들", type: "noun" },
  "provided": { en: "provided", ko: "제공된", type: "adjective" },
  "fitness": { en: "fitness", ko: "건강, 피트니스", type: "noun" },
  "running": { en: "running", ko: "달리기", type: "noun" },
  "track": { en: "track", ko: "트랙, 길", type: "noun" },
  "ship's": { en: "ship's", ko: "배의", type: "noun" },
  "guest": { en: "guest", ko: "손님, 투숙객", type: "noun" },
  "services": { en: "services", ko: "서비스들", type: "noun" },
  "onboard": { en: "onboard", ko: "선내의, 탑승한", type: "adjective" },
  "gratuities": { en: "gratuities", ko: "팁, 봉사료", type: "noun" },
  "tips": { en: "tips", ko: "팁들", type: "noun" },
  "automatically": { en: "automatically", ko: "자동으로", type: "adverb" },
  "added": { en: "added", ko: "추가된", type: "adjective" },
  "dispute": { en: "dispute", ko: "이의를 제기하다, 분쟁", type: "verb" },
  "ship": { en: "ship", ko: "배, 선박", type: "noun" },
  "clinic": { en: "clinic", ko: "진료소, 의무실", type: "noun" },
  "duty-free": { en: "duty-free", ko: "면세의", type: "adjective" },
  "shops": { en: "shops", ko: "상점들", type: "noun" },
  "toiletries": { en: "toiletries", ko: "세면도구", type: "noun" },
  "self-service": { en: "self-service", ko: "셀프 서비스", type: "noun" },
  "request": { en: "request", ko: "요청하다", type: "verb" },
  "pillows": { en: "pillows", ko: "베개들", type: "noun" },
  "blankets": { en: "blankets", ko: "담요들", type: "noun" },
  "steward": { en: "steward", ko: "승무원, 객실 담당자", type: "noun" },
  "operate": { en: "operate", ko: "작동하다, 조작하다", type: "verb" },
  "valuables": { en: "valuables", ko: "귀중품", type: "noun" },
  "captain's": { en: "captain's", ko: "선장의", type: "noun" },
  "reception": { en: "reception", ko: "환영회, 리셉션", type: "noun" },
  "gallery": { en: "gallery", ko: "갤러리, 화랑", type: "noun" },
  "art": { en: "art", ko: "예술, 미술", type: "noun" },
  "auctions": { en: "auctions", ko: "경매들", type: "noun" },
  "designated": { en: "designated", ko: "지정된", type: "adjective" },
  "balcony": { en: "balcony", ko: "발코니", type: "noun" },
  "disembarkation": { en: "disembarkation", ko: "하선, 상륙", type: "noun" },
  "briefing": { en: "briefing", ko: "브리핑, 설명회", type: "noun" },
  "tags": { en: "tags", ko: "태그들, 꼬리표들", type: "noun" },
  "disembark": { en: "disembark", ko: "하선하다, 내리다", type: "verb" },
  "self-assist": { en: "self-assist", ko: "셀프 어시스트 (직접 짐 들고 내리기)", type: "noun" },
  "carry": { en: "carry", ko: "나르다, 들고 가다", type: "verb" },
  "due": { en: "due", ko: "~때문에, 기한이 된", type: "adjective" },
  "tender": { en: "tender", ko: "텐더보트, 연락선", type: "noun" },
  "boat": { en: "boat", ko: "보트, 배", type: "noun" },
  "boats": { en: "boats", ko: "보트들", type: "noun" },
  "depart": { en: "depart", ko: "출발하다", type: "verb" },
  "sea": { en: "sea", ko: "바다", type: "noun" },
  "rough": { en: "rough", ko: "거친, 파도가 심한", type: "adjective" },
  "ocean": { en: "ocean", ko: "대양, 바다", type: "noun" },
  "aft": { en: "aft", ko: "선미, 배의 뒤쪽", type: "noun" },
  "adults-only": { en: "adults-only", ko: "성인 전용의", type: "adjective" },
  "cabana": { en: "cabana", ko: "카바나, 방갈로", type: "noun" },
  "nightclub": { en: "nightclub", ko: "나이트클럽", type: "noun" },
  "trivia": { en: "trivia", ko: "상식 퀴즈", type: "noun" },
  "games": { en: "games", ko: "게임들", type: "noun" },
  "participate": { en: "participate", ko: "참여하다", type: "verb" },
  "karaoke": { en: "karaoke", ko: "가라오케, 노래방", type: "noun" },
  "wonderful": { en: "wonderful", ko: "멋진, 훌륭한", type: "adjective" }
};

const dictionaryFile = 'src/dictionary.json';
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

let addedWords = 0;
for (const [word, def] of Object.entries(missingWords)) {
  const lowerWord = word.toLowerCase().replace(/[^a-z0-9-']/g, '');
  if (!dictionaryData[lowerWord]) {
    dictionaryData[lowerWord] = def;
    addedWords++;
  }
}

fs.writeFileSync(dictionaryFile, JSON.stringify(dictionaryData, null, 2));
console.log(`Added ${addedWords} missing words to dictionary.`);
