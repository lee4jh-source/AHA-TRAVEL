const fs = require('fs');

const missingWords = {
  "afternoon": { en: "afternoon", ko: "오후", type: "noun" },
  "evening": { en: "evening", ko: "저녁", type: "noun" },
  "how's": { en: "how's", ko: "어떻게 (how is)", type: "adverb" },
  "doing": { en: "doing", ko: "하고 있는, 지내는", type: "verb" },
  "thanks": { en: "thanks", ko: "고마워", type: "noun" },
  "bad": { en: "bad", ko: "나쁜", type: "adjective" },
  "vacation": { en: "vacation", ko: "휴가, 방학", type: "noun" },
  "lived": { en: "lived", ko: "살았다", type: "verb" },
  "living": { en: "living", ko: "생활, 생계", type: "noun" },
  "weather": { en: "weather", ko: "날씨", type: "noun" },
  "lovely": { en: "lovely", ko: "사랑스러운, 아주 좋은", type: "adjective" },
  "chilly": { en: "chilly", ko: "쌀쌀한", type: "adjective" },
  "outside": { en: "outside", ko: "밖에, 바깥에", type: "adverb" },
  "rain": { en: "rain", ko: "비, 비가 오다", type: "noun" },
  "outfit": { en: "outfit", ko: "옷차림, 복장", type: "noun" },
  "beautiful": { en: "beautiful", ko: "아름다운", type: "adjective" },
  "enjoying": { en: "enjoying", ko: "즐기고 있는", type: "verb" },
  "that's": { en: "that's", ko: "그것은 ~이다 (that is)", type: "pronoun" },
  "mention": { en: "mention", ko: "언급하다", type: "verb" },
  "pleasure": { en: "pleasure", ko: "기쁨, 즐거움", type: "noun" },
  "bother": { en: "bother", ko: "괴롭히다, 귀찮게 하다", type: "verb" },
  "question": { en: "question", ko: "질문", type: "noun" },
  "apologize": { en: "apologize", ko: "사과하다", type: "verb" },
  "alright": { en: "alright", ko: "괜찮은, 좋은", type: "adjective" },
  "worries": { en: "worries", ko: "걱정들", type: "noun" },
  "pronounce": { en: "pronounce", ko: "발음하다", type: "verb" },
  "translation": { en: "translation", ko: "번역", type: "noun" },
  "app": { en: "app", ko: "앱, 애플리케이션", type: "noun" },
  "customary": { en: "customary", ko: "관례적인, 습관적인", type: "adjective" },
  "eat": { en: "eat", ko: "먹다", type: "verb" },
  "proper": { en: "proper", ko: "적절한, 올바른", type: "adjective" },
  "greeting": { en: "greeting", ko: "인사", type: "noun" },
  "bow": { en: "bow", ko: "절하다, 고개를 숙이다", type: "verb" },
  "shake": { en: "shake", ko: "흔들다", type: "verb" },
  "hands": { en: "hands", ko: "손들 (악수)", type: "noun" },
  "cultural": { en: "cultural", ko: "문화적인", type: "adjective" },
  "taboos": { en: "taboos", ko: "금기들", type: "noun" },
  "polite": { en: "polite", ko: "예의 바른", type: "adjective" },
  "slurp": { en: "slurp", ko: "소리 내어 먹다", type: "verb" },
  "noodles": { en: "noodles", ko: "국수, 면", type: "noun" },
  "rude": { en: "rude", ko: "무례한", type: "adjective" },
  "forgive": { en: "forgive", ko: "용서하다", type: "verb" },
  "ignorance": { en: "ignorance", ko: "무지, 모름", type: "noun" },
  "interesting": { en: "interesting", ko: "흥미로운", type: "adjective" },
  "usually": { en: "usually", ko: "보통, 대개", type: "adverb" },
  "elders": { en: "elders", ko: "어른들, 연장자들", type: "noun" },
  "coincidence": { en: "coincidence", ko: "우연의 일치", type: "noun" },
  "happy": { en: "happy", ko: "행복한, 기쁜", type: "adjective" },
  "sounds": { en: "sounds", ko: "소리가 나다, ~처럼 들리다", type: "verb" },
  "fun": { en: "fun", ko: "재미, 즐거움", type: "noun" },
  "confused": { en: "confused", ko: "혼란스러운", type: "adjective" },
  "surprised": { en: "surprised", ko: "놀란", type: "adjective" },
  "unbelievable": { en: "unbelievable", ko: "믿을 수 없는", type: "adjective" },
  "completely": { en: "completely", ko: "완전히", type: "adverb" },
  "agree": { en: "agree", ko: "동의하다", type: "verb" },
  "sure": { en: "sure", ko: "확신하는, 물론", type: "adjective" },
  "politely": { en: "politely", ko: "정중하게", type: "adverb" },
  "disagree": { en: "disagree", ko: "동의하지 않다", type: "verb" },
  "maybe": { en: "maybe", ko: "아마도", type: "adverb" },
  "plans": { en: "plans", ko: "계획들, 선약", type: "noun" },
  "invitation": { en: "invitation", ko: "초대", type: "noun" },
  "instagram": { en: "Instagram", ko: "인스타그램", type: "noun" },
  "talking": { en: "talking", ko: "이야기하는 것", type: "noun" },
  "care": { en: "care", ko: "돌봄, 주의", type: "noun" },
  "goodbye": { en: "goodbye", ko: "안녕, 작별", type: "noun" },
  "cheers": { en: "cheers", ko: "건배, 고마워요", type: "noun" },
  "bless": { en: "bless", ko: "축복하다", type: "verb" },
  "congratulations": { en: "congratulations", ko: "축하합니다", type: "noun" },
  "birthday": { en: "birthday", ko: "생일", type: "noun" },
  "merry": { en: "merry", ko: "즐거운", type: "adjective" },
  "christmas": { en: "Christmas", ko: "크리스마스", type: "noun" },
  "luck": { en: "luck", ko: "행운", type: "noun" },
  "bon": { en: "bon", ko: "좋은 (프랑스어)", type: "adjective" },
  "appetit": { en: "appetit", ko: "식욕 (프랑스어)", type: "noun" },
  "yourself": { en: "yourself", ko: "너 자신", type: "pronoun" },
  "forward": { en: "forward", ko: "앞으로", type: "adverb" },
  "favor": { en: "favor", ko: "호의, 부탁", type: "noun" },
  "used": { en: "used", ko: "익숙한, 사용된", type: "adjective" }
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
