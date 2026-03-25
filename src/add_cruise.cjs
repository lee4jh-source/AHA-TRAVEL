const fs = require('fs');

const newSentences = [
  { en: "I'd like to check in for the cruise.", ko: "크루즈 체크인을 하고 싶어요.", tip: "터미널에서 탑승 수속을 시작할 때 씁니다." },
  { en: "Where is the baggage drop-off?", ko: "수하물 맡기는 곳이 어디인가요?", tip: "큰 짐을 배로 보내기 위해 위탁 장소를 찾을 때 묻습니다." },
  { en: "Here are my cruise documents and passport.", ko: "제 크루즈 서류와 여권입니다.", tip: "체크인 시 필요한 서류를 제출할 때 사용합니다." },
  { en: "What time does boarding begin?", ko: "탑승은 몇 시에 시작하나요?", tip: "배에 오르는 시간을 확인할 때 묻습니다." },
  { en: "Where can I get my cruise card?", ko: "크루즈 카드는 어디서 받나요?", tip: "선내 신분증 겸 결제 수단인 카드를 찾을 때 씁니다." },
  { en: "Is there a priority boarding line?", ko: "우선 탑승 줄이 따로 있나요?", tip: "VIP나 특정 등급을 위한 빠른 줄을 찾을 때 사용합니다." },
  { en: "How do I find my stateroom?", ko: "제 객실은 어떻게 찾나요?", tip: "선실(캐빈) 위치를 물어볼 때 묻습니다." },
  { en: "My cabin is on deck seven.", ko: "제 객실은 7층 데크에 있어요.", tip: "자신의 객실 층수를 말할 때 씁니다." },
  { en: "Is my luggage delivered to my room?", ko: "제 짐은 객실로 배달되나요?", tip: "위탁 수하물 배송 여부를 확인할 때 사용합니다." },
  { en: "The key card is not opening the door.", ko: "카드키로 문이 안 열려요.", tip: "객실 문이 열리지 않을 때 도움을 청하며 씁니다." },
  { en: "Could you send someone to fix the air conditioning?", ko: "에어컨을 고치러 사람 좀 보내주시겠어요?", tip: "객실 냉방기 고장을 수리 요청할 때 묻습니다." },
  { en: "Where is the muster station for the safety drill?", ko: "안전 훈련을 위한 집합 장소가 어디인가요?", tip: "비상 대피 훈련 장소를 찾을 때 씁니다." },
  { en: "Is attendance at the muster drill mandatory?", ko: "안전 훈련 참석은 의무인가요?", tip: "훈련 필수 참석 여부를 확인할 때 사용합니다." },
  { en: "How do I put on this life jacket?", ko: "이 구명조끼는 어떻게 입나요?", tip: "구명조끼 착용법을 물어볼 때 묻습니다." },
  { en: "I feel a bit seasick.", ko: "뱃멀미가 좀 나네요.", tip: "멀미 증상을 호소할 때 씁니다." },
  { en: "Do you have any medication for motion sickness?", ko: "멀미약 있나요?", tip: "멀미약을 요청할 때 사용합니다." },
  { en: "I'd like to book a shore excursion.", ko: "기항지 관광을 예약하고 싶어요.", tip: "배에서 내려서 하는 투어를 예약할 때 묻습니다." },
  { en: "What time do we arrive at the next port?", ko: "다음 기항지에는 몇 시에 도착하나요?", tip: "다음 항구 도착 시간을 확인할 때 씁니다." },
  { en: "When is the all-aboard time?", ko: "승선 마감 시간이 언제인가요?", tip: "기항지에서 배로 돌아와야 하는 한계 시간을 물어볼 때 사용합니다." },
  { en: "Do I need a visa for this port of call?", ko: "이 기항지에서는 비자가 필요한가요?", tip: "특정 국가 항구 정박 시 비자 필요 여부를 확인할 때 묻습니다." },
  { en: "Where is the gangway located?", ko: "승하선용 출입구(갱웨이)가 어디에 있나요?", tip: "배에서 내리거나 탈 때 출입구를 찾으며 씁니다." },
  { en: "Can I get a map of the port?", ko: "항구 지도를 얻을 수 있을까요?", tip: "기항지 지도를 요청할 때 사용합니다." },
  { en: "Are there shuttle buses to the city center?", ko: "시내로 가는 셔틀버스가 있나요?", tip: "항구에서 시내로 가는 교통편을 물어볼 때 묻습니다." },
  { en: "What time is the first seating for dinner?", ko: "저녁 식사 1부 시간은 몇 시인가요?", tip: "정찬 식당의 첫 번째 식사 시간을 확인할 때 씁니다." },
  { en: "We have anytime dining.", ko: "저희는 자유 식사(애니타임 다이닝)입니다.", tip: "정해진 시간 없이 식사하는 옵션임을 알릴 때 사용합니다." },
  { en: "I'd like to make a reservation for the specialty restaurant.", ko: "스페셜티 레스토랑(유료 식당)을 예약하고 싶어요.", tip: "유료 특별 식당을 예약할 때 묻습니다." },
  { en: "Is there a dress code for tonight's dinner?", ko: "오늘 저녁 식사에 복장 규정이 있나요?", tip: "정찬 식당의 드레스 코드를 확인할 때 씁니다." },
  { en: "Is tonight a formal night?", ko: "오늘 밤이 포멀 나이트(정장 입는 날)인가요?", tip: "정장을 입어야 하는 날인지 물어볼 때 사용합니다." },
  { en: "Can we get a table by the window?", ko: "창가 자리로 주실 수 있나요?", tip: "식당에서 창가 좌석을 요청할 때 묻습니다." },
  { en: "Are drinks included in the cruise fare?", ko: "음료는 크루즈 요금에 포함되어 있나요?", tip: "음료 무료 제공 여부를 확인할 때 씁니다." },
  { en: "I'd like to purchase a beverage package.", ko: "음료 패키지를 구매하고 싶어요.", tip: "음료/주류 무제한 패키지를 살 때 사용합니다." },
  { en: "Does this package include alcoholic drinks?", ko: "이 패키지에 주류도 포함되나요?", tip: "패키지에 알코올 포함 여부를 물어볼 때 묻습니다." },
  { en: "Where is the buffet restaurant?", ko: "뷔페 식당이 어디인가요?", tip: "자유롭게 식사할 수 있는 뷔페 위치를 찾을 때 씁니다." },
  { en: "Is room service available 24 hours?", ko: "룸서비스는 24시간 이용 가능한가요?", tip: "룸서비스 이용 시간을 확인할 때 사용합니다." },
  { en: "Is there a charge for room service delivery?", ko: "룸서비스 배달료가 있나요?", tip: "룸서비스 유료 여부를 물어볼 때 묻습니다." },
  { en: "What time does the casino open?", ko: "카지노는 몇 시에 여나요?", tip: "선내 카지노 영업시간을 확인할 때 씁니다." },
  { en: "Where is the main theater?", ko: "메인 극장이 어디인가요?", tip: "공연을 하는 대극장 위치를 찾을 때 사용합니다." },
  { en: "Do I need to reserve seats for the evening show?", ko: "저녁 공연 좌석을 예약해야 하나요?", tip: "공연 예약 필수 여부를 물어볼 때 묻습니다." },
  { en: "Is there a kids' club on board?", ko: "배 안에 키즈 클럽이 있나요?", tip: "어린이 전용 시설 유무를 확인할 때 씁니다." },
  { en: "What activities are scheduled for today?", ko: "오늘 어떤 활동들이 예정되어 있나요?", tip: "선내 프로그램 일정을 물어볼 때 사용합니다." },
  { en: "Can I get a copy of the daily newsletter?", ko: "일일 선상 신문 한 부 받을 수 있을까요?", tip: "매일 배달되는 프로그램 안내지를 요청할 때 묻습니다." },
  { en: "Where are the swimming pools and hot tubs?", ko: "수영장과 온수풀(자쿠지)은 어디에 있나요?", tip: "수영 시설 위치를 찾을 때 씁니다." },
  { en: "Are pool towels provided?", ko: "수영장 수건이 제공되나요?", tip: "수건 대여 여부를 확인할 때 사용합니다." },
  { en: "Is the fitness center open now?", ko: "지금 피트니스 센터가 열려 있나요?", tip: "헬스장 운영 여부를 물어볼 때 묻습니다." },
  { en: "I'd like to book a massage at the spa.", ko: "스파에서 마사지를 예약하고 싶어요.", tip: "선내 스파 서비스를 예약할 때 씁니다." },
  { en: "Is there a running track on the top deck?", ko: "최상층 데크에 조깅 트랙이 있나요?", tip: "야외 달리기 트랙 유무를 확인할 때 사용합니다." },
  { en: "How do I connect to the ship's Wi-Fi?", ko: "배의 와이파이에 어떻게 연결하나요?", tip: "선내 인터넷 연결 방법을 물어볼 때 묻습니다." },
  { en: "How much is the internet package for the week?", ko: "일주일 인터넷 패키지는 얼마인가요?", tip: "인터넷 요금제를 확인할 때 씁니다." },
  { en: "The internet connection is very slow.", ko: "인터넷 연결이 너무 느려요.", tip: "선내 와이파이 속도 불만을 말할 때 사용합니다." },
  { en: "Where is the guest services desk?", ko: "고객 서비스 데스크가 어디인가요?", tip: "안내 데스크(리셉션) 위치를 찾을 때 묻습니다." },
  { en: "I have a question about my onboard account.", ko: "제 선내 결제 계정에 대해 질문이 있어요.", tip: "선내 사용 내역에 대해 문의할 때 씁니다." },
  { en: "Can I pay my gratuities in advance?", ko: "선상 팁(봉사료)을 미리 지불할 수 있나요?", tip: "팁 선결제 가능 여부를 물어볼 때 사용합니다." },
  { en: "Are tips automatically added to the bill?", ko: "팁이 청구서에 자동으로 추가되나요?", tip: "자동 팁 부과 여부를 확인할 때 묻습니다." },
  { en: "I'd like to dispute a charge on my statement.", ko: "제 명세서에 있는 청구 금액에 이의를 제기하고 싶어요.", tip: "잘못된 결제 내역 수정을 요구할 때 씁니다." },
  { en: "Where can I exchange currency on the ship?", ko: "배 안 어디서 환전할 수 있나요?", tip: "선내 환전소 위치를 찾을 때 사용합니다." },
  { en: "Is there a medical center on board?", ko: "배 안에 의무실이 있나요?", tip: "선내 병원 유무를 확인할 때 묻습니다." },
  { en: "What are the clinic hours?", ko: "의무실 진료 시간이 어떻게 되나요?", tip: "의무실 운영 시간을 물어볼 때 씁니다." },
  { en: "I need to see the ship's doctor.", ko: "선의(선상 의사)의 진료를 받아야 해요.", tip: "의사 진찰을 요청할 때 사용합니다." },
  { en: "Where is the duty-free shop?", ko: "면세점이 어디인가요?", tip: "선내 면세점 위치를 찾을 때 묻습니다." },
  { en: "Are the shops open while we are in port?", ko: "항구에 정박해 있는 동안에도 상점들이 문을 여나요?", tip: "기항지 정박 중 상점 운영 여부를 확인할 때 씁니다." },
  { en: "Can I buy toiletries on the ship?", ko: "배에서 세면도구를 살 수 있나요?", tip: "칫솔, 치약 등 구매 가능 여부를 물어볼 때 사용합니다." },
  { en: "Is there a laundry service available?", ko: "세탁 서비스가 있나요?", tip: "세탁 의뢰가 가능한지 물어볼 때 묻습니다." },
  { en: "Do you have self-service laundry rooms?", ko: "셀프 세탁실이 있나요?", tip: "코인 세탁실 유무를 확인할 때 씁니다." },
  { en: "How much does it cost to wash a bag of laundry?", ko: "세탁물 한 봉지를 빠는 데 얼마인가요?", tip: "세탁 서비스 요금을 물어볼 때 사용합니다." },
  { en: "I'd like to order breakfast to my cabin tomorrow.", ko: "내일 아침 식사를 객실로 주문하고 싶어요.", tip: "조식 룸서비스를 예약할 때 묻습니다." },
  { en: "Please leave the breakfast outside my door.", ko: "아침 식사는 문 밖에 두고 가주세요.", tip: "비대면 룸서비스 배달을 요청할 때 씁니다." },
  { en: "Can I request extra pillows and blankets?", ko: "베개와 담요를 추가로 요청할 수 있나요?", tip: "추가 침구를 요구할 때 사용합니다." },
  { en: "My cabin steward is very helpful.", ko: "제 객실 담당 승무원이 정말 친절해요.", tip: "룸메이드(스튜어드)를 칭찬할 때 씁니다." },
  { en: "The toilet in my bathroom is clogged.", ko: "화장실 변기가 막혔어요.", tip: "배관 문제를 알리고 수리를 요청할 때 사용합니다." },
  { en: "Is there a safe in the room?", ko: "객실에 금고가 있나요?", tip: "귀중품 보관용 금고 유무를 확인할 때 묻습니다." },
  { en: "How do I operate the room safe?", ko: "객실 금고는 어떻게 작동하나요?", tip: "금고 사용법을 물어볼 때 씁니다." },
  { en: "I locked my valuables in the safe and forgot the code.", ko: "귀중품을 금고에 넣고 잠갔는데 비밀번호를 잊어버렸어요.", tip: "금고 비밀번호 분실 시 도움을 청할 때 사용합니다." },
  { en: "What time is the captain's welcome reception?", ko: "선장 주최 환영 리셉션은 몇 시인가요?", tip: "선장 환영 파티 시간을 확인할 때 묻습니다." },
  { en: "Where is the photo gallery?", ko: "사진 갤러리가 어디인가요?", tip: "배에서 찍힌 사진을 확인/구매하는 곳을 찾을 때 씁니다." },
  { en: "I'd like to buy the photos taken at dinner.", ko: "저녁 식사 때 찍은 사진을 사고 싶어요.", tip: "기념사진 구매를 요청할 때 사용합니다." },
  { en: "Are there any art auctions during the cruise?", ko: "크루즈 기간 동안 미술품 경매가 있나요?", tip: "선내 미술품 경매 일정을 물어볼 때 묻습니다." },
  { en: "Where is the designated smoking area?", ko: "지정된 흡연 구역이 어디인가요?", tip: "흡연 가능한 장소를 찾을 때 씁니다." },
  { en: "Is smoking allowed on the balcony?", ko: "발코니에서 흡연이 허용되나요?", tip: "객실 발코니 흡연 규정을 확인할 때 사용합니다." },
  { en: "What time is the disembarkation briefing?", ko: "하선 설명회는 몇 시인가요?", tip: "여행 마지막 날 하선 절차 안내 시간을 물어볼 때 묻습니다." },
  { en: "Do I need to leave my luggage outside the door tonight?", ko: "오늘 밤에 짐을 문 밖에 내놓아야 하나요?", tip: "하선 전날 수하물 수거 규정을 확인할 때 씁니다." },
  { en: "What color are my luggage tags?", ko: "제 수하물 태그는 무슨 색인가요?", tip: "하선 그룹을 결정하는 태그 색상을 물어볼 때 사용합니다." },
  { en: "What time is my group scheduled to disembark?", ko: "제 그룹은 몇 시에 하선할 예정인가요?", tip: "자신의 하선 시간을 확인할 때 묻습니다." },
  { en: "Can I do self-assist disembarkation?", ko: "셀프 하선(직접 짐 들고 내리기)을 할 수 있나요?", tip: "위탁 없이 짐을 직접 들고 빨리 내리고 싶을 때 씁니다." },
  { en: "I will carry my own bags off the ship.", ko: "제 짐은 제가 직접 들고 배에서 내릴게요.", tip: "셀프 하선 의사를 명확히 밝힐 때 사용합니다." },
  { en: "Where is the meeting point for my shore excursion?", ko: "제 기항지 관광 모임 장소가 어디인가요?", tip: "투어 집합 장소를 찾을 때 묻습니다." },
  { en: "The excursion was canceled due to bad weather.", ko: "악천후로 인해 관광이 취소되었어요.", tip: "투어 취소 상황을 알리거나 확인할 때 씁니다." },
  { en: "Can I get a refund for the canceled tour?", ko: "취소된 투어에 대해 환불받을 수 있나요?", tip: "취소된 기항지 관광 환불을 요구할 때 사용합니다." },
  { en: "Is the tender boat running to the shore?", ko: "육지로 가는 텐더보트(연락선)가 운행 중인가요?", tip: "항구에 정박하지 못해 작은 배로 이동할 때 운행 여부를 묻습니다." },
  { en: "How often do the tender boats depart?", ko: "텐더보트는 얼마나 자주 출발하나요?", tip: "연락선 배차 간격을 확인할 때 씁니다." },
  { en: "The sea is very rough today.", ko: "오늘 파도가 아주 거치네요.", tip: "해상 날씨가 좋지 않아 배가 흔들릴 때 하는 말입니다." },
  { en: "I love the ocean view from my balcony.", ko: "제 발코니에서 보는 바다 전망이 너무 좋아요.", tip: "객실 뷰에 대한 만족감을 표현할 때 사용합니다." },
  { en: "Let's go up to the observation deck.", ko: "전망 데크로 올라가 봐요.", tip: "경치를 보기 위해 위층으로 가자고 제안할 때 씁니다." },
  { en: "Where is the aft of the ship?", ko: "배의 선미(뒤쪽)가 어디인가요?", tip: "배의 뒤편 방향을 찾을 때 묻습니다." },
  { en: "The bow is at the front of the ship.", ko: "선수(뱃머리)는 배의 앞쪽에 있어요.", tip: "배의 앞부분 위치를 설명하거나 확인할 때 사용합니다." },
  { en: "Is there an adults-only pool area?", ko: "성인 전용 수영장 구역이 있나요?", tip: "조용한 성인 전용 풀장을 찾을 때 묻습니다." },
  { en: "Can I rent a cabana by the pool?", ko: "수영장 옆 카바나를 대여할 수 있나요?", tip: "수영장 방갈로/카바나 대여를 문의할 때 씁니다." },
  { en: "What time does the nightclub close?", ko: "나이트클럽은 몇 시에 닫나요?", tip: "선내 클럽 영업 종료 시간을 확인할 때 사용합니다." },
  { en: "Are there any trivia games today?", ko: "오늘 퀴즈 게임이 있나요?", tip: "선내 오락 프로그램 중 퀴즈쇼 유무를 물어볼 때 묻습니다." },
  { en: "I'd like to participate in the karaoke night.", ko: "가라오케(노래방) 나이트에 참가하고 싶어요.", 기: "노래 부르기 행사에 참여 의사를 밝힐 때 씁니다." },
  { en: "This has been a wonderful cruise vacation.", ko: "정말 멋진 크루즈 휴가였어요.", tip: "여행을 마치며 만족감을 표현할 때 사용합니다." }
];

