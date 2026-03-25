const fs = require('fs');

const extraSentences = [
  { en: "Where is the audio guide return desk?", ko: "오디오 가이드 반납처가 어디인가요?", tip: "다 쓴 오디오 가이드를 반납할 곳을 찾을 때 묻습니다." },
  { en: "Is it allowed to record videos?", ko: "동영상 촬영이 허용되나요?", tip: "동영상 촬영 가능 여부를 확인할 때 씁니다." },
  { en: "Can we join the tour halfway?", ko: "중간에 투어에 합류할 수 있나요?", tip: "이미 시작된 투어에 늦게 참여할 수 있는지 물어볼 때 사용합니다." },
  { en: "Where can I get a stamp for the passport?", ko: "여권에 스탬프를 어디서 찍을 수 있나요?", tip: "기념 스탬프를 찍는 곳을 찾을 때 씁니다." },
  { en: "Is there a fast-track lane?", ko: "빠른 입장 줄이 있나요?", tip: "대기 시간을 줄일 수 있는 패스트트랙이 있는지 물어볼 때 사용합니다." },
  { en: "We would like to hire a private guide.", ko: "개인 가이드를 고용하고 싶습니다.", tip: "일행만을 위한 전담 가이드를 요청할 때 씁니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

let addedSentences = 0;
for (const sentence of extraSentences) {
  const exists = sentencesData.sightseeing.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.sightseeing.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} extra sentences to sightseeing category.`);

const dictKeys = new Set(Object.keys(dictionaryData).map(k => k.toLowerCase()));
const missingWords = new Set();

const stopWords = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'to', 'of', 'and', 'in', 'that', 'have', 'has', 'had', 'do', 'does', 'did', 'for', 'on', 'with', 'as', 'at', 'by', 'this', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'me', 'him', 'us', 'them']);

sentencesData.sightseeing.forEach(s => {
  const words = s.en.toLowerCase().replace(/[^a-z0-9\s-']/g, '').split(/\s+/);
  words.forEach(w => {
    if (w && !dictKeys.has(w) && !stopWords.has(w) && isNaN(w)) {
      missingWords.add(w);
    }
  });
});

console.log(JSON.stringify(Array.from(missingWords)));
