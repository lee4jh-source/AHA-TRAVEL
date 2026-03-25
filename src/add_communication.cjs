const fs = require('fs');

const newSentences = [
  { en: "Good morning.", ko: "좋은 아침입니다.", tip: "아침에 하는 기본적인 인사입니다." },
  { en: "Good afternoon.", ko: "좋은 오후입니다.", tip: "점심 이후부터 저녁 전까지 하는 인사입니다." },
  { en: "Good evening.", ko: "좋은 저녁입니다.", tip: "저녁에 만났을 때 하는 인사입니다." },
  { en: "How's it going?", ko: "어떻게 지내세요?", tip: "친근하게 안부를 묻는 표현입니다." },
  { en: "What's up?", ko: "별일 없죠?", tip: "친한 사이에서 가볍게 하는 인사입니다." },
  { en: "It's been a while.", ko: "오랜만이네요.", tip: "오랜만에 만난 사람에게 씁니다." },
  { en: "Long time no see.", ko: "오랜만이에요.", tip: "오랫동안 보지 못한 사람에게 친근하게 건네는 인사입니다." },
  { en: "How have you been?", ko: "그동안 어떻게 지내셨어요?", tip: "그간의 안부를 물어볼 때 사용합니다." },
  { en: "I'm doing great, thanks.", ko: "아주 잘 지내고 있어요, 고마워요.", tip: "안부 인사에 긍정적으로 답할 때 씁니다." },
  { en: "Not bad, how about you?", ko: "나쁘지 않아요, 당신은요?", tip: "무난하게 답하며 상대의 안부를 되물을 때 씁니다." },
  { en: "My name is Kim.", ko: "제 이름은 킴입니다.", tip: "자신의 이름을 소개할 때 사용합니다." },
  { en: "I'm from South Korea.", ko: "저는 한국에서 왔어요.", tip: "출신 국가를 말할 때 씁니다." },
  { en: "This is my first time here.", ko: "여기는 처음 와봐요.", tip: "첫 방문임을 알릴 때 사용합니다." },
  { en: "I'm traveling with my family.", ko: "가족과 함께 여행 중이에요.", tip: "동행자를 소개할 때 씁니다." },
  { en: "I'm here on vacation.", ko: "휴가차 이곳에 왔어요.", tip: "방문 목적이 휴가임을 알릴 때 씁니다." },
  { en: "I'm here for a business trip.", ko: "출장으로 왔어요.", tip: "방문 목적이 업무임을 알릴 때 사용합니다." },
  { en: "How long have you lived here?", ko: "여기 사신 지 얼마나 되셨나요?", tip: "현지인에게 거주 기간을 물어보며 스몰토크를 시작할 때 씁니다." },
  { en: "What do you do for a living?", ko: "무슨 일을 하시나요?", tip: "상대방의 직업을 물어볼 때 사용합니다." },
  { en: "I'm a student.", ko: "저는 학생입니다.", tip: "자신의 직업이 학생임을 밝힐 때 씁니다." },
  { en: "I work in IT.", ko: "저는 IT 업계에서 일해요.", tip: "자신의 종사 분야를 말할 때 사용합니다." },
  { en: "The weather is lovely today.", ko: "오늘 날씨가 정말 좋네요.", tip: "날씨에 대해 가볍게 대화할 때 씁니다." },
  { en: "It's a bit chilly outside.", ko: "밖이 약간 쌀쌀하네요.", tip: "날씨가 추울 때 하는 말입니다." },
  { en: "Do you think it will rain later?", ko: "이따가 비가 올 것 같나요?", tip: "현지인에게 날씨 전망을 물어볼 때 사용합니다." },
  { en: "I love your outfit.", ko: "옷차림이 정말 멋지네요.", tip: "상대방의 스타일을 칭찬할 때 씁니다." },
  { en: "You have a beautiful country.", ko: "정말 아름다운 나라네요.", tip: "방문한 국가를 칭찬할 때 사용합니다." },
  { en: "The food here is amazing.", ko: "여기 음식 정말 맛있어요.", tip: "현지 음식에 대해 칭찬할 때 씁니다." },
  { en: "I'm really enjoying my trip.", ko: "여행을 정말 즐겁게 하고 있어요.", tip: "여행에 대한 만족감을 표현할 때 사용합니다." },
  { en: "Thank you so much for your help.", ko: "도와주셔서 정말 감사합니다.", tip: "도움을 받았을 때 깊은 감사를 표합니다." },
  { en: "I really appreciate it.", ko: "정말 감사하게 생각해요.", tip: "감사함을 진심으로 전할 때 씁니다." },
  { en: "That's very kind of you.", ko: "정말 친절하시네요.", tip: "상대방의 호의에 감사할 때 사용합니다." },
  { en: "Don't mention it.", ko: "천만에요.", tip: "감사 인사에 겸손하게 답할 때 씁니다." },
  { en: "It's my pleasure.", ko: "제가 오히려 기쁩니다.", tip: "도움을 주고 나서 정중하게 답할 때 사용합니다." },
  { en: "I'm sorry to bother you.", ko: "귀찮게 해드려 죄송합니다.", tip: "질문이나 부탁을 하기 전 양해를 구할 때 씁니다." },
  { en: "Excuse me, can I ask you a question?", ko: "실례하지만, 질문 하나 해도 될까요?", tip: "모르는 사람에게 말을 걸 때 사용합니다." },
  { en: "I apologize for the mistake.", ko: "실수에 대해 사과드립니다.", tip: "자신의 잘못을 정중히 사과할 때 씁니다." },
  { en: "That's alright.", ko: "괜찮습니다.", tip: "상대방의 사과를 받아들일 때 사용합니다." },
  { en: "No worries.", ko: "걱정 마세요.", tip: "사과나 감사에 대해 편하게 답할 때 씁니다." },
  { en: "Do you speak English?", ko: "영어 할 줄 아시나요?", tip: "영어 소통이 가능한지 물어볼 때 사용합니다." },
  { en: "I don't speak English very well.", ko: "저는 영어를 잘 못해요.", tip: "자신의 영어 실력이 부족함을 알릴 때 씁니다." },
  { en: "Could you speak a little slower, please?", ko: "조금만 천천히 말씀해 주시겠어요?", tip: "말이 너무 빠를 때 부탁하는 표현입니다." },
  { en: "Could you repeat that?", ko: "다시 한번 말씀해 주시겠어요?", tip: "상대방의 말을 잘 못 들었을 때 씁니다." },
  { en: "What does this mean?", ko: "이게 무슨 뜻인가요?", tip: "단어나 문장의 의미를 물어볼 때 사용합니다." },
  { en: "How do you pronounce this word?", ko: "이 단어는 어떻게 발음하나요?", tip: "발음 방법을 물어볼 때 씁니다." },
  { en: "Could you write it down for me?", ko: "그것 좀 적어주시겠어요?", tip: "말을 알아듣기 힘들어 글로 써달라고 할 때 사용합니다." },
  { en: "I don't understand.", ko: "이해가 안 가요.", tip: "상대방의 말을 이해하지 못했을 때 씁니다." },
  { en: "I get it now.", ko: "이제 알겠어요.", tip: "설명을 듣고 이해했을 때 사용합니다." },
  { en: "Does anyone here speak Korean?", ko: "여기 한국어 할 줄 아시는 분 있나요?", tip: "한국어 통역이 필요할 때 묻습니다." },
  { en: "I'm using a translation app.", ko: "저는 번역 앱을 쓰고 있어요.", tip: "번역기를 사용해 소통함을 알릴 때 씁니다." },
  { en: "Is it customary to tip here?", ko: "여기는 팁을 주는 게 관례인가요?", tip: "현지의 팁 문화를 확인할 때 묻습니다." },
  { en: "How much should I tip?", ko: "팁은 얼마 정도 줘야 하나요?", tip: "적정 팁 액수를 물어볼 때 사용합니다." },
  { en: "Is service charge included?", ko: "서비스 요금이 포함되어 있나요?", tip: "영수증에 팁이 포함되었는지 확인할 때 씁니다." },
  { en: "Do I need to take off my shoes?", ko: "신발을 벗어야 하나요?", tip: "실내 진입 시 신발 탈의 여부를 물어볼 때 사용합니다." },
  { en: "Is it okay to eat on the street?", ko: "길거리에서 음식을 먹어도 되나요?", tip: "길거리 취식 문화나 규정을 확인할 때 묻습니다." },
  { en: "What is the proper greeting here?", ko: "여기서는 어떻게 인사하는 것이 예의인가요?", tip: "현지의 올바른 인사법을 물어볼 때 씁니다." },
  { en: "Should I bow or shake hands?", ko: "고개를 숙여 인사해야 하나요, 악수를 해야 하나요?", tip: "인사 방식을 구체적으로 물어볼 때 사용합니다." },
  { en: "Are there any cultural taboos I should know about?", ko: "제가 알아야 할 문화적 금기가 있나요?", tip: "실수하지 않기 위해 현지 금기 사항을 물어볼 때 씁니다." },
  { en: "Is it polite to slurp noodles here?", ko: "여기선 면을 소리 내어 먹는 게 예의에 어긋나지 않나요?", tip: "식사 예절을 확인할 때 사용합니다." },
  { en: "I didn't mean to be rude.", ko: "무례하게 굴려던 건 아니었어요.", tip: "문화적 차이로 실수했을 때 해명하는 표현입니다." },
  { en: "Please forgive my ignorance.", ko: "제가 잘 몰랐으니 용서해 주세요.", tip: "현지 문화를 몰라 실수했을 때 사과하며 씁니다." },
  { en: "That's very interesting.", ko: "그거 정말 흥미롭네요.", tip: "새로운 문화나 이야기를 들었을 때 반응입니다." },
  { en: "I didn't know that.", ko: "그건 몰랐네요.", tip: "새로운 사실을 알게 되었을 때 씁니다." },
  { en: "We don't do that in my country.", ko: "우리나라에서는 그렇게 하지 않아요.", tip: "문화적 차이를 설명할 때 사용합니다." },
  { en: "In Korea, we usually bow to elders.", ko: "한국에서는 보통 어른들께 고개를 숙여 인사해요.", tip: "한국의 문화를 소개할 때 씁니다." },
  { en: "What a coincidence!", ko: "이런 우연이 있네요!", tip: "뜻밖의 우연한 상황에 놀라며 하는 말입니다." },
  { en: "I'm so happy to hear that.", ko: "그 말을 들으니 정말 기쁘네요.", tip: "좋은 소식을 들었을 때 사용합니다." },
  { en: "That sounds like fun.", ko: "재밌을 것 같네요.", tip: "상대방의 제안이나 이야기에 호응할 때 씁니다." },
  { en: "I'm a bit confused.", ko: "조금 혼란스럽네요.", tip: "상황이나 설명이 헷갈릴 때 사용합니다." },
  { en: "I'm surprised.", ko: "놀랐어요.", tip: "놀라운 감정을 표현할 때 씁니다." },
  { en: "That's unbelievable!", ko: "믿을 수가 없네요!", tip: "매우 놀랍거나 대단한 일을 겪었을 때 사용합니다." },
  { en: "I completely agree with you.", ko: "당신 말에 전적으로 동의해요.", tip: "상대방의 의견에 강하게 찬성할 때 씁니다." },
  { en: "I think so too.", ko: "저도 그렇게 생각해요.", tip: "가볍게 동의를 표할 때 사용합니다." },
  { en: "I'm not sure about that.", ko: "그건 잘 모르겠네요.", tip: "확신이 없거나 부드럽게 반대할 때 씁니다." },
  { en: "I politely disagree.", ko: "정중히 반대합니다.", tip: "예의를 갖춰 의견이 다름을 말할 때 사용합니다." },
  { en: "Maybe another time.", ko: "다음에 기회 되면 할게요.", tip: "제안을 부드럽게 거절할 때 씁니다." },
  { en: "I'd love to, but I have plans.", ko: "정말 그러고 싶지만, 선약이 있어요.", tip: "초대를 정중히 거절할 때 사용합니다." },
  { en: "Thank you for the invitation.", ko: "초대해 주셔서 감사합니다.", tip: "초대에 대한 감사를 전할 때 씁니다." },
  { en: "Let's keep in touch.", ko: "계속 연락하고 지내요.", tip: "헤어질 때 연락을 유지하자고 할 때 사용합니다." },
  { en: "Do you have Instagram?", ko: "인스타그램 하시나요?", tip: "SNS 계정을 물어보며 친해지고 싶을 때 씁니다." },
  { en: "Can I get your phone number?", ko: "전화번호 좀 받을 수 있을까요?", tip: "연락처를 교환하고 싶을 때 묻습니다." },
  { en: "It was nice talking to you.", ko: "대화 즐거웠습니다.", tip: "대화를 마치고 헤어질 때 하는 인사입니다." },
  { en: "Have a safe trip back home.", ko: "집에 조심히 돌아가세요.", tip: "상대방의 안전한 귀가를 기원할 때 씁니다." },
  { en: "Enjoy the rest of your day.", ko: "남은 하루 즐겁게 보내세요.", tip: "헤어질 때 건네는 덕담입니다." },
  { en: "Take care.", ko: "잘 지내세요.", tip: "작별 인사로 흔히 쓰이는 표현입니다." },
  { en: "See you later.", ko: "나중에 봐요.", tip: "다시 만날 사람과 헤어질 때 씁니다." },
  { en: "Goodbye, and thank you for everything.", ko: "안녕히 계세요, 여러 가지로 감사했습니다.", tip: "도움을 준 사람과 작별할 때 사용합니다." },
  { en: "Cheers!", ko: "건배!", tip: "술잔을 부딪치며 축하할 때 씁니다." },
  { en: "Bless you!", ko: "블레스 유! (감기 조심하세요)", tip: "누군가 재채기를 했을 때 건네는 관용적 인사입니다." },
  { en: "Congratulations!", ko: "축하합니다!", tip: "축하할 일이 있을 때 사용합니다." },
  { en: "Happy birthday!", ko: "생일 축하해요!", tip: "생일을 맞은 사람에게 하는 인사입니다." },
  { en: "Merry Christmas!", ko: "메리 크리스마스!", tip: "크리스마스 시즌에 하는 인사입니다." },
  { en: "Happy New Year!", ko: "새해 복 많이 받으세요!", tip: "새해를 맞이하여 하는 인사입니다." },
  { en: "Good luck!", ko: "행운을 빌어요!", tip: "상대방의 앞날에 행운을 기원할 때 씁니다." },
  { en: "Have fun!", ko: "재밌게 보내세요!", tip: "상대방이 즐거운 시간을 보내길 바랄 때 사용합니다." },
  { en: "Bon appetit!", ko: "맛있게 드세요!", tip: "식사를 시작하기 전에 건네는 말입니다." },
  { en: "Welcome to our city.", ko: "우리 도시에 오신 것을 환영합니다.", tip: "방문객을 환영할 때 쓰는 표현입니다." },
  { en: "Make yourself at home.", ko: "편하게 계세요.", tip: "손님을 맞이하여 편안하게 해주려 할 때 씁니다." },
  { en: "Please have a seat.", ko: "자리에 앉으세요.", tip: "자리를 권할 때 사용합니다." },
  { en: "After you.", ko: "먼저 가세요.", tip: "문이나 길에서 양보할 때 씁니다." },
  { en: "Mind your head.", ko: "머리 조심하세요.", tip: "천장이 낮거나 부딪힐 위험이 있을 때 경고합니다." },
  { en: "Watch out!", ko: "조심해요!", tip: "위험한 상황을 급히 알릴 때 사용합니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.communication) {
  sentencesData.communication = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.communication.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.communication.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} sentences to communication category.`);

const dictKeys = new Set(Object.keys(dictionaryData).map(k => k.toLowerCase()));
const missingWords = new Set();

const stopWords = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'to', 'of', 'and', 'in', 'that', 'have', 'has', 'had', 'do', 'does', 'did', 'for', 'on', 'with', 'as', 'at', 'by', 'this', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'me', 'him', 'us', 'them']);

sentencesData.communication.forEach(s => {
  const words = s.en.toLowerCase().replace(/[^a-z0-9\s-']/g, '').split(/\s+/);
  words.forEach(w => {
    if (w && !dictKeys.has(w) && !stopWords.has(w) && isNaN(w)) {
      missingWords.add(w);
    }
  });
});

console.log(JSON.stringify(Array.from(missingWords)));
