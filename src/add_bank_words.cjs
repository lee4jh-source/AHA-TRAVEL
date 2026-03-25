const fs = require('fs');

const missingWords = {
  "euros": { en: "euros", ko: "유로 (유럽 연합 통화)", type: "noun" },
  "coins": { en: "coins", ko: "동전들", type: "noun" },
  "hundred-dollar": { en: "hundred-dollar", ko: "100달러짜리의", type: "adjective" },
  "twenty-dollar": { en: "twenty-dollar", ko: "20달러짜리의", type: "adjective" },
  "tens": { en: "tens", ko: "10단위 (10달러짜리 지폐들)", type: "noun" },
  "blocked": { en: "blocked", ko: "막힌, 정지된", type: "adjective" },
  "withdrawal": { en: "withdrawal", ko: "인출, 출금", type: "noun" },
  "traveler's": { en: "traveler's", ko: "여행자의", type: "adjective" },
  "unauthorized": { en: "unauthorized", ko: "승인되지 않은", type: "adjective" },
  "transactions": { en: "transactions", ko: "거래들", type: "noun" },
  "purchase": { en: "purchase", ko: "구매, 결제", type: "noun" },
  "reverse": { en: "reverse", ko: "취소하다, 되돌리다", type: "verb" },
  "accounts": { en: "accounts", ko: "계좌들", type: "noun" },
  "non-residents": { en: "non-residents", ko: "비거주자들", type: "noun" },
  "minimum": { en: "minimum", ko: "최소의", type: "adjective" },
  "balance": { en: "balance", ko: "잔고, 잔액", type: "noun" },
  "requirement": { en: "requirement", ko: "요구사항, 조건", type: "noun" },
  "wire": { en: "wire", ko: "전신, 송금", type: "noun" },
  "swift": { en: "SWIFT", ko: "스위프트 (국제은행간통신협정)", type: "noun" },
  "routing": { en: "routing", ko: "라우팅, 경로 지정", type: "noun" },
  "overdrawn": { en: "overdrawn", ko: "초과 인출된", type: "adjective" },
  "savings": { en: "savings", ko: "예금, 저축", type: "noun" },
  "poor": { en: "poor", ko: "가난한, 형편없는", type: "adjective" },
  "leftover": { en: "leftover", ko: "남은", type: "adjective" },
  "torn": { en: "torn", ko: "찢어진", type: "adjective" },
  "banknote": { en: "banknote", ko: "지폐", type: "noun" },
  "payments": { en: "payments", ko: "결제들, 지불", type: "noun" },
  "transaction": { en: "transaction", ko: "거래", type: "noun" },
  "inserting": { en: "inserting", ko: "삽입하는 것", type: "noun" },
  "chip": { en: "chip", ko: "칩", type: "noun" },
  "swipe": { en: "swipe", ko: "긁다", type: "verb" },
  "reader": { en: "reader", ko: "단말기, 리더기", type: "noun" },
  "enter": { en: "enter", ko: "입력하다, 들어가다", type: "verb" },
  "button": { en: "button", ko: "버튼", type: "noun" },
  "surcharge": { en: "surcharge", ko: "추가 요금, 수수료", type: "noun" },
  "dynamic": { en: "dynamic", ko: "동적인", type: "adjective" },
  "conversion": { en: "conversion", ko: "변환, 환전", type: "noun" },
  "appeared": { en: "appeared", ko: "나타났다", type: "verb" },
  "update": { en: "update", ko: "갱신하다, 업데이트하다", type: "verb" },
  "billing": { en: "billing", ko: "청구", type: "noun" },
  "month": { en: "month", ko: "달, 월", type: "noun" },
  "abroad": { en: "abroad", ko: "해외에, 해외로", type: "adverb" },
  "activate": { en: "activate", ko: "활성화하다", type: "verb" },
  "maximum": { en: "maximum", ko: "최대의", type: "adjective" },
  "contactless": { en: "contactless", ko: "비접촉식의", type: "adjective" },
  "apply": { en: "apply", ko: "신청하다, 적용하다", type: "verb" },
  "loan": { en: "loan", ko: "대출", type: "noun" },
  "current": { en: "current", ko: "현재의", type: "adjective" },
  "mortgage": { en: "mortgage", ko: "주택 담보 대출", type: "noun" },
  "cashier's": { en: "cashier's", ko: "출납원의", type: "adjective" },
  "certify": { en: "certify", ko: "증명하다, 보증하다", type: "verb" },
  "bounced": { en: "bounced", ko: "부도난, 반송된", type: "adjective" },
  "payment": { en: "payment", ko: "지불, 결제", type: "noun" },
  "banking": { en: "banking", ko: "은행 업무", type: "noun" },
  "national": { en: "national", ko: "국가의, 전국적인", type: "adjective" },
  "holiday": { en: "holiday", ko: "휴일, 명절", type: "noun" },
  "manager": { en: "manager", ko: "매니저, 지점장", type: "noun" },
  "teller": { en: "teller", ko: "은행원, 창구 직원", type: "noun" },
  "financial": { en: "financial", ko: "금융의, 재정적인", type: "adjective" },
  "advisor": { en: "advisor", ko: "고문, 상담사", type: "noun" },
  "needs": { en: "needs", ko: "필요하다", type: "verb" },
  "receive": { en: "receive", ko: "받다", type: "verb" },
  "notes": { en: "notes", ko: "지폐들, 메모들", type: "noun" },
  "buying": { en: "buying", ko: "사는 것, 매입", type: "noun" },
  "funds": { en: "funds", ko: "자금", type: "noun" },
  "bank's": { en: "bank's", ko: "은행의", type: "noun" },
  "checks": { en: "checks", ko: "수표들", type: "noun" }
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
