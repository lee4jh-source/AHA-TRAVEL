const fs = require('fs');

const newSentences = [
  { en: "Do you have a SIM card for tourists?", ko: "관광객용 유심이 있나요?", tip: "여행자 전용 유심을 찾을 때 묻습니다." },
  { en: "I'd like a data-only plan.", ko: "데이터 전용 요금제로 할게요.", tip: "통화 없이 데이터만 필요할 때 씁니다." },
  { en: "Which network has the best coverage here?", ko: "여기선 어느 통신사 망이 가장 잘 터지나요?", tip: "수신율이 좋은 통신사를 추천받을 때 사용합니다." },
  { en: "Is this SIM card compatible with my phone?", ko: "이 유심이 제 휴대폰과 호환되나요?", tip: "기기 호환 여부를 확인할 때 묻습니다." },
  { en: "I need a micro SIM, not a nano SIM.", ko: "나노 유심이 아니라 마이크로 유심이 필요해요.", tip: "유심 크기를 지정할 때 씁니다." },
  { en: "Can you cut this SIM card to fit my phone?", ko: "제 폰에 맞게 이 유심을 잘라주실 수 있나요?", tip: "유심 크기를 맞춰달라고 부탁할 때 사용합니다." },
  { en: "Does this plan include local calls?", ko: "이 요금제에 현지 통화가 포함되어 있나요?", tip: "국내 통화 가능 여부를 확인할 때 묻습니다." },
  { en: "How many minutes of talk time do I get?", ko: "통화는 몇 분이나 제공되나요?", tip: "무료 통화 시간을 물어볼 때 씁니다." },
  { en: "Are text messages free with this plan?", ko: "이 요금제는 문자 메시지가 무료인가요?", tip: "무료 문자 여부를 확인할 때 사용합니다." },
  { en: "What is the validity period of this SIM?", ko: "이 유심의 유효 기간은 어떻게 되나요?", tip: "사용 가능 기간을 물어볼 때 묻습니다." },
  { en: "Can I extend the plan later?", ko: "나중에 요금제를 연장할 수 있나요?", tip: "기간 연장 가능 여부를 확인할 때 씁니다." },
  { en: "How much does it cost to recharge?", ko: "충전하는 데 얼마인가요?", tip: "요금 충전 비용을 물어볼 때 사용합니다." },
  { en: "Where can I buy a recharge voucher?", ko: "충전 바우처는 어디서 살 수 있나요?", tip: "충전권 구매처를 찾을 때 묻습니다." },
  { en: "Can I top up online?", ko: "온라인으로 충전할 수 있나요?", tip: "인터넷 충전 가능 여부를 물어볼 때 씁니다." },
  { en: "I want to add ten dollars to my account.", ko: "제 계정에 10달러를 충전하고 싶어요.", tip: "특정 금액 충전을 요청할 때 사용합니다." },
  { en: "My data ran out too fast.", ko: "데이터가 너무 빨리 닳았어요.", tip: "데이터 소진 속도에 대해 말할 때 씁니다." },
  { en: "Is there a daily data limit?", ko: "일일 데이터 제한이 있나요?", tip: "하루 데이터 사용량 제한을 확인할 때 묻습니다." },
  { en: "What happens when I use all my high-speed data?", ko: "고속 데이터를 다 쓰면 어떻게 되나요?", tip: "데이터 소진 후의 상태를 물어볼 때 사용합니다." },
  { en: "Will the speed be throttled after three gigabytes?", ko: "3기가바이트 이후에는 속도가 제한되나요?", tip: "속도 제한 여부를 확인할 때 씁니다." },
  { en: "I need an eSIM for my iPhone.", ko: "제 아이폰용 eSIM이 필요해요.", tip: "eSIM 구매를 요청할 때 묻습니다." },
  { en: "Can you email me the QR code for the eSIM?", ko: "eSIM QR 코드를 이메일로 보내주실 수 있나요?", tip: "QR 코드를 이메일로 받고 싶을 때 사용합니다." },
  { en: "I accidentally deleted my eSIM profile.", ko: "실수로 eSIM 프로필을 지웠어요.", tip: "eSIM 프로필 삭제 문제를 알릴 때 씁니다." },
  { en: "How do I scan the QR code?", ko: "QR 코드는 어떻게 스캔하나요?", tip: "스캔 방법을 모를 때 물어봅니다." },
  { en: "The QR code is not working.", ko: "QR 코드가 작동하지 않아요.", tip: "QR 코드 인식 오류를 알릴 때 사용합니다." },
  { en: "Do I need to restart my phone after activation?", ko: "개통 후에 휴대폰을 재시작해야 하나요?", tip: "개통 후 절차를 확인할 때 묻습니다." },
  { en: "It says no service on my screen.", ko: "화면에 서비스 안 됨이라고 떠요.", tip: "통신망 연결 실패를 알릴 때 씁니다." },
  { en: "I only have 3G, not 4G or 5G.", ko: "4G나 5G가 아니라 3G만 잡혀요.", tip: "네트워크 속도 문제를 알릴 때 사용합니다." },
  { en: "Why is my signal so weak?", ko: "왜 이렇게 신호가 약하죠?", tip: "수신 상태 불량을 문의할 때 묻습니다." },
  { en: "Is there an outage in this area?", ko: "이 지역에 통신 장애가 있나요?", tip: "통신망 장애 여부를 확인할 때 씁니다." },
  { en: "My phone shows 'Invalid SIM'.", ko: "휴대폰에 '유효하지 않은 유심'이라고 나와요.", tip: "유심 인식 오류를 알릴 때 사용합니다." },
  { en: "I think the SIM card is damaged.", ko: "유심이 손상된 것 같아요.", tip: "유심 불량이 의심될 때 씁니다." },
  { en: "Can I get a replacement SIM with the same number?", ko: "같은 번호로 유심을 재발급받을 수 있나요?", tip: "유심 재발급을 요청할 때 묻습니다." },
  { en: "How do I find out my new phone number?", ko: "제 새 전화번호는 어떻게 확인하나요?", 기: "본인 번호 확인 방법을 물어볼 때 사용합니다." },
  { en: "Please write down my phone number.", ko: "제 전화번호 좀 적어주세요.", tip: "번호를 메모해 달라고 부탁할 때 씁니다." },
  { en: "Do I need to register with my passport?", ko: "여권으로 등록해야 하나요?", tip: "신분증 등록 필요 여부를 확인할 때 묻습니다." },
  { en: "Here is my ID for the registration.", ko: "등록을 위한 제 신분증입니다.", tip: "신분증을 제시할 때 사용합니다." },
  { en: "How long does activation take?", ko: "개통하는 데 얼마나 걸리나요?", tip: "개통 소요 시간을 물어볼 때 씁니다." },
  { en: "It has been an hour and it is still not activated.", ko: "한 시간이 지났는데 아직 개통이 안 됐어요.", tip: "개통 지연을 항의할 때 사용합니다." },
  { en: "Can you check my activation status?", ko: "제 개통 상태 좀 확인해 주시겠어요?", tip: "개통 진행 상황을 물어볼 때 묻습니다." },
  { en: "What are the APN settings for this network?", ko: "이 통신사의 APN 설정이 어떻게 되나요?", tip: "APN 설정값을 물어볼 때 씁니다." },
  { en: "Do I need to change my APN manually?", ko: "APN을 수동으로 변경해야 하나요?", tip: "수동 설정 필요 여부를 확인할 때 사용합니다." },
  { en: "Can you type the APN settings for me?", ko: "APN 설정을 대신 입력해 주시겠어요?", tip: "설정 입력을 부탁할 때 묻습니다." },
  { en: "I cannot send any text messages.", ko: "문자 메시지가 안 보내져요.", tip: "문자 발신 오류를 알릴 때 씁니다." },
  { en: "I am not receiving any calls.", ko: "전화가 안 걸려와요.", tip: "수신 불량 문제를 알릴 때 사용합니다." },
  { en: "How do I turn on data roaming?", ko: "데이터 로밍은 어떻게 켜나요?", tip: "로밍 활성화 방법을 물어볼 때 묻습니다." },
  { en: "Should I turn off data roaming to avoid charges?", ko: "요금 폭탄을 피하려면 데이터 로밍을 꺼야 하나요?", tip: "데이터 차단 방법을 확인할 때 씁니다." },
  { en: "I want to rent a portable Wi-Fi router.", ko: "휴대용 와이파이 라우터를 대여하고 싶어요.", tip: "포켓 와이파이 대여를 요청할 때 사용합니다." },
  { en: "How many devices can connect to this pocket Wi-Fi?", ko: "이 포켓 와이파이에 기기를 몇 대까지 연결할 수 있나요?", tip: "동시 접속 가능 대수를 물어볼 때 묻습니다." },
  { en: "How long does the battery last on this router?", ko: "이 라우터 배터리는 얼마나 가나요?", tip: "배터리 지속 시간을 확인할 때 씁니다." },
  { en: "Do I need to pay a deposit for the router?", ko: "라우터 보증금을 내야 하나요?", tip: "보증금 유무를 물어볼 때 사용합니다." },
  { en: "Where do I return the pocket Wi-Fi?", ko: "포켓 와이파이는 어디에 반납하나요?", tip: "반납 장소를 찾을 때 묻습니다." },
  { en: "Can I return it at the airport?", ko: "공항에서 반납해도 되나요?", tip: "공항 반납 가능 여부를 확인할 때 씁니다." },
  { en: "The Wi-Fi router is not turning on.", ko: "와이파이 라우터 전원이 안 켜져요.", tip: "기기 고장을 알릴 때 사용합니다." },
  { en: "I forgot the password for the pocket Wi-Fi.", ko: "포켓 와이파이 비밀번호를 잊어버렸어요.", tip: "비밀번호 분실 시 도움을 청할 때 묻습니다." },
  { en: "Is the public Wi-Fi safe to use?", ko: "공용 와이파이를 써도 안전한가요?", tip: "공용망 보안을 확인할 때 씁니다." },
  { en: "The hotel Wi-Fi keeps disconnecting.", ko: "호텔 와이파이가 자꾸 끊겨요.", tip: "와이파이 연결 불안정을 알릴 때 사용합니다." },
  { en: "Is there a free Wi-Fi hotspot nearby?", ko: "근처에 무료 와이파이 핫스팟이 있나요?", tip: "무료 와이파이를 찾을 때 묻습니다." },
  { en: "Which network should I select manually?", ko: "수동으로 어떤 네트워크를 선택해야 하나요?", tip: "수동 네트워크 선택 시 물어봅니다." },
  { en: "My phone is locked to my home carrier.", ko: "제 휴대폰은 원래 통신사에 잠겨 있어요.", tip: "컨트리락/캐리어락 상태를 알릴 때 씁니다." },
  { en: "Can you unlock my phone?", ko: "제 휴대폰 잠금을 해제해 주실 수 있나요?", tip: "락 해제를 요청할 때 사용합니다." },
  { en: "I need to call my home country.", ko: "고국으로 전화를 걸어야 해요.", tip: "국제 전화가 필요할 때 묻습니다." },
  { en: "What is the country code for the United States?", ko: "미국 국가 코드가 어떻게 되나요?", tip: "국가 번호를 물어볼 때 씁니다." },
  { en: "How much is an international text message?", ko: "국제 문자 메시지는 얼마인가요?", tip: "국제 문자 요금을 확인할 때 사용합니다." },
  { en: "Can I use WhatsApp with this data plan?", ko: "이 요금제로 왓츠앱을 쓸 수 있나요?", tip: "특정 앱 사용 가능 여부를 물어볼 때 묻습니다." },
  { en: "Does social media use up my data allowance?", ko: "소셜 미디어를 쓰면 데이터 제공량이 차감되나요?", tip: "SNS 데이터 차감 여부를 확인할 때 씁니다." },
  { en: "Is tethering allowed on this plan?", ko: "이 요금제는 테더링이 허용되나요?", tip: "테더링/핫스팟 가능 여부를 물어볼 때 사용합니다." },
  { en: "I cannot share my internet via personal hotspot.", ko: "개인용 핫스팟으로 인터넷 공유가 안 돼요.", tip: "핫스팟 연결 오류를 알릴 때 씁니다." },
  { en: "Please help me insert the SIM card.", ko: "유심 꽂는 것 좀 도와주세요.", tip: "유심 장착 도움을 요청할 때 묻습니다." },
  { en: "I dropped my SIM card on the floor.", ko: "유심을 바닥에 떨어뜨렸어요.", tip: "유심을 떨어뜨렸을 때 하는 말입니다." },
  { en: "The SIM tray is stuck.", ko: "유심 트레이가 꼈어요.", tip: "트레이가 안 빠질 때 도움을 청하며 씁니다." },
  { en: "Do you have a paperclip I can use?", ko: "제가 쓸 수 있는 클립 있나요?", tip: "유심 핀 대용품을 찾을 때 사용합니다." },
  { en: "My battery is dying, do you have a charger?", ko: "배터리가 다 돼가는데, 충전기 있나요?", tip: "충전기를 빌릴 때 묻습니다." },
  { en: "Can I charge my phone here for a minute?", ko: "여기서 휴대폰 좀 잠깐 충전해도 될까요?", tip: "충전 콘센트 사용을 허락받을 때 씁니다." },
  { en: "Where is the nearest mobile phone shop?", ko: "가장 가까운 휴대폰 매장이 어디인가요?", tip: "대리점 위치를 찾을 때 사용합니다." },
  { en: "I need to buy a local adapter.", ko: "현지 어댑터를 사야 해요.", tip: "플러그 어댑터를 찾을 때 묻습니다." },
  { en: "Does this come with a universal adapter?", ko: "이거 멀티 어댑터도 같이 들어있나요?", tip: "구성품을 확인할 때 씁니다." },
  { en: "I lost my phone, what should I do?", ko: "휴대폰을 잃어버렸는데 어떡해야 하죠?", tip: "분실 시 대처 방법을 물어볼 때 사용합니다." },
  { en: "Can you block my SIM card?", ko: "제 유심을 정지시켜 주실 수 있나요?", tip: "분실 신고 및 정지를 요청할 때 묻습니다." },
  { en: "I need to report a stolen phone.", ko: "도난당한 휴대폰을 신고해야 해요.", tip: "도난 신고를 할 때 씁니다." },
  { en: "What number do I call for customer service?", ko: "고객 센터 번호가 몇 번인가요?", tip: "고객 센터 연락처를 물어볼 때 사용합니다." },
  { en: "Is there an English-speaking operator?", ko: "영어를 할 줄 아는 상담원이 있나요?", tip: "영어 상담원을 찾을 때 묻습니다." },
  { en: "I keep getting spam messages.", ko: "스팸 문자가 계속 와요.", tip: "스팸 문제를 알릴 때 씁니다." },
  { en: "How do I check my voicemail?", ko: "음성 사서함은 어떻게 확인하나요?", tip: "음성 메시지 확인 방법을 물어볼 때 사용합니다." },
  { en: "Can you disable voicemail for me?", ko: "음성 사서함을 해지해 주실 수 있나요?", tip: "음성 사서함 기능 끄기를 요청할 때 묻습니다." },
  { en: "I want to cancel my subscription.", ko: "가입을 취소하고 싶어요.", tip: "서비스 해지를 요청할 때 씁니다." },
  { en: "Do I get a refund for the unused days?", ko: "사용하지 않은 날짜에 대해 환불받을 수 있나요?", tip: "잔여 기간 환불을 물어볼 때 사용합니다." },
  { en: "The internet speed is much slower than advertised.", ko: "인터넷 속도가 광고한 것보다 훨씬 느려요.", tip: "속도 불만을 제기할 때 묻습니다." },
  { en: "I can't load any web pages.", ko: "웹페이지가 하나도 안 열려요.", tip: "인터넷 접속 불량을 알릴 때 씁니다." },
  { en: "Maps are not loading because of the slow connection.", ko: "연결이 느려서 지도가 안 떠요.", tip: "지도 앱 사용 불가 상황을 알릴 때 사용합니다." },
  { en: "Is there a cheaper plan available?", ko: "더 저렴한 요금제가 있나요?", tip: "싼 요금제를 찾을 때 묻습니다." },
  { en: "What is your most popular plan for tourists?", ko: "관광객에게 가장 인기 있는 요금제가 뭔가요?", tip: "추천 요금제를 물어볼 때 씁니다." },
  { en: "I will be staying for two weeks.", ko: "2주 동안 머물 예정입니다.", tip: "체류 기간에 맞는 요금제를 찾기 위해 말합니다." },
  { en: "Can I pay with cash for the recharge?", ko: "충전 요금을 현금으로 내도 되나요?", tip: "결제 수단을 확인할 때 사용합니다." },
  { en: "The recharge machine is out of order.", ko: "충전 기계가 고장 났어요.", tip: "기기 고장을 알릴 때 묻습니다." },
  { en: "I entered the wrong PIN code three times.", ko: "PIN 번호를 세 번 잘못 입력했어요.", tip: "비밀번호 입력 오류 상황을 알릴 때 씁니다." },
  { en: "I need the PUK code to unlock my SIM.", ko: "유심 잠금을 풀려면 PUK 코드가 필요해요.", tip: "잠금 해제 코드를 요청할 때 사용합니다." },
  { en: "Where is the PIN code on this card?", ko: "이 카드 어디에 PIN 번호가 있나요?", tip: "번호 위치를 찾을 때 묻습니다." },
  { en: "Scratch this area to reveal the code.", ko: "코드를 보려면 이 부분을 긁으세요.", tip: "스크래치 카드 사용법을 안내받을 때 듣습니다." },
  { en: "My data plan expires tomorrow.", ko: "제 데이터 요금제가 내일 만료돼요.", tip: "만료 임박을 알리며 연장 등을 문의할 때 씁니다." },
  { en: "Thank you for setting up my phone.", ko: "제 휴대폰을 설정해 주셔서 감사합니다.", tip: "도움을 받은 후 감사 인사를 할 때 사용합니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.sim) {
  sentencesData.sim = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.sim.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.sim.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} sentences to sim category.`);

const dictKeys = new Set(Object.keys(dictionaryData).map(k => k.toLowerCase()));
const missingWords = new Set();

const stopWords = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'to', 'of', 'and', 'in', 'that', 'have', 'has', 'had', 'do', 'does', 'did', 'for', 'on', 'with', 'as', 'at', 'by', 'this', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'me', 'him', 'us', 'them']);

sentencesData.sim.forEach(s => {
  const words = s.en.toLowerCase().replace(/[^a-z0-9\s-']/g, '').split(/\s+/);
  words.forEach(w => {
    if (w && !dictKeys.has(w) && !stopWords.has(w) && isNaN(w)) {
      missingWords.add(w);
    }
  });
});

console.log(JSON.stringify(Array.from(missingWords)));
