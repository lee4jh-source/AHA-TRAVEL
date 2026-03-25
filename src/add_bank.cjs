const fs = require('fs');

const newSentences = [
  { en: "I'd like to exchange some money.", ko: "돈을 좀 환전하고 싶어요.", tip: "환전을 요청할 때 가장 기본적으로 쓰는 표현입니다." },
  { en: "What is the exchange rate for US dollars today?", ko: "오늘 미국 달러 환율이 어떻게 되나요?", tip: "특정 통화의 환율을 물어볼 때 사용합니다." },
  { en: "Do you charge a commission?", ko: "수수료가 있나요?", tip: "환전 수수료 부과 여부를 확인할 때 묻습니다." },
  { en: "How much is the commission fee?", ko: "수수료는 얼마인가요?", tip: "수수료 금액을 구체적으로 물어볼 때 씁니다." },
  { en: "I want to change Korean won to Euros.", ko: "한국 원화를 유로화로 바꾸고 싶어요.", tip: "바꾸려는 통화를 명확히 말할 때 사용합니다." },
  { en: "Can I have it in small bills?", ko: "작은 단위 지폐로 주실 수 있나요?", tip: "잔돈이나 소액권이 필요할 때 부탁하는 표현입니다." },
  { en: "I need some coins for the bus.", ko: "버스를 타게 동전이 좀 필요해요.", tip: "동전 교환을 요청할 때 씁니다." },
  { en: "Could you break this hundred-dollar bill?", ko: "이 100달러짜리 지폐 좀 잔돈으로 바꿔주시겠어요?", tip: "고액권을 소액권으로 깰 때 사용합니다." },
  { en: "I'd like ten twenty-dollar bills and the rest in tens.", ko: "20달러짜리 10장 주시고 나머지는 10달러짜리로 주세요.", tip: "원하는 지폐 구성을 구체적으로 말할 때 씁니다." },
  { en: "Where is the nearest ATM?", ko: "가장 가까운 현금인출기가 어디 있나요?", tip: "ATM 위치를 찾을 때 묻습니다." },
  { en: "The ATM swallowed my card.", ko: "현금인출기가 제 카드를 삼켰어요.", tip: "기계가 카드를 반환하지 않을 때 도움을 청하며 씁니다." },
  { en: "My card is blocked.", ko: "제 카드가 정지되었어요.", tip: "카드 사용이 막혔을 때 상황을 알리는 표현입니다." },
  { en: "I forgot my PIN.", ko: "비밀번호를 잊어버렸어요.", tip: "비밀번호 분실 시 은행원에게 말할 때 씁니다." },
  { en: "I entered the wrong PIN three times.", ko: "비밀번호를 세 번 잘못 입력했어요.", tip: "비밀번호 오류로 잠겼을 때 이유를 설명합니다." },
  { en: "Is there a daily withdrawal limit?", ko: "하루 인출 한도가 있나요?", tip: "출금 한도를 확인할 때 묻습니다." },
  { en: "The machine didn't give me my money.", ko: "기계에서 돈이 안 나왔어요.", tip: "ATM 오류로 현금이 나오지 않았을 때 씁니다." },
  { en: "I'd like to make a withdrawal.", ko: "돈을 인출하고 싶어요.", tip: "창구에서 돈을 찾을 때 사용합니다." },
  { en: "I'd like to make a deposit.", ko: "돈을 입금하고 싶어요.", tip: "창구에서 돈을 넣을 때 씁니다." },
  { en: "Can I cash this traveler's check here?", ko: "여기서 이 여행자 수표를 현금으로 바꿀 수 있나요?", tip: "여행자 수표 환전을 문의할 때 묻습니다." },
  { en: "Do I need to show my passport?", ko: "여권을 보여줘야 하나요?", tip: "신분증 제시 필요 여부를 확인할 때 씁니다." },
  { en: "Here is my ID.", ko: "제 신분증 여기 있습니다.", tip: "신분증을 건넬 때 하는 말입니다." },
  { en: "I lost my credit card.", ko: "신용카드를 잃어버렸어요.", tip: "카드 분실 신고를 할 때 가장 먼저 하는 말입니다." },
  { en: "I need to report a stolen card.", ko: "도난당한 카드를 신고해야 해요.", tip: "도난 신고를 명확히 할 때 씁니다." },
  { en: "Please cancel my card immediately.", ko: "제 카드를 즉시 정지해 주세요.", tip: "카드 사용 중지를 긴급히 요청할 때 사용합니다." },
  { en: "Are there any unauthorized transactions?", ko: "승인되지 않은 거래 내역이 있나요?", tip: "부정 사용 내역을 확인할 때 묻습니다." },
  { en: "I didn't make this purchase.", ko: "이 결제는 제가 한 게 아니에요.", tip: "본인이 하지 않은 결제를 부인할 때 씁니다." },
  { en: "Can you reverse this charge?", ko: "이 결제를 취소해 주실 수 있나요?", tip: "잘못된 청구의 취소를 요청할 때 사용합니다." },
  { en: "How long does it take to get a replacement card?", ko: "새 카드를 발급받는 데 얼마나 걸리나요?", tip: "재발급 소요 기간을 물어볼 때 씁니다." },
  { en: "I want to open a bank account.", ko: "은행 계좌를 개설하고 싶어요.", tip: "새 계좌를 만들 때 사용합니다." },
  { en: "What documents do I need to open an account?", ko: "계좌를 열려면 어떤 서류가 필요한가요?", tip: "필요 서류를 문의할 때 묻습니다." },
  { en: "Do you offer accounts for non-residents?", ko: "비거주자를 위한 계좌도 제공하나요?", tip: "외국인/여행자 계좌 개설 가능 여부를 확인할 때 씁니다." },
  { en: "Is there a minimum balance requirement?", ko: "최소 유지 잔액 조건이 있나요?", tip: "계좌 유지 조건을 물어볼 때 사용합니다." },
  { en: "I want to close my account.", ko: "제 계좌를 해지하고 싶어요.", tip: "계좌를 닫을 때 씁니다." },
  { en: "Can I transfer money overseas?", ko: "해외로 송금할 수 있나요?", tip: "해외 송금 가능 여부를 물어볼 때 묻습니다." },
  { en: "How much is the wire transfer fee?", ko: "해외 송금 수수료가 얼마인가요?", tip: "송금 수수료를 확인할 때 씁니다." },
  { en: "How long will the transfer take?", ko: "송금하는 데 얼마나 걸리나요?", tip: "송금 소요 시간을 물어볼 때 사용합니다." },
  { en: "I need the SWIFT code for this bank.", ko: "이 은행의 스위프트 코드가 필요해요.", tip: "해외 송금용 은행 식별 코드를 물어볼 때 씁니다." },
  { en: "What is the routing number?", ko: "라우팅 번호가 어떻게 되나요?", tip: "미국 등에서 은행 경로 번호를 물어볼 때 사용합니다." },
  { en: "Please fill out this form.", ko: "이 양식을 작성해 주세요.", tip: "서류 작성을 요청받을 때 듣습니다." },
  { en: "Sign at the bottom, please.", ko: "아래에 서명해 주세요.", tip: "서명을 요구받을 때 듣습니다." },
  { en: "I need a bank statement for the last three months.", ko: "최근 3개월치 은행 거래 내역서가 필요해요.", tip: "거래 내역서 발급을 요청할 때 씁니다." },
  { en: "Can you print my account balance?", ko: "제 계좌 잔액을 출력해 주실 수 있나요?", tip: "잔액 증명서나 출력을 요구할 때 사용합니다." },
  { en: "My account is overdrawn.", ko: "제 계좌가 마이너스 통장이 되었어요.", tip: "초과 인출 상태를 알릴 때 씁니다." },
  { en: "What is the interest rate for a savings account?", ko: "예금 계좌의 이자율이 어떻게 되나요?", tip: "예금 금리를 물어볼 때 묻습니다." },
  { en: "Do you have a currency exchange counter?", ko: "환전 창구가 있나요?", tip: "환전 전용 창구를 찾을 때 사용합니다." },
  { en: "The exchange rate is very poor here.", ko: "여기는 환율이 너무 안 좋네요.", tip: "환율 조건이 불리할 때 하는 말입니다." },
  { en: "Is it better to exchange money at the airport or in the city?", ko: "공항과 시내 중 어디서 환전하는 게 더 낫나요?", tip: "환전 장소를 추천받을 때 묻습니다." },
  { en: "I have some leftover foreign currency.", ko: "남은 외국 돈이 좀 있어요.", tip: "쓰고 남은 돈을 환전하려 할 때 씁니다." },
  { en: "Can I change these coins back to my currency?", ko: "이 동전들을 다시 제 나라 돈으로 바꿀 수 있나요?", tip: "동전 환전 가능 여부를 확인할 때 사용합니다." },
  { en: "We only accept paper money for exchange.", ko: "환전은 지폐만 받습니다.", tip: "동전 환전 불가 안내를 받을 때 듣습니다." },
  { en: "The bill is torn, can you still accept it?", ko: "지폐가 찢어졌는데, 그래도 받아주시나요?", tip: "손상된 지폐 환전을 문의할 때 묻습니다." },
  { en: "This banknote is too old.", ko: "이 지폐는 너무 낡았어요.", tip: "지폐 상태가 안 좋을 때 하는 말입니다." },
  { en: "Do you accept mobile payments?", ko: "모바일 결제도 받으시나요?", tip: "스마트폰 결제 가능 여부를 물어볼 때 씁니다." },
  { en: "Can I pay with Apple Pay?", ko: "애플 페이로 결제할 수 있나요?", tip: "특정 간편 결제 사용을 물어볼 때 사용합니다." },
  { en: "The transaction was declined.", ko: "거래가 거절되었습니다.", tip: "결제 실패 시 듣는 말입니다." },
  { en: "Please try inserting the chip.", ko: "칩을 꽂아서 다시 시도해 주세요.", tip: "IC 칩 결제를 유도할 때 듣습니다." },
  { en: "You need to swipe the card.", ko: "카드를 긁으셔야 합니다.", tip: "마그네틱 결제를 유도할 때 듣습니다." },
  { en: "Tap your card on the reader.", ko: "단말기에 카드를 대주세요.", tip: "비접촉 결제를 안내받을 때 듣습니다." },
  { en: "Enter your PIN and press the green button.", ko: "비밀번호를 누르고 초록색 버튼을 누르세요.", tip: "비밀번호 입력을 안내받을 때 듣습니다." },
  { en: "The card reader is broken.", ko: "카드 단말기가 고장 났어요.", tip: "결제 기기 고장을 알릴 때 씁니다." },
  { en: "Is there a surcharge for using a foreign card?", ko: "해외 카드 사용 시 추가 수수료가 있나요?", tip: "해외 카드 수수료를 확인할 때 묻습니다." },
  { en: "Would you like to pay in your local currency?", ko: "자국 통화로 결제하시겠습니까?", tip: "DCC(자국통화결제) 여부를 물어볼 때 듣습니다." },
  { en: "Please charge it in the local currency.", ko: "현지 통화로 결제해 주세요.", tip: "이중 환전을 피하기 위해 현지 통화 결제를 요청할 때 씁니다." },
  { en: "Dynamic currency conversion is a scam.", ko: "자국 통화 결제(DCC)는 사기나 다름없어요.", tip: "DCC의 불리함을 지적할 때 쓰는 표현입니다." },
  { en: "I need a receipt, please.", ko: "영수증 부탁드립니다.", tip: "영수증 발급을 요청할 때 사용합니다." },
  { en: "Keep the receipt for your records.", ko: "기록을 위해 영수증을 보관하세요.", tip: "영수증 보관 안내를 받을 때 듣습니다." },
  { en: "I was overcharged.", ko: "요금이 과다 청구되었어요.", tip: "계산이 잘못되었음을 알릴 때 씁니다." },
  { en: "Can I get a refund to my credit card?", ko: "신용카드로 환불받을 수 있나요?", tip: "카드 취소 및 환불을 요구할 때 사용합니다." },
  { en: "How many days will the refund take?", ko: "환불되는 데 며칠이나 걸리나요?", tip: "환불 소요 기간을 물어볼 때 묻습니다." },
  { en: "The refund hasn't appeared on my statement yet.", ko: "아직 명세서에 환불 내역이 안 떠요.", tip: "환불 지연을 항의할 때 씁니다." },
  { en: "I need to update my billing address.", ko: "청구지 주소를 변경해야 해요.", tip: "주소 변경을 요청할 때 사용합니다." },
  { en: "My card expires next month.", ko: "제 카드가 다음 달에 만료돼요.", tip: "카드 만료 임박을 알릴 때 씁니다." },
  { en: "Can you send the new card to my hotel?", ko: "새 카드를 제 호텔로 보내주실 수 있나요?", tip: "해외에서 카드 수령지를 변경할 때 묻습니다." },
  { en: "I'm traveling abroad, please don't block my card.", ko: "해외여행 중이니 제 카드를 정지하지 말아 주세요.", tip: "해외 사용 전 카드사에 알릴 때 씁니다." },
  { en: "I need to activate my card for international use.", ko: "해외 결제가 가능하도록 카드를 활성화해야 해요.", tip: "해외 사용 잠금 해제를 요청할 때 사용합니다." },
  { en: "What is the maximum limit for contactless payments?", ko: "비접촉 결제 최대 한도가 얼마인가요?", tip: "터치 결제 한도를 확인할 때 묻습니다." },
  { en: "I'd like to apply for a loan.", ko: "대출을 신청하고 싶어요.", tip: "대출 상담을 시작할 때 씁니다." },
  { en: "What is the current mortgage rate?", ko: "현재 주택 담보 대출 금리가 어떻게 되나요?", tip: "담보 대출 이율을 물어볼 때 사용합니다." },
  { en: "I need a cashier's check.", ko: "자기앞수표가 필요해요.", tip: "은행 보증 수표 발급을 요청할 때 묻습니다." },
  { en: "Can you certify this check?", ko: "이 수표를 보증해 주실 수 있나요?", tip: "수표 보증을 요구할 때 씁니다." },
  { en: "The check bounced.", ko: "수표가 부도났어요.", tip: "수표 결제 거절 상황을 알릴 때 사용합니다." },
  { en: "I want to stop payment on a check.", ko: "수표 지급 정지를 요청하고 싶어요.", tip: "수표 결제 취소를 은행에 요구할 때 씁니다." },
  { en: "Do you have a safe deposit box available?", ko: "이용 가능한 대여 금고가 있나요?", tip: "은행 금고 대여를 문의할 때 묻습니다." },
  { en: "I lost the key to my safe deposit box.", ko: "대여 금고 열쇠를 잃어버렸어요.", tip: "금고 열쇠 분실을 알릴 때 씁니다." },
  { en: "What are the banking hours?", ko: "은행 영업시간이 어떻게 되나요?", tip: "영업시간을 확인할 때 사용합니다." },
  { en: "Are you open on weekends?", ko: "주말에도 영업하나요?", tip: "주말 영업 여부를 물어볼 때 묻습니다." },
  { en: "The bank is closed for a national holiday.", ko: "국경일이라 은행이 문을 닫았어요.", tip: "휴무일 안내를 받을 때 듣습니다." },
  { en: "I need to speak to a manager.", ko: "지점장님과 이야기하고 싶어요.", tip: "책임자와의 면담을 요구할 때 씁니다." },
  { en: "Is there an English-speaking teller?", ko: "영어를 할 줄 아는 은행원이 있나요?", tip: "영어 소통이 가능한 직원을 찾을 때 묻습니다." },
  { en: "Please take a number and wait.", ko: "번호표를 뽑고 기다려 주세요.", tip: "대기표 발권을 안내받을 때 듣습니다." },
  { en: "Which counter should I go to?", ko: "어느 창구로 가야 하나요?", tip: "업무에 맞는 창구를 찾을 때 묻습니다." },
  { en: "I have an appointment with a financial advisor.", ko: "재무 상담사와 예약이 되어 있어요.", tip: "예약 방문임을 알릴 때 씁니다." },
  { en: "Can I get a tax refund form?", ko: "택스 리펀드 양식을 받을 수 있나요?", tip: "면세 환급 서류를 요청할 때 사용합니다." },
  { en: "Where is the tax refund counter at the airport?", ko: "공항 택스 리펀드 창구가 어디인가요?", tip: "공항에서 세금 환급처를 찾을 때 묻습니다." },
  { en: "Do I get the refund in cash or on my card?", ko: "환급금은 현금으로 받나요, 카드로 받나요?", tip: "환급 방식을 확인할 때 씁니다." },
  { en: "The customs officer needs to stamp the receipt.", ko: "세관원이 영수증에 도장을 찍어줘야 해요.", tip: "세관 확인 절차를 안내받을 때 듣습니다." },
  { en: "I didn't receive my tax refund.", ko: "택스 리펀드를 받지 못했어요.", tip: "환급 누락을 항의할 때 사용합니다." },
  { en: "Can I exchange these damaged notes?", ko: "이 손상된 지폐를 교환할 수 있나요?", tip: "훼손된 돈의 교환을 문의할 때 묻습니다." },
  { en: "Do you buy back foreign currency?", ko: "외국 돈을 다시 사주시기도 하나요?", tip: "재환전 가능 여부를 확인할 때 씁니다." },
  { en: "I'd like to check today's buying rate.", ko: "오늘의 매입 환율을 확인하고 싶어요.", tip: "은행이 외화를 사는 환율을 물어볼 때 사용합니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.bank) {
  sentencesData.bank = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.bank.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.bank.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} sentences to bank category.`);

const dictKeys = new Set(Object.keys(dictionaryData).map(k => k.toLowerCase()));
const missingWords = new Set();

const stopWords = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'to', 'of', 'and', 'in', 'that', 'have', 'has', 'had', 'do', 'does', 'did', 'for', 'on', 'with', 'as', 'at', 'by', 'this', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'me', 'him', 'us', 'them']);

sentencesData.bank.forEach(s => {
  const words = s.en.toLowerCase().replace(/[^a-z0-9\s-']/g, '').split(/\s+/);
  words.forEach(w => {
    if (w && !dictKeys.has(w) && !stopWords.has(w) && isNaN(w)) {
      missingWords.add(w);
    }
  });
});

console.log(JSON.stringify(Array.from(missingWords)));
