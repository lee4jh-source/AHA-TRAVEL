const baseData: Record<string, { title: string, sentences: { en: string, ko: string, tip: string }[] }> = {
  airport: {
    title: "1_공항",
    sentences: [
      { en: "Where is the check-in counter?", ko: "체크인 카운터가 어디인가요?", tip: "항공사 이름을 함께 말하면 더 좋습니다." },
      { en: "I have a connecting flight.", ko: "환승 항공편이 있습니다.", tip: "환승 게이트를 찾을 때 유용합니다." },
      { en: "Where is the baggage claim?", ko: "수하물 찾는 곳이 어디인가요?", tip: "도착 후 짐을 찾을 때 사용하세요." },
      { en: "Is this the flight to New York?", ko: "이게 뉴욕행 비행기 맞나요?", tip: "탑승 전 게이트에서 확인하세요." },
      { en: "Can I take this on the plane?", ko: "이걸 기내에 가지고 탈 수 있나요?", tip: "기내 수하물 규정을 물어볼 때 씁니다." },
      { en: "Where is the departure gate?", ko: "출발 게이트가 어디인가요?", tip: "보안 검색 후 게이트를 찾을 때 사용하세요." },
      { en: "My flight is delayed.", ko: "제 비행기가 지연되었어요.", tip: "지연 상황에서 안내 데스크에 문의할 때 씁니다." },
      { en: "I missed my flight.", ko: "비행기를 놓쳤어요.", tip: "다음 항공편을 알아봐야 할 때 쓰는 표현입니다." },
      { en: "Where can I get a luggage cart?", ko: "수하물 카트는 어디서 구하나요?", tip: "짐이 많을 때 유용합니다." },
      { en: "I have nothing to declare.", ko: "신고할 물품이 없습니다.", tip: "세관 검사 시 사용하는 표현입니다." }
    ]
  },
  hotel: {
    title: "2_호텔",
    sentences: [
      { en: "I'd like to check in, please.", ko: "체크인하고 싶습니다.", tip: "호텔 도착 시 가장 먼저 하는 말입니다." },
      { en: "I have a reservation under the name Kim.", ko: "김이라는 이름으로 예약했습니다.", tip: "'under the name' 표현을 기억하세요." },
      { en: "Could I get a late check-out?", ko: "레이트 체크아웃이 가능한가요?", tip: "늦게 퇴실하고 싶을 때 묻는 표현입니다." },
      { en: "The Wi-Fi isn't working.", ko: "와이파이가 안 돼요.", tip: "인터넷 문제가 있을 때 사용하세요." },
      { en: "Could you bring some extra towels?", ko: "수건 좀 더 가져다주시겠어요?", tip: "추가 물품을 요청할 때 'Could you bring'을 씁니다." },
      { en: "Where is the breakfast area?", ko: "조식 식당이 어디인가요?", tip: "아침 식사 장소를 물어볼 때 유용합니다." },
      { en: "Please make up my room.", ko: "방 청소 부탁드립니다.", tip: "외출 시 청소를 원할 때 쓰는 표현입니다." },
      { en: "I lost my room key.", ko: "방 열쇠를 잃어버렸어요.", tip: "프론트 데스크에 도움을 요청할 때 씁니다." },
      { en: "Can you keep my luggage?", ko: "짐을 보관해 주실 수 있나요?", tip: "체크아웃 후 짐을 맡길 때 유용합니다." },
      { en: "I'd like to check out.", ko: "체크아웃하겠습니다.", tip: "호텔을 떠날 때 하는 말입니다." }
    ]
  },
  dining: {
    title: "3_식당",
    sentences: [
      { en: "Table for two, please.", ko: "두 명 자리 부탁드립니다.", tip: "인원수를 말할 때 간단히 쓸 수 있습니다." },
      { en: "Can I see the menu?", ko: "메뉴판 좀 볼 수 있을까요?", tip: "메뉴를 요청할 때 쓰는 기본 표현입니다." },
      { en: "What do you recommend?", ko: "어떤 메뉴를 추천하시나요?", tip: "직원의 추천을 받고 싶을 때 유용합니다." },
      { en: "I'd like to order, please.", ko: "주문할게요.", tip: "주문할 준비가 되었을 때 직원을 부르는 표현입니다." },
      { en: "No cilantro, please.", ko: "고수는 빼주세요.", tip: "못 먹는 재료를 뺄 때 'No ~'를 사용하세요." },
      { en: "Could I get some water?", ko: "물 좀 주시겠어요?", tip: "물을 요청할 때 쓰는 표현입니다." },
      { en: "This is not what I ordered.", ko: "제가 주문한 게 아니에요.", tip: "잘못된 음식이 나왔을 때 정중히 말하세요." },
      { en: "Can we get the bill, please?", ko: "계산서 좀 주시겠어요?", tip: "식사를 마치고 계산할 때 씁니다." },
      { en: "Do you take credit cards?", ko: "신용카드 되나요?", tip: "결제 수단을 확인할 때 유용합니다." },
      { en: "Can I get this to go?", ko: "이거 포장해 주실 수 있나요?", tip: "남은 음식을 포장할 때 쓰는 표현입니다." }
    ]
  },
  transit: {
    title: "4_대중교통",
    sentences: [
      { en: "Which platform for Tokyo?", ko: "도쿄행은 몇 번 플랫폼인가요?", tip: "기차나 전철을 타는 플랫폼을 확인할 때 씁니다." },
      { en: "One ticket to London, please.", ko: "런던행 표 한 장 주세요.", tip: "표를 구매할 때 목적지와 수량을 말하세요." },
      { en: "Does this bus go to the airport?", ko: "이 버스 공항으로 가나요?", tip: "목적지가 맞는지 탑승 전 확인하세요." },
      { en: "How much is the fare?", ko: "요금이 얼마인가요?", tip: "교통 요금을 물어볼 때 사용합니다." },
      { en: "Where is the nearest subway station?", ko: "가장 가까운 지하철역이 어디인가요?", tip: "대중교통을 이용하려 할 때 묻습니다." },
      { en: "What is the next stop?", ko: "다음 역은 어디인가요?", tip: "내릴 곳을 확인할 때 유용합니다." },
      { en: "I missed my train.", ko: "기차를 놓쳤어요.", tip: "다음 기차를 알아봐야 할 때 역무원에게 말하세요." },
      { en: "Where can I buy a transit card?", ko: "교통카드는 어디서 살 수 있나요?", tip: "교통카드를 구매할 때 묻습니다." },
      { en: "Can I recharge my card here?", ko: "여기서 카드 충전할 수 있나요?", tip: "교통카드를 충전할 때 쓰는 표현입니다." },
      { en: "Please let me off at the next stop.", ko: "다음 정류장에서 내려주세요.", tip: "버스나 택시에서 내릴 때 사용하세요." }
    ]
  },
  shopping: {
    title: "5_쇼핑",
    sentences: [
      { en: "Where is the tax-free counter?", ko: "면세 카운터가 어디인가요?", tip: "세금 환급을 받을 때 위치를 묻습니다." },
      { en: "Do you have this in a larger size?", ko: "이거 더 큰 사이즈 있나요?", tip: "옷이나 신발 사이즈를 물어볼 때 씁니다." },
      { en: "Can I try this on?", ko: "이거 입어봐도 되나요?", tip: "피팅룸을 이용하고 싶을 때 사용하세요." },
      { en: "I'm just looking, thank you.", ko: "그냥 구경하는 중이에요, 감사합니다.", tip: "직원의 도움이 필요 없을 때 정중히 거절하는 말입니다." },
      { en: "How much is this?", ko: "이거 얼마인가요?", tip: "가격을 물어볼 때 쓰는 가장 기본적인 표현입니다." },
      { en: "Do you have any discounts?", ko: "할인되는 게 있나요?", tip: "할인 혜택을 확인할 때 유용합니다." },
      { en: "I will take this one.", ko: "이걸로 할게요.", tip: "구매를 결정했을 때 쓰는 표현입니다." },
      { en: "Can I get a receipt?", ko: "영수증 좀 주시겠어요?", tip: "결제 후 영수증을 요청할 때 씁니다." },
      { en: "Do you accept Apple Pay?", ko: "애플페이 결제 되나요?", tip: "모바일 결제 가능 여부를 묻습니다." },
      { en: "I would like to return this.", ko: "이거 반품하고 싶어요.", tip: "물건을 환불할 때 사용하는 표현입니다." }
    ]
  },
  cafe: {
    title: "6_카페",
    sentences: [
      { en: "I'd like an iced Americano, please.", ko: "아이스 아메리카노 한 잔 주세요.", tip: "가장 기본적인 커피 주문 표현입니다." },
      { en: "For here or to go?", ko: "드시고 가시나요, 포장하시나요?", tip: "(직원의 질문) 매장 이용 여부를 묻습니다." },
      { en: "To go, please.", ko: "포장해 주세요.", tip: "테이크아웃 할 때 대답하는 표현입니다." },
      { en: "Can I get an extra shot?", ko: "샷 추가해 주시겠어요?", tip: "커피를 진하게 마시고 싶을 때 씁니다." },
      { en: "With oat milk, please.", ko: "오트 밀크로 변경해 주세요.", tip: "우유 종류를 바꿀 때 유용합니다." },
      { en: "No syrup, please.", ko: "시럽은 빼 주세요.", tip: "단맛을 원하지 않을 때 사용하세요." },
      { en: "What is your best-selling dessert?", ko: "가장 잘 팔리는 디저트가 뭐예요?", tip: "디저트를 추천받고 싶을 때 묻습니다." },
      { en: "Where is the restroom?", ko: "화장실이 어디인가요?", tip: "카페 내 화장실 위치를 찾을 때 씁니다." },
      { en: "What is the Wi-Fi password?", ko: "와이파이 비밀번호가 뭐예요?", tip: "인터넷을 사용하고 싶을 때 묻습니다." },
      { en: "Can you heat this up?", ko: "이것 좀 데워 주시겠어요?", tip: "빵이나 샌드위치를 따뜻하게 먹고 싶을 때 요청하세요." }
    ]
  },
  emergency: {
    title: "7_위급상황",
    sentences: [
      { en: "Help me, please!", ko: "도와주세요!", tip: "긴급한 상황에서 크게 외칠 때 사용합니다." },
      { en: "Call an ambulance!", ko: "구급차를 불러주세요!", tip: "응급 환자가 발생했을 때 주변에 요청하세요." },
      { en: "I need a doctor.", ko: "의사가 필요해요.", tip: "의료적 도움이 시급할 때 씁니다." },
      { en: "Call the police!", ko: "경찰을 불러주세요!", tip: "범죄나 사고 발생 시 요청하는 표현입니다." },
      { en: "Fire!", ko: "불이야!", tip: "화재 발생 시 위험을 알릴 때 씁니다." },
      { en: "I lost my passport.", ko: "여권을 잃어버렸어요.", tip: "대사관이나 경찰서에서 가장 먼저 해야 할 말입니다." },
      { en: "My wallet was stolen.", ko: "지갑을 도난당했어요.", tip: "소매치기를 당했을 때 피해 사실을 알립니다." },
      { en: "Where is the Korean embassy?", ko: "한국 대사관이 어디인가요?", tip: "심각한 문제가 발생했을 때 대사관을 찾습니다." },
      { en: "Can I use your phone?", ko: "전화기 좀 빌릴 수 있을까요?", tip: "휴대폰이 없거나 안 터질 때 도움을 요청하세요." },
      { en: "I am lost.", ko: "길을 잃었어요.", tip: "길을 잃어 도움을 청할 때 유용합니다." }
    ]
  },
  hospital: {
    title: "8_병원",
    sentences: [
      { en: "I have a fever.", ko: "열이 나요.", tip: "증상을 설명할 때 'I have a ~' 패턴을 사용하세요." },
      { en: "My stomach hurts.", ko: "배가 아파요.", tip: "복통이 있을 때 쓰는 표현입니다." },
      { en: "I twisted my ankle.", ko: "발목을 삐었어요.", tip: "외상을 입었을 때 상황을 설명합니다." },
      { en: "I am allergic to penicillin.", ko: "페니실린 알레르기가 있어요.", tip: "알레르기 정보는 매우 중요하므로 정확히 전달하세요." },
      { en: "Can I get a medical certificate?", ko: "진단서를 받을 수 있나요?", tip: "보험 청구를 위해 필요한 서류입니다." },
      { en: "Do you have painkillers?", ko: "진통제 있나요?", tip: "두통이나 치통 등이 있을 때 약국에서 찾습니다." },
      { en: "I need medicine for a cold.", ko: "감기약이 필요해요.", tip: "감기 증상이 있을 때 약사에게 요청합니다." },
      { en: "Do I need a prescription for this?", ko: "이거 처방전이 필요한가요?", tip: "일반의약품인지 전문의약품인지 확인할 때 묻습니다." },
      { en: "How many pills should I take?", ko: "몇 알씩 먹어야 하나요?", tip: "복용량을 정확히 확인할 때 필수적인 질문입니다." },
      { en: "Does this make me sleepy?", ko: "이 약을 먹으면 졸린가요?", tip: "운전이나 일정을 앞두고 부작용을 확인할 때 묻습니다." }
    ]
  },
  police: {
    title: "9_경찰서_분실신고",
    sentences: [
      { en: "I want to report a theft.", ko: "도난 신고를 하고 싶습니다.", tip: "경찰서에 도착해서 방문 목적을 밝힐 때 씁니다." },
      { en: "My bag was stolen.", ko: "가방을 도난당했어요.", tip: "무엇을 도난당했는지 명확히 말하세요." },
      { en: "Where exactly did it happen?", ko: "정확히 어디서 발생했나요?", tip: "(경찰의 질문) 사건 발생 장소를 묻습니다." },
      { en: "It happened on the subway.", ko: "지하철에서 일어났어요.", tip: "사건이 발생한 장소를 대답할 때 유용합니다." },
      { en: "I need a police report for my insurance.", ko: "보험 청구를 위해 경찰 신고서가 필요해요.", tip: "여행자 보험 처리를 위해 꼭 필요한 서류입니다." },
      { en: "I lost my credit card.", ko: "신용카드를 분실했어요.", tip: "카드 분실 사실을 알릴 때 씁니다." },
      { en: "Can you help me find it?", ko: "찾는 것 좀 도와주시겠어요?", tip: "분실물 수색에 도움을 요청할 때 사용하세요." },
      { en: "Is there a lost and found office?", ko: "분실물 센터가 있나요?", tip: "역이나 공항에서 잃어버렸을 때 묻습니다." },
      { en: "I left my phone in the taxi.", ko: "택시에 휴대폰을 두고 내렸어요.", tip: "물건을 두고 내린 상황을 설명할 때 씁니다." },
      { en: "Here is my contact information.", ko: "제 연락처입니다.", tip: "물건을 찾았을 때 연락받기 위해 남깁니다." }
    ]
  },
  navigation: {
    title: "10_길찾기",
    sentences: [
      { en: "Excuse me, where is the museum?", ko: "실례합니다, 박물관이 어디인가요?", tip: "길을 물어볼 때 가장 기본적인 표현입니다." },
      { en: "How do I get to the station?", ko: "역에 어떻게 가나요?", tip: "목적지까지 가는 방법을 물어볼 때 많이 씁니다." },
      { en: "Is it far from here?", ko: "여기서 먼가요?", tip: "걸어갈 수 있는 거리인지 확인할 때 유용합니다." },
      { en: "Can I walk there?", ko: "거기까지 걸어갈 수 있나요?", tip: "도보 이동 가능 여부를 물어볼 때 씁니다." },
      { en: "Which way is downtown?", ko: "시내로 가려면 어느 방향인가요?", tip: "방향을 잡을 때 길을 묻는 표현입니다." },
      { en: "Could you show me on the map?", ko: "지도에서 보여주실 수 있나요?", tip: "말로 들어서 이해하기 어려울 때 요청하세요." },
      { en: "Go straight and turn left.", ko: "직진하다가 왼쪽으로 도세요.", tip: "(답변 예시) 방향 지시를 잘 듣고 따라가세요." },
      { en: "Is this the right way to the hotel?", ko: "이 길이 호텔 가는 길 맞나요?", tip: "제대로 가고 있는지 길을 확인받을 때 씁니다." },
      { en: "I think I'm lost.", ko: "길을 잃은 것 같아요.", tip: "현재 위치를 모르겠을 때 도움을 청하며 씁니다." },
      { en: "What is the name of this street?", ko: "이 거리 이름이 뭔가요?", tip: "현재 위치를 파악하기 위해 거리 이름을 묻습니다." }
    ]
  },
  sightseeing: {
    title: "11_관광지",
    sentences: [
      { en: "Two adult tickets, please.", ko: "어른 표 두 장 주세요.", tip: "입장권을 구매할 때 인원과 종류를 말하세요." },
      { en: "How much is the entrance fee?", ko: "입장료가 얼마인가요?", tip: "가격을 확인할 때 쓰는 표현입니다." },
      { en: "What time do you close?", ko: "몇 시에 문을 닫나요?", tip: "관람 가능 시간을 확인할 때 유용합니다." },
      { en: "Are we allowed to take pictures here?", ko: "여기서 사진 찍어도 되나요?", tip: "사진 촬영 허용 여부를 물어볼 때 씁니다." },
      { en: "Could you take a picture of us?", ko: "저희 사진 좀 찍어주시겠어요?", tip: "다른 사람에게 사진 촬영을 부탁할 때 사용하세요." },
      { en: "Do you have an audio guide in Korean?", ko: "한국어 오디오 가이드가 있나요?", tip: "한국어 설명이 필요할 때 묻습니다." },
      { en: "Where is the souvenir shop?", ko: "기념품 가게가 어디인가요?", tip: "기념품을 사고 싶을 때 위치를 물어봅니다." },
      { en: "Is there a guided tour available?", ko: "가이드 투어가 있나요?", tip: "전문적인 설명을 듣고 싶을 때 확인하세요." },
      { en: "Where is the meeting point?", ko: "모이는 장소가 어디인가요?", tip: "투어 시작 전 집결지를 확인할 때 씁니다." },
      { en: "How long does the tour take?", ko: "투어는 얼마나 걸리나요?", tip: "소요 시간을 물어볼 때 유용한 표현입니다." }
    ]
  },
  sim: {
    title: "12_통신",
    sentences: [
      { en: "I need a prepaid SIM card.", ko: "선불 유심칩이 필요해요.", tip: "유심을 구매할 때 쓰는 표현입니다." },
      { en: "Does this include unlimited data?", ko: "무제한 데이터가 포함되어 있나요?", tip: "데이터 용량을 확인할 때 중요합니다." },
      { en: "How much is it for 7 days?", ko: "7일 동안 얼마인가요?", tip: "기간별 요금을 물어볼 때 사용하세요." },
      { en: "Can you help me set it up?", ko: "설정하는 것 좀 도와주시겠어요?", tip: "직접 설정하기 어려울 때 도움을 요청하세요." },
      { en: "My eSIM is not working.", ko: "제 eSIM이 작동하지 않아요.", tip: "데이터 연결이 안 될 때 사용하세요." },
      { en: "I have no signal.", ko: "신호가 안 잡혀요.", tip: "서비스 안 됨(No Service) 상태일 때 씁니다." },
      { en: "Where is the SIM tray ejector?", ko: "유심 핀 어디 있나요?", tip: "물리 유심을 교체할 때 필요합니다." },
      { en: "My data is too slow.", ko: "데이터가 너무 느려요.", tip: "속도 저하 문제가 있을 때 불만을 표현합니다." },
      { en: "Can I top up my data?", ko: "데이터를 충전할 수 있나요?", tip: "데이터를 다 썼을 때 추가 구매를 묻습니다." },
      { en: "Do you sell international calling cards?", ko: "국제 전화 카드 파나요?", tip: "해외로 전화를 걸어야 할 때 유용합니다." }
    ]
  },
  bank: {
    title: "13_은행",
    sentences: [
      { en: "Where can I exchange money?", ko: "어디서 환전할 수 있나요?", tip: "환전소 위치를 물어볼 때 씁니다." },
      { en: "What is the exchange rate for dollars?", ko: "달러 환율이 어떻게 되나요?", tip: "현재 환율을 확인할 때 유용합니다." },
      { en: "I want to change Korean Won to Yen.", ko: "한국 돈을 엔화로 바꾸고 싶어요.", tip: "바꾸려는 화폐 단위를 명확히 말하세요." },
      { en: "Do you charge a commission?", ko: "수수료가 있나요?", tip: "환전 수수료 여부를 물어볼 때 씁니다." },
      { en: "Can I have it in small bills?", ko: "작은 단위 지폐로 주시겠어요?", tip: "잔돈이 필요할 때 유용한 표현입니다." },
      { en: "I want to withdraw some money.", ko: "돈을 좀 인출하고 싶어요.", tip: "ATM이나 창구에서 현금을 찾을 때 씁니다." },
      { en: "The ATM swallowed my card.", ko: "ATM이 제 카드를 삼켰어요.", tip: "카드가 기계에 걸렸을 때 즉시 도움을 요청하세요." },
      { en: "My card is declined.", ko: "제 카드가 거절되었어요.", tip: "결제 오류 시 은행이나 상점에 문의할 때 씁니다." },
      { en: "Can you break this into smaller bills?", ko: "이걸 잔돈으로 바꿔주실 수 있나요?", tip: "큰 돈을 작은 단위로 바꿀 때 사용하세요." },
      { en: "Is this the best rate you can offer?", ko: "이게 가장 좋은 환율인가요?", tip: "사설 환전소에서 흥정할 때 쓸 수 있습니다." }
    ]
  },
  communication: {
    title: "14_소통",
    sentences: [
      { en: "Hello, how are you?", ko: "안녕하세요, 잘 지내시죠?", tip: "가장 기본적인 인사말입니다." },
      { en: "Thank you very much.", ko: "정말 감사합니다.", tip: "감사를 표현할 때 씁니다." },
      { en: "Excuse me.", ko: "실례합니다.", tip: "사람을 부르거나 지나갈 때 유용합니다." },
      { en: "I'm sorry.", ko: "죄송합니다.", tip: "사과할 때 사용하는 표현입니다." },
      { en: "Nice to meet you.", ko: "만나서 반갑습니다.", tip: "처음 보는 사람과 인사할 때 씁니다." },
      { en: "Do you speak English?", ko: "영어 할 줄 아시나요?", tip: "의사소통이 가능한지 먼저 물어볼 때 사용하세요." },
      { en: "Please speak slowly.", ko: "천천히 말씀해 주세요.", tip: "상대방의 말이 너무 빠를 때 유용합니다." },
      { en: "I don't understand.", ko: "이해가 안 돼요.", tip: "무슨 말인지 모를 때 솔직하게 말하는 표현입니다." },
      { en: "Can you repeat that, please?", ko: "다시 한 번 말씀해 주시겠어요?", tip: "잘 못 들었을 때 다시 말해달라고 요청합니다." },
      { en: "How do you say this in English?", ko: "이걸 영어로 어떻게 말하나요?", tip: "단어나 표현을 모를 때 묻는 기본 문장입니다." }
    ]
  },
  cruise: {
    title: "15_크루즈여행",
    sentences: [
      { en: "Where is my cabin?", ko: "제 객실이 어디인가요?", tip: "배에 탑승한 후 방을 찾을 때 씁니다." },
      { en: "I feel seasick.", ko: "뱃멀미가 나요.", tip: "멀미약이 필요할 때 승무원에게 말하세요." },
      { en: "What time is the safety drill?", ko: "안전 훈련은 몇 시인가요?", tip: "크루즈 탑승 시 필수인 훈련 시간을 묻습니다." },
      { en: "Is food included in the price?", ko: "음식은 가격에 포함되어 있나요?", tip: "식사 비용에 대해 확인할 때 유용합니다." },
      { en: "Where is the main dining room?", ko: "메인 식당이 어디인가요?", tip: "정찬 식당의 위치를 물어볼 때 씁니다." },
      { en: "Can I book a shore excursion?", ko: "기항지 관광을 예약할 수 있나요?", tip: "배에서 내려서 하는 관광을 예약할 때 사용합니다." },
      { en: "What is the dress code for tonight?", ko: "오늘 밤 복장 규정이 어떻게 되나요?", tip: "저녁 식사나 파티의 드레스 코드를 묻습니다." },
      { en: "Where can I get a pool towel?", ko: "수영장 수건은 어디서 받나요?", tip: "수영장 이용 시 수건 위치를 물어볼 때 씁니다." },
      { en: "I need motion sickness pills.", ko: "멀미약이 필요해요.", tip: "의무실이나 프론트에서 약을 요청할 때 사용하세요." },
      { en: "What time do we arrive at the next port?", ko: "다음 항구에는 몇 시에 도착하나요?", tip: "기항지 도착 시간을 확인할 때 씁니다." }
    ]
  }
};

export const categoryData: Record<string, { title: string, sentences: { en: string, ko: string, tip: string }[] }> = baseData;