const sentencesFile = 'src/sentences.json';
const dictionaryFile = 'src/dictionary.json';

const sentencesData = JSON.parse(fs.readFileSync(sentencesFile, 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

if (!sentencesData.cruise) {
  sentencesData.cruise = [];
}

let addedSentences = 0;
for (const sentence of newSentences) {
  const exists = sentencesData.cruise.some(s => s.en === sentence.en);
  if (!exists) {
    sentencesData.cruise.push(sentence);
    addedSentences++;
  }
}

fs.writeFileSync(sentencesFile, JSON.stringify(sentencesData, null, 2));
console.log(`Added ${addedSentences} sentences to cruise category.`);

const dictKeys = new Set(Object.keys(dictionaryData).map(k => k.toLowerCase()));
const missingWords = new Set();

const stopWords = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'to', 'of', 'and', 'in', 'that', 'have', 'has', 'had', 'do', 'does', 'did', 'for', 'on', 'with', 'as', 'at', 'by', 'this', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'me', 'him', 'us', 'them']);

sentencesData.cruise.forEach(s => {
  const words = s.en.toLowerCase().replace(/[^a-z0-9\s-']/g, '').split(/\s+/);
  words.forEach(w => {
    if (w && !dictKeys.has(w) && !stopWords.has(w) && isNaN(w)) {
      missingWords.add(w);
    }
  });
});

console.log(JSON.stringify(Array.from(missingWords)));
