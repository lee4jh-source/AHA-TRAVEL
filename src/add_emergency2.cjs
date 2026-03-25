const fs = require('fs');

const newSentences = [
  { en: "I need to report a missing person.", ko: "실종 신고를 해야 해요.", tip: "사람이 없어졌을 때 경찰에 신고합니다." },
  { en: "My child is choking.", ko: "제 아이가 목에 뭔가가 걸렸어요.", tip: "기도가 막혔을 때 응급처치를 요청합니다." },
  { en: "I've been bitten by a snake.", ko: "뱀에게 물렸어요.", tip: "독사 등 뱀에게 물렸을 때 구조대에 알립니다." },
  { en: "There's a leak in the ceiling.", ko: "천장에서 물이 새고 있어요.", tip: "호텔이나 숙소에서 누수가 발생했을 때 알립니다." },
  { en: "I locked my keys in the car.", ko: "차 안에 열쇠를 두고 문을 잠갔어요.", tip: "차 문이 잠겨 열 수 없을 때 도움을 청합니다." },
  { en: "My battery is dead.", ko: "배터리가 방전되었어요.", tip: "차량 배터리가 방전되어 시동이 안 걸릴 때 씁니다." },
  { en: "I need a jump start.", ko: "점프 스타트가 필요해요.", tip: "방전된 차에 시동을 걸기 위해 도움을 요청합니다." },
  { en: "I'm having a severe allergic reaction.", ko: "심한 알레르기 반응이 오고 있어요.", tip: "아나필락시스 등 심각한 알레르기 증상을 알립니다." },
  { en: "Do you have an EpiPen?", ko: "에피펜(알레르기 응급 주사) 있나요?", tip: "알레르기 응급 상황에서 약을 찾을 때 묻습니다." },
  { en: "I think I have food poisoning.", ko: "식중독에 걸린 것 같아요.", tip: "음식을 먹고 심하게 아플 때 증상을 말합니다." },
  { en: "I've lost my prescription.", ko: "처방전을 잃어버렸어요.", tip: "약을 사야 하는데 처방전이 없을 때 의사나 약사에게 말합니다." },
  { en: "I need to see a dentist urgently.", ko: "급히 치과 의사를 만나야 해요.", tip: "치통이 심하거나 치아가 부러졌을 때 씁니다." },
  { en: "My tooth is broken.", ko: "이빨이 부러졌어요.", tip: "치아 손상을 치과에 알릴 때 사용합니다." },
  { en: "I've been in a hit-and-run.", ko: "뺑소니 사고를 당했어요.", tip: "뺑소니 피해를 입었을 때 경찰에 신고합니다." },
  { en: "I need to block my bank account.", ko: "제 은행 계좌를 정지해야 해요.", tip: "금융 사기나 카드 도난 시 은행에 요청합니다." },
  { en: "Someone is trying to break in.", ko: "누군가 침입하려고 해요.", tip: "집이나 방에 누군가 들어오려 할 때 경찰에 신고합니다." },
  { en: "I hear gunshots.", ko: "총소리가 들려요.", tip: "총격 사건이 의심될 때 경찰에 알립니다." },
  { en: "There is a suspicious package here.", ko: "여기에 수상한 소포가 있어요.", tip: "테러나 폭발물이 의심되는 물건을 발견했을 때 신고합니다." },
  { en: "I need to contact my family.", ko: "가족에게 연락해야 해요.", tip: "응급 상황에서 가족에게 상황을 알리기 위해 도움을 청합니다." },
  { en: "Can you call this number for me?", ko: "이 번호로 대신 전화해 주실 수 있나요?", tip: "직접 전화하기 힘들 때 주변에 부탁합니다." }
];

const newWords = {
  "missing": { en: "missing", ko: "실종된, 없어진", type: "adjective" },
  "person": { en: "person", ko: "사람", type: "noun" },
  "choking": { en: "choking", ko: "질식하는, 숨이 막히는", type: "adjective" },
  "snake": { en: "snake", ko: "뱀", type: "noun" },
  "leak": { en: "leak", ko: "새는 곳, 누수", type: "noun" },
  "ceiling": { en: "ceiling", ko: "천장", type: "noun" },
  "battery": { en: "battery", ko: "배터리", type: "noun" },
  "dead": { en: "dead", ko: "방전된, 죽은", type: "adjective" },
  "jump": { en: "jump", ko: "뛰어오르다, 점프", type: "noun" },
  "start": { en: "start", ko: "시작, 시동", type: "noun" },
  "reaction": { en: "reaction", ko: "반응", type: "noun" },
  "prescription": { en: "prescription", ko: "처방전", type: "noun" },
  "dentist": { en: "dentist", ko: "치과 의사", type: "noun" },
  "urgently": { en: "urgently", ko: "긴급히", type: "adverb" },
  "tooth": { en: "tooth", ko: "치아, 이빨", type: "noun" },
  "broken": { en: "broken", ko: "부러진", type: "adjective" },
  "hit-and-run": { en: "hit-and-run", ko: "뺑소니", type: "noun" },
  "block": { en: "block", ko: "정지시키다, 막다", type: "verb" },
  "bank": { en: "bank", ko: "은행", type: "noun" },
  "account": { en: "account", ko: "계좌", type: "noun" },
  "break": { en: "break", ko: "부수다, 침입하다", type: "verb" },
  "gunshots": { en: "gunshots", ko: "총소리", type: "noun" },
  "suspicious": { en: "suspicious", ko: "수상한, 의심스러운", type: "adjective" },
  "package": { en: "package", ko: "소포, 꾸러미", type: "noun" },
  "family": { en: "family", ko: "가족", type: "noun" },
  "number": { en: "number", ko: "번호", type: "noun" }
};

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.emergency) {
  sentencesData.emergency = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.emergency.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.emergency.push(sentence);
    addedSentences++;
  }
}

let addedWords = 0;
for (const [word, def] of Object.entries(newWords)) {
  if (!dictionaryData[word]) {
    dictionaryData[word] = def;
    addedWords++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
fs.writeFileSync(dictionaryFile, JSON.stringify(dictionaryData, null, 2));

console.log(`Added ${addedSentences} sentences and ${addedWords} words to emergency category.`);
