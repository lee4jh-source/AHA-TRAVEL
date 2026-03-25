const fs = require('fs');

const newSentences = [
  { en: "Where is the ticket office?", ko: "매표소가 어디인가요?", tip: "표를 사는 곳을 찾을 때 묻습니다." },
  { en: "How much is the admission fee?", ko: "입장료가 얼마인가요?", tip: "입장 가격을 물어볼 때 사용합니다." },
  { en: "Do you offer a student discount?", ko: "학생 할인이 되나요?", tip: "할인 혜택을 확인할 때 씁니다." },
  { en: "Two adults and one child, please.", ko: "어른 두 명, 아이 한 명입니다.", tip: "인원수를 말하며 표를 살 때 사용합니다." },
  { en: "What time do you close today?", ko: "오늘 몇 시에 문을 닫나요?", tip: "마감 시간을 확인할 때 묻습니다." },
  { en: "Are there any guided tours available?", ko: "가이드 투어가 있나요?", tip: "가이드 동반 투어 여부를 물어볼 때 씁니다." },
  { en: "Where does the tour start?", ko: "투어는 어디서 시작하나요?", tip: "투어 집결지를 찾을 때 묻습니다." },
  { en: "How long does the tour take?", ko: "투어는 얼마나 걸리나요?", tip: "투어 소요 시간을 물어볼 때 사용합니다." },
  { en: "Is there an audio guide in Korean?", ko: "한국어 오디오 가이드가 있나요?", tip: "한국어 안내 기기를 찾을 때 씁니다." },
  { en: "Can I take pictures here?", ko: "여기서 사진을 찍어도 되나요?", tip: "사진 촬영 허용 여부를 물어볼 때 사용합니다." },
  { en: "Flash photography is not allowed.", ko: "플래시 촬영은 금지되어 있습니다.", tip: "플래시 사용 금지 안내를 받을 때 듣습니다." },
  { en: "Could you take a picture of us?", ko: "저희 사진 좀 찍어주시겠어요?", tip: "다른 사람에게 사진 촬영을 부탁할 때 씁니다." },
  { en: "Where is the best spot for photos?", ko: "사진 찍기 가장 좋은 곳이 어디인가요?", tip: "포토 스팟을 물어볼 때 사용합니다." },
  { en: "What is the most famous attraction here?", ko: "여기서 가장 유명한 명소가 무엇인가요?", tip: "주요 볼거리를 추천받을 때 묻습니다." },
  { en: "Do I need to book in advance?", ko: "미리 예약해야 하나요?", tip: "사전 예약 필요 여부를 확인할 때 씁니다." },
  { en: "Can I buy tickets online?", ko: "온라인으로 표를 살 수 있나요?", tip: "인터넷 예매 가능 여부를 물어볼 때 사용합니다." },
  { en: "I have a reservation under the name Kim.", ko: "킴이라는 이름으로 예약했습니다.", tip: "예약자 이름을 말할 때 씁니다." },
  { en: "Where is the entrance?", ko: "입구가 어디인가요?", tip: "들어가는 곳을 찾을 때 묻습니다." },
  { en: "Where is the exit?", ko: "출구가 어디인가요?", tip: "나가는 곳을 찾을 때 묻습니다." },
  { en: "Is this the line for the museum?", ko: "이게 박물관 들어가는 줄인가요?", tip: "줄을 서기 전 확인할 때 사용합니다." },
  { en: "How long is the wait?", ko: "얼마나 기다려야 하나요?", tip: "대기 시간을 물어볼 때 씁니다." },
  { en: "Where can I get a map of the park?", ko: "공원 지도는 어디서 구할 수 있나요?", tip: "안내 지도를 찾을 때 묻습니다." },
  { en: "Are there any restrooms inside?", ko: "안에 화장실이 있나요?", tip: "내부 화장실 유무를 확인할 때 사용합니다." },
  { en: "Where is the souvenir shop?", ko: "기념품 가게가 어디인가요?", tip: "기념품 파는 곳을 찾을 때 씁니다." },
  { en: "Do you sell postcards?", ko: "엽서도 파나요?", tip: "특정 기념품 판매 여부를 물어볼 때 사용합니다." },
  { en: "What time is the next show?", ko: "다음 공연은 몇 시인가요?", tip: "공연 시간을 확인할 때 묻습니다." },
  { en: "Where is the meeting point?", ko: "모이는 장소가 어디인가요?", tip: "집결지를 확인할 때 씁니다." },
  { en: "Don't touch the exhibits, please.", ko: "전시물을 만지지 마세요.", tip: "전시물 보호를 위한 안내를 받을 때 듣습니다." },
  { en: "Is food allowed inside?", ko: "안에 음식물을 가지고 들어가도 되나요?", tip: "음식물 반입 여부를 확인할 때 묻습니다." },
  { en: "Where can I leave my bag?", ko: "가방은 어디에 맡길 수 있나요?", tip: "짐 보관소를 찾을 때 씁니다." },
  { en: "Is there a locker room?", ko: "물품 보관소가 있나요?", tip: "사물함 유무를 확인할 때 사용합니다." },
  { en: "How much is the locker fee?", ko: "사물함 이용료가 얼마인가요?", tip: "보관 요금을 물어볼 때 씁니다." },
  { en: "We lost our group.", ko: "일행을 잃어버렸어요.", tip: "일행과 헤어졌을 때 도움을 청하며 씁니다." },
  { en: "Where is the observation deck?", ko: "전망대가 어디인가요?", tip: "전망대 위치를 찾을 때 묻습니다." },
  { en: "The view from here is amazing.", ko: "여기 경치가 정말 멋지네요.", tip: "아름다운 경치를 감상하며 하는 말입니다." },
  { en: "Is the elevator working?", ko: "엘리베이터가 작동하나요?", tip: "엘리베이터 운행 여부를 확인할 때 씁니다." },
  { en: "Can we go up to the roof?", ko: "옥상에 올라갈 수 있나요?", tip: "옥상 개방 여부를 물어볼 때 사용합니다." },
  { en: "What is this building called?", ko: "이 건물 이름이 뭔가요?", tip: "건물의 명칭을 물어볼 때 씁니다." },
  { en: "When was this castle built?", ko: "이 성은 언제 지어졌나요?", tip: "건축 연도를 물어볼 때 사용합니다." },
  { en: "Who painted this picture?", ko: "이 그림은 누가 그렸나요?", tip: "작품의 작가를 물어볼 때 씁니다." },
  { en: "This is a masterpiece.", ko: "이건 걸작이네요.", tip: "훌륭한 작품을 칭찬할 때 사용합니다." },
  { en: "I'd like to rent a bicycle.", ko: "자전거를 빌리고 싶어요.", tip: "자전거 대여를 요청할 때 씁니다." },
  { en: "Where is the boarding gate for the ferry?", ko: "페리 탑승구가 어디인가요?", tip: "배 타는 곳을 찾을 때 묻습니다." },
  { en: "How often does the shuttle bus run?", ko: "셔틀버스는 얼마나 자주 다니나요?", tip: "셔틀버스 배차 간격을 물어볼 때 사용합니다." },
  { en: "Is this seat taken?", ko: "여기 자리 있나요?", tip: "빈자리인지 확인할 때 묻습니다." },
  { en: "Please keep your voice down.", ko: "목소리를 낮춰주세요.", tip: "조용히 해달라는 요청을 받을 때 듣습니다." },
  { en: "No smoking in this area.", ko: "이 구역은 금연입니다.", tip: "금연 구역임을 안내받을 때 듣습니다." },
  { en: "Can I get a refund for this ticket?", ko: "이 표 환불받을 수 있나요?", tip: "표 환불을 요청할 때 씁니다." },
  { en: "The ticket is valid for one day.", ko: "이 표는 하루 동안 유효합니다.", tip: "표의 유효 기간을 안내받을 때 듣습니다." },
  { en: "Do you have a brochure in English?", ko: "영어 안내 책자가 있나요?", tip: "영어 팸플릿을 요청할 때 사용합니다." },
  { en: "Where is the lost and found?", ko: "분실물 센터가 어디인가요?", tip: "물건을 잃어버려 센터를 찾을 때 묻습니다." },
  { en: "I lost my camera.", ko: "카메라를 잃어버렸어요.", tip: "분실 사실을 알릴 때 씁니다." },
  { en: "Is there a cafe nearby?", ko: "근처에 카페가 있나요?", tip: "가까운 카페를 찾을 때 사용합니다." },
  { en: "We are looking for the main square.", ko: "저희는 중앙 광장을 찾고 있어요.", tip: "목적지를 말하며 길을 물어볼 때 씁니다." },
  { en: "How do we get back to the hotel?", ko: "호텔로 어떻게 돌아가나요?", tip: "숙소로 돌아가는 길을 물어볼 때 사용합니다." },
  { en: "Is it safe to walk around here at night?", ko: "밤에 이 주변을 걸어 다녀도 안전한가요?", tip: "야간 치안을 확인할 때 묻습니다." },
  { en: "What are the opening hours?", ko: "영업시간이 어떻게 되나요?", tip: "운영 시간을 물어볼 때 씁니다." },
  { en: "Are you open on Mondays?", ko: "월요일에도 여나요?", tip: "특정 요일의 영업 여부를 확인할 때 사용합니다." },
  { en: "The museum is closed on public holidays.", ko: "박물관은 공휴일에 휴관합니다.", tip: "휴관일 안내를 받을 때 듣습니다." },
  { en: "Do you have a senior citizen discount?", ko: "경로 할인이 있나요?", tip: "노인 할인 혜택을 확인할 때 묻습니다." },
  { en: "Children under five are free.", ko: "5세 미만 어린이는 무료입니다.", tip: "무료입장 조건을 안내받을 때 듣습니다." },
  { en: "Please show me your ticket.", ko: "표를 보여주세요.", tip: "표 검사를 받을 때 듣는 말입니다." },
  { en: "Keep your ticket until the end of the tour.", ko: "투어가 끝날 때까지 표를 보관하세요.", tip: "표 보관 안내를 받을 때 듣습니다." },
  { en: "Where can I validate my parking ticket?", ko: "주차권 확인은 어디서 받나요?", tip: "주차 할인을 위한 확인처를 찾을 때 씁니다." },
  { en: "Is there a dress code for the temple?", ko: "사원에 복장 규정이 있나요?", tip: "종교 시설 등의 복장 제한을 물어볼 때 사용합니다." },
  { en: "You need to cover your shoulders.", ko: "어깨를 가리셔야 합니다.", tip: "복장 규정에 대한 안내를 받을 때 듣습니다." },
  { en: "Please take off your shoes.", ko: "신발을 벗어주세요.", tip: "신발을 벗어야 하는 곳에서 듣는 말입니다." },
  { en: "Can I use a tripod?", ko: "삼각대를 사용해도 되나요?", tip: "삼각대 사용 허용 여부를 물어볼 때 씁니다." },
  { en: "Drones are strictly prohibited here.", ko: "이곳에서는 드론 사용이 엄격히 금지되어 있습니다.", tip: "드론 금지 구역임을 안내받을 때 듣습니다." },
  { en: "Watch your step.", ko: "발밑을 조심하세요.", tip: "계단이나 턱이 있는 곳에서 주의를 받을 때 듣습니다." },
  { en: "The floor is slippery.", ko: "바닥이 미끄럽습니다.", tip: "미끄럼 주의 안내를 받을 때 듣습니다." },
  { en: "Do not lean on the glass.", ko: "유리에 기대지 마세요.", tip: "안전을 위한 경고를 받을 때 듣습니다." },
  { en: "Stay behind the line.", ko: "선 뒤에 머물러 주세요.", tip: "안전선 준수를 요청받을 때 듣습니다." },
  { en: "Please follow the guide.", ko: "가이드를 따라가 주세요.", tip: "가이드 인솔에 따르라는 안내입니다." },
  { en: "Don't fall behind the group.", ko: "일행에서 뒤처지지 마세요.", tip: "무리에서 이탈하지 말라는 경고입니다." },
  { en: "We have twenty minutes of free time.", ko: "자유 시간 20분입니다.", tip: "자유 시간이 주어졌을 때 듣는 말입니다." },
  { en: "Let's meet back here at three o'clock.", ko: "3시에 다시 여기서 만납시다.", tip: "재집결 시간을 정할 때 씁니다." },
  { en: "What time does the sun set?", ko: "해는 몇 시에 지나요?", tip: "일몰 시간을 물어볼 때 사용합니다." },
  { en: "I want to see the night view.", ko: "야경을 보고 싶어요.", tip: "야경 관람 의사를 밝힐 때 씁니다." },
  { en: "Is there a night tour?", ko: "야간 투어가 있나요?", tip: "밤에 진행되는 투어를 찾을 때 묻습니다." },
  { en: "The fountain show starts at eight.", ko: "분수 쇼는 8시에 시작합니다.", tip: "쇼 시작 시간을 안내받을 때 듣습니다." },
  { en: "Where is the best place to watch the parade?", ko: "퍼레이드를 보기 가장 좋은 자리가 어디인가요?", tip: "관람 명당을 물어볼 때 사용합니다." },
  { en: "Can I feed the animals?", ko: "동물들에게 먹이를 줘도 되나요?", tip: "먹이 주기 체험 가능 여부를 확인할 때 묻습니다." },
  { en: "Do not feed the pigeons.", ko: "비둘기에게 먹이를 주지 마세요.", tip: "먹이 금지 안내를 받을 때 듣습니다." },
  { en: "Where is the roller coaster?", ko: "롤러코스터가 어디인가요?", tip: "특정 놀이기구 위치를 찾을 때 씁니다." },
  { en: "I feel dizzy.", ko: "어지러워요.", tip: "놀이기구 탑승 후나 컨디션이 안 좋을 때 씁니다." },
  { en: "Is there a first aid station?", ko: "응급 처치소가 있나요?", tip: "다치거나 아플 때 의무실을 찾으며 묻습니다." },
  { en: "Can I get a stamp here?", ko: "여기서 스탬프를 찍을 수 있나요?", tip: "기념 스탬프를 찍는 곳을 찾을 때 사용합니다." },
  { en: "I collect magnets from every city.", ko: "저는 도시마다 자석을 수집해요.", tip: "자신의 수집 취미를 말할 때 씁니다." },
  { en: "This is a great souvenir.", ko: "이거 좋은 기념품이네요.", tip: "마음에 드는 기념품을 발견했을 때 사용합니다." },
  { en: "Could you wrap this carefully?", ko: "이것 좀 조심해서 포장해 주시겠어요?", tip: "파손 주의 포장을 부탁할 때 씁니다." },
  { en: "It's fragile.", ko: "깨지기 쉬운 물건이에요.", tip: "물건을 조심히 다뤄달라고 할 때 사용합니다." },
  { en: "Do you accept credit cards?", ko: "신용카드 받으시나요?", tip: "카드 결제 가능 여부를 물어볼 때 씁니다." },
  { en: "Is there an ATM around here?", ko: "이 근처에 현금인출기가 있나요?", tip: "현금이 필요할 때 ATM을 찾으며 묻습니다." },
  { en: "The line is moving fast.", ko: "줄이 빨리 줄어드네요.", tip: "대기 줄이 금방 빠질 때 하는 말입니다." },
  { en: "We've been waiting for an hour.", ko: "우리 한 시간째 기다리고 있어요.", tip: "오랜 대기 시간에 대해 말할 때 씁니다." },
  { en: "It's worth the wait.", ko: "기다릴 만한 가치가 있네요.", tip: "오래 기다린 보람이 있을 때 사용합니다." },
  { en: "I'm so glad we came here.", ko: "여기 오길 정말 잘했어요.", tip: "방문한 곳이 마음에 들 때 하는 말입니다." },
  { en: "This place is breathtaking.", ko: "이곳은 숨이 멎을 정도로 아름답네요.", 기: "엄청난 경치나 장관을 보고 감탄할 때 씁니다." },
  { en: "Let's take a selfie.", ko: "셀카 찍자.", tip: "일행과 함께 사진을 찍자고 제안할 때 사용합니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.sightseeing) {
  sentencesData.sightseeing = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.sightseeing.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.sightseeing.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} sentences to sightseeing category.`);

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
