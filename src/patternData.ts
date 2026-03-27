export interface PatternSentence {
  en: string;
  ko: string;
}

export interface PatternItem {
  id: number;
  pattern: string;
  meaning: string;
  context: string;
  sentences: PatternSentence[];
}

export const patternData: PatternItem[] = [
  {
    "id": 1,
    "pattern": "I'm about to...",
    "meaning": "막 ~하려던 참이야",
    "context": "곧 실행할 직전의 행동을 언급할 때",
    "sentences": [
      {
        "en": "I'm about to leave.",
        "ko": "막 나가려던 참이야."
      },
      {
        "en": "I'm about to eat lunch.",
        "ko": "막 점심 먹으려던 참이야."
      },
      {
        "en": "I'm about to call you.",
        "ko": "막 너한테 전화하려던 참이었어."
      },
      {
        "en": "I'm about to go to bed.",
        "ko": "막 자러 가려던 참이야."
      },
      {
        "en": "I'm about to start the meeting.",
        "ko": "막 회의를 시작하려던 참이야."
      },
      {
        "en": "I'm about to head out.",
        "ko": "막 출발하려던 참이야."
      },
      {
        "en": "I'm about to finish my homework.",
        "ko": "막 숙제를 끝내려던 참이야."
      },
      {
        "en": "I'm about to ask you the same thing.",
        "ko": "막 너한테 똑같은 걸 물어보려던 참이었어."
      },
      {
        "en": "I'm about to take a shower.",
        "ko": "막 샤워하려던 참이야."
      },
      {
        "en": "I'm about to tell you the truth.",
        "ko": "막 너한테 사실을 말하려던 참이었어."
      }
    ]
  },
  {
    "id": 2,
    "pattern": "I'm looking forward to -ing",
    "meaning": "~하기를 고대하고 있어",
    "context": "설레는 기대감이나 정중한 기다림을 표현할 때",
    "sentences": [
      {
        "en": "I'm looking forward to meeting you.",
        "ko": "당신을 만나기를 고대하고 있습니다."
      },
      {
        "en": "I'm looking forward to the weekend.",
        "ko": "주말이 기다려져."
      },
      {
        "en": "I'm looking forward to working with you.",
        "ko": "함께 일하게 되어 기대됩니다."
      },
      {
        "en": "I'm looking forward to seeing the movie.",
        "ko": "그 영화 보는 게 기대돼."
      },
      {
        "en": "I'm looking forward to your reply.",
        "ko": "당신의 답장을 기다리고 있겠습니다."
      },
      {
        "en": "I'm looking forward to going on vacation.",
        "ko": "휴가 가는 게 너무 기대돼."
      },
      {
        "en": "I'm looking forward to hearing from you.",
        "ko": "소식 듣기를 기다릴게요."
      },
      {
        "en": "I'm looking forward to the party tonight.",
        "ko": "오늘 밤 파티가 기대돼."
      },
      {
        "en": "I'm looking forward to trying this food.",
        "ko": "이 음식 먹어보는 게 기대돼."
      },
      {
        "en": "I'm looking forward to our next trip.",
        "ko": "우리 다음 여행이 기다려져."
      }
    ]
  },
  {
    "id": 3,
    "pattern": "It's time to...",
    "meaning": "~할 시간이야",
    "context": "마땅히 해야 할 일이나 시점을 상기시킬 때",
    "sentences": [
      {
        "en": "It's time to go home.",
        "ko": "집에 갈 시간이야."
      },
      {
        "en": "It's time to wake up.",
        "ko": "일어날 시간이야."
      },
      {
        "en": "It's time to make a decision.",
        "ko": "결정을 내릴 시간이야."
      },
      {
        "en": "It's time to say goodbye.",
        "ko": "작별 인사를 할 시간이야."
      },
      {
        "en": "It's time to take a break.",
        "ko": "잠시 쉴 시간이야."
      },
      {
        "en": "It's time to start the project.",
        "ko": "프로젝트를 시작할 시간이야."
      },
      {
        "en": "It's time to face the reality.",
        "ko": "현실을 직시할 시간이야."
      },
      {
        "en": "It's time to change your mind.",
        "ko": "네 마음을 바꿀 시간이야."
      },
      {
        "en": "It's time to clean the room.",
        "ko": "방 청소할 시간이야."
      },
      {
        "en": "It's time to move on.",
        "ko": "잊고 나아갈 시간이야."
      }
    ]
  },
  {
    "id": 4,
    "pattern": "I'd like to...",
    "meaning": "~하고 싶어요",
    "context": "원하는 바를 격식 있고 공손하게 제안할",
    "sentences": [
      {
        "en": "I'd like to order, please.",
        "ko": "주문하고 싶어요."
      },
      {
        "en": "I'd like to introduce myself.",
        "ko": "제 소개를 하고 싶습니다."
      },
      {
        "en": "I'd like to confirm my reservation.",
        "ko": "예약을 확인하고 싶어요."
      },
      {
        "en": "I'd like to know more about it.",
        "ko": "그것에 대해 더 알고 싶어요."
      },
      {
        "en": "I'd like to ask a question.",
        "ko": "질문 하나 하고 싶습니다."
      },
      {
        "en": "I'd like to talk to the manager.",
        "ko": "매니저와 이야기하고 싶어요."
      },
      {
        "en": "I'd like to thank everyone here.",
        "ko": "여기 계신 모든 분께 감사드리고 싶습니다."
      },
      {
        "en": "I'd like to stay a little longer.",
        "ko": "조금 더 머물고 싶어요."
      },
      {
        "en": "I'd like to book a flight to Paris.",
        "ko": "파리행 비행기를 예약하고 싶어요."
      },
      {
        "en": "I'd like to share my thoughts.",
        "ko": "제 생각을 공유하고 싶습니다."
      }
    ]
  },
  {
    "id": 5,
    "pattern": "I'm not sure if...",
    "meaning": "~인지 잘 모르겠어",
    "context": "확신이 없음을 나타내거나 거절을 부드럽게 할 때",
    "sentences": [
      {
        "en": "I'm not sure if I can make it.",
        "ko": "내가 갈 수 있을지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if he likes me.",
        "ko": "그가 나를 좋아하는지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if this is right.",
        "ko": "이게 맞는지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if I have enough time.",
        "ko": "시간이 충분할지 모르겠어."
      },
      {
        "en": "I'm not sure if they will arrive on time.",
        "ko": "그들이 제시간에 도착할지 모르겠어."
      },
      {
        "en": "I'm not sure if I should go there.",
        "ko": "거기에 가야 할지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if I can help you.",
        "ko": "내가 널 도울 수 있을지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if it's going to rain.",
        "ko": "비가 올지 잘 모르겠어."
      },
      {
        "en": "I'm not sure if I left the lights on.",
        "ko": "불을 켜두고 왔는지 모르겠어."
      },
      {
        "en": "I'm not sure if she remembers me.",
        "ko": "그녀가 나를 기억할지 잘 모르겠어."
      }
    ]
  },
  {
    "id": 6,
    "pattern": "How about -ing?",
    "meaning": "~하는 게 어때?",
    "context": "가벼운 의견을 제안하거나 상대의 의사를 물을 때",
    "sentences": [
      {
        "en": "How about going for a walk?",
        "ko": "산책하러 가는 게 어때?"
      },
      {
        "en": "How about ordering pizza tonight?",
        "ko": "오늘 밤에 피자 시켜 먹는 게 어때?"
      },
      {
        "en": "How about taking a break for a while?",
        "ko": "잠깐 쉬는 게 어때?"
      },
      {
        "en": "How about watching a movie this weekend?",
        "ko": "이번 주말에 영화 보는 게 어때?"
      },
      {
        "en": "How about trying this new restaurant?",
        "ko": "이 새로운 식당에 가보는 게 어때?"
      },
      {
        "en": "How about wearing the blue dress?",
        "ko": "파란색 드레스를 입는 게 어때?"
      },
      {
        "en": "How about inviting him to the party?",
        "ko": "그를 파티에 초대하는 게 어때?"
      },
      {
        "en": "How about taking a taxi instead?",
        "ko": "대신 택시를 타는 게 어때?"
      },
      {
        "en": "How about buying some flowers for her?",
        "ko": "그녀에게 꽃을 좀 사주는 게 어때?"
      },
      {
        "en": "How about finishing this later?",
        "ko": "이걸 나중에 끝내는 게 어때?"
      }
    ]
  },
  {
    "id": 7,
    "pattern": "Do you mind if I...?",
    "meaning": "~해도 괜찮을까요?",
    "context": "상대방에게 예의를 갖추어 허락이나 양해를 구할 때",
    "sentences": [
      {
        "en": "Do you mind if I sit here?",
        "ko": "여기 앉아도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I open the window?",
        "ko": "창문을 열어도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I ask a personal question?",
        "ko": "개인적인 질문을 해도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I join you?",
        "ko": "제가 합류해도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I use your phone?",
        "ko": "당신의 전화를 써도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I take a photo?",
        "ko": "사진을 찍어도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I leave a bit early?",
        "ko": "조금 일찍 나가도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I turn on the air conditioner?",
        "ko": "에어컨을 틀어도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I change the channel?",
        "ko": "채널을 바꿔도 괜찮을까요?"
      },
      {
        "en": "Do you mind if I bring my friend?",
        "ko": "친구를 데려와도 괜찮을까요?"
      }
    ]
  },
  {
    "id": 8,
    "pattern": "You should have + p.p",
    "meaning": "~했어야 했어",
    "context": "이미 지난 일에 대한 후회나 아쉬운 마음을 전할 때",
    "sentences": [
      {
        "en": "You should have told me earlier.",
        "ko": "나한테 진작 말했어야지."
      },
      {
        "en": "You should have come to the party.",
        "ko": "파티에 왔어야 했어."
      },
      {
        "en": "You should have studied harder.",
        "ko": "공부를 더 열심히 했어야 했어."
      },
      {
        "en": "You should have bought that jacket.",
        "ko": "그 재킷을 샀어야 했어."
      },
      {
        "en": "You should have listened to my advice.",
        "ko": "내 조언을 들었어야 했어."
      },
      {
        "en": "You should have seen his face.",
        "ko": "너 걔 표정을 봤어야 했어."
      },
      {
        "en": "You should have worn a warmer coat.",
        "ko": "더 따뜻한 코트를 입었어야 했어."
      },
      {
        "en": "You should have slept more last night.",
        "ko": "어젯밤에 잠을 더 잤어야 했어."
      },
      {
        "en": "You should have been more careful.",
        "ko": "좀 더 조심했어야 했어."
      },
      {
        "en": "You should have called me when you arrived.",
        "ko": "도착했을 때 나한테 전화했어야지."
      }
    ]
  },
  {
    "id": 9,
    "pattern": "I feel like -ing",
    "meaning": "~하고 싶은 기분이야",
    "context": "지금 당장 드는 본능적인 욕구나 충동을 말할 때",
    "sentences": [
      {
        "en": "I feel like crying for no reason.",
        "ko": "이유 없이 울고 싶은 기분이야."
      },
      {
        "en": "I feel like eating something sweet.",
        "ko": "단 게 먹고 싶은 기분이야."
      },
      {
        "en": "I feel like going for a drive.",
        "ko": "드라이브 가고 싶은 기분이야."
      },
      {
        "en": "I feel like doing nothing today.",
        "ko": "오늘은 아무것도 안 하고 싶은 기분이야."
      },
      {
        "en": "I feel like staying at home.",
        "ko": "집에 있고 싶은 기분이야."
      },
      {
        "en": "I feel like having a cold beer.",
        "ko": "시원한 맥주 한 잔 마시고 싶은 기분이야."
      },
      {
        "en": "I feel like watching a movie.",
        "ko": "영화를 보고 싶은 기분이야."
      },
      {
        "en": "I feel like dancing in the rain.",
        "ko": "빗속에서 춤추고 싶은 기분이야."
      },
      {
        "en": "I feel like talking to someone.",
        "ko": "누구랑 이야기하고 싶은 기분이야."
      },
      {
        "en": "I feel like traveling to Hawaii.",
        "ko": "하와이로 여행 가고 싶은 기분이야."
      }
    ]
  },
  {
    "id": 10,
    "pattern": "Can I help you with...?",
    "meaning": "~을 도와드릴까요?",
    "context": "구체적인 도움을 주고자 호의를 베풀 때",
    "sentences": [
      {
        "en": "Can I help you with those heavy bags?",
        "ko": "그 무거운 가방들 좀 도와드릴까요?"
      },
      {
        "en": "Can I help you with your homework?",
        "ko": "네 숙제 좀 도와줄까?"
      },
      {
        "en": "Can I help you with the dishes?",
        "ko": "설거지하는 것 좀 도와드릴까요?"
      },
      {
        "en": "Can I help you with the project?",
        "ko": "프로젝트 하는 거 좀 도와줄까?"
      },
      {
        "en": "Can I help you with your search?",
        "ko": "찾으시는 거 도와드릴까요?"
      },
      {
        "en": "Can I help you with the cooking?",
        "ko": "요리하는 거 좀 도와드릴까요?"
      },
      {
        "en": "Can I help you with that box?",
        "ko": "그 상자 옮기는 거 도와줄까?"
      },
      {
        "en": "Can I help you with your choice?",
        "ko": "선택하시는 거 도와드릴까요?"
      },
      {
        "en": "Can I help you with the laundry?",
        "ko": "빨래하는 거 좀 도와줄까?"
      },
      {
        "en": "Can I help you with your luggage?",
        "ko": "짐 옮기는 거 도와드릴까요?"
      }
    ]
  },
  {
    "id": 11,
    "pattern": "I'm calling to...",
    "meaning": "~하려고 전화했어",
    "context": "비즈니스 전화나 일상적인 용건을 말할 때 가장 먼저 내뱉는 핵심 문장입니다.",
    "sentences": [
      {
        "en": "I'm calling to make a reservation.",
        "ko": "예약을 하려고 전화드렸어요."
      },
      {
        "en": "I'm calling to check on my order.",
        "ko": "제 주문 상태를 확인하려고 전화했어요."
      },
      {
        "en": "I'm calling to say happy birthday.",
        "ko": "생일 축하한다고 말하려고 전화했어."
      },
      {
        "en": "I'm calling to ask for a favor.",
        "ko": "부탁 하나 하려고 전화했어."
      },
      {
        "en": "I'm calling to confirm our meeting.",
        "ko": "우리 회의를 확인하려고 전화드렸습니다."
      },
      {
        "en": "I'm calling to cancel my appointment.",
        "ko": "예약을 취소하려고 전화했어요."
      },
      {
        "en": "I'm calling to invite you to lunch.",
        "ko": "점심 식사에 초대하려고 전화했어."
      },
      {
        "en": "I'm calling to see how you are doing.",
        "ko": "어떻게 지내나 궁금해서 전화했어."
      },
      {
        "en": "I'm calling to apologize for what happened.",
        "ko": "일어난 일에 대해 사과하려고 전화했어."
      },
      {
        "en": "I'm calling to thank you for the gift.",
        "ko": "선물 고맙다고 말하려고 전화했어."
      }
    ]
  },
  {
    "id": 12,
    "pattern": "It seems like...",
    "meaning": "~인 것 같아",
    "context": "단정 짓기보다는 상황을 보고 짐작할 때 쓰기 아주 좋은 부드러운 표현입니다.",
    "sentences": [
      {
        "en": "It seems like it's going to rain.",
        "ko": "비가 올 것 같아."
      },
      {
        "en": "It seems like you are tired today.",
        "ko": "오늘 좀 피곤해 보이네."
      },
      {
        "en": "It seems like there's a misunderstanding.",
        "ko": "오해가 좀 있는 것 같아."
      },
      {
        "en": "It seems like we are lost.",
        "ko": "우리 길을 잃은 것 같아."
      },
      {
        "en": "It seems like he knows the answer.",
        "ko": "그가 답을 알고 있는 것 같아."
      },
      {
        "en": "It seems like a good idea.",
        "ko": "좋은 생각인 것 같아."
      },
      {
        "en": "It seems like time is flying.",
        "ko": "시간이 참 빨리 가는 것 같아."
      },
      {
        "en": "It seems like they are having a fight.",
        "ko": "걔네 싸우고 있는 것 같아."
      },
      {
        "en": "It seems like everything is under control.",
        "ko": "모든 게 잘 통제되고 있는 것 같아."
      },
      {
        "en": "It seems like you've changed your mind.",
        "ko": "네가 마음을 바꾼 것 같네."
      }
    ]
  },
  {
    "id": 13,
    "pattern": "No wonder...",
    "meaning": "어쩐지 ~하더라 / ~하는 것도 당연해",
    "context": "원인을 알게 되었을 때 무릎을 탁 치며 쓰는 표현입니다.",
    "sentences": [
      {
        "en": "No wonder you're so tired.",
        "ko": "어쩐지 네가 너무 피곤해하더라."
      },
      {
        "en": "No wonder it's so cold today.",
        "ko": "어쩐지 오늘 너무 춥더라."
      },
      {
        "en": "No wonder she's angry at you.",
        "ko": "그녀가 너한테 화난 게 당연해."
      },
      {
        "en": "No wonder this place is famous.",
        "ko": "어쩐지 여기가 유명하더라."
      },
      {
        "en": "No wonder he didn't show up.",
        "ko": "어쩐지 걔가 안 나타나더라."
      },
      {
        "en": "No wonder you like this movie.",
        "ko": "네가 이 영화를 좋아하는 게 당연해."
      },
      {
        "en": "No wonder the car won't start.",
        "ko": "어쩐지 차가 시동이 안 걸리더라."
      },
      {
        "en": "No wonder they are best friends.",
        "ko": "어쩐지 둘이 단짝이더라."
      },
      {
        "en": "No wonder prices are going up.",
        "ko": "물가가 오르는 것도 당연해."
      },
      {
        "en": "No wonder you're so good at English.",
        "ko": "어쩐지 영어를 정말 잘하시더라고요."
      }
    ]
  },
  {
    "id": 14,
    "pattern": "I've decided to...",
    "meaning": "~하기로 결심했어",
    "context": "단순한 생각이 아니라 '결정'을 내렸음을 강조할 때 씁니다.",
    "sentences": [
      {
        "en": "I've decided to quit smoking.",
        "ko": "담배를 끊기로 결심했어."
      },
      {
        "en": "I've decided to move to a new city.",
        "ko": "새로운 도시로 이사 가기로 했어."
      },
      {
        "en": "I've decided to take a cooking class.",
        "ko": "요리 수업을 듣기로 했어."
      },
      {
        "en": "I've decided to start my own business.",
        "ko": "내 사업을 시작하기로 결심했어."
      },
      {
        "en": "I've decided to forgive him.",
        "ko": "그를 용서하기로 했어."
      },
      {
        "en": "I've decided to buy a new laptop.",
        "ko": "새 노트북을 사기로 결정했어."
      },
      {
        "en": "I've decided to stay home tonight.",
        "ko": "오늘 밤엔 집에 있기로 했어."
      },
      {
        "en": "I've decided to learn a new language.",
        "ko": "새로운 언어를 배우기로 결심했어."
      },
      {
        "en": "I've decided to change my lifestyle.",
        "ko": "생활 방식을 바꾸기로 했어."
      },
      {
        "en": "I've decided to accept the job offer.",
        "ko": "그 일자리 제안을 받아들이기로 했어."
      }
    ]
  },
  {
    "id": 15,
    "pattern": "I'm afraid",
    "meaning": "that)... (유감스럽게도 ~인 것 같아 / ~일까 봐 걱정돼",
    "context": "상대방에게 거절하거나 안 좋은 소식을 전할 때 예의를 차리는 마법의 문장입니다.",
    "sentences": [
      {
        "en": "I'm afraid I can't help you.",
        "ko": "유감스럽게도 도와드릴 수가 없네요."
      },
      {
        "en": "I'm afraid we're out of stock.",
        "ko": "죄송하지만 재고가 다 떨어졌습니다."
      },
      {
        "en": "I'm afraid I have bad news.",
        "ko": "유감스럽지만 안 좋은 소식이 있어요."
      },
      {
        "en": "I'm afraid I'll be late.",
        "ko": "아무래도 제가 늦을 것 같아요."
      },
      {
        "en": "I'm afraid you have the wrong number.",
        "ko": "죄송하지만 전화를 잘못 거신 것 같아요."
      },
      {
        "en": "I'm afraid it's too late now.",
        "ko": "아쉽지만 지금은 너무 늦은 것 같네요."
      },
      {
        "en": "I'm afraid I don't understand.",
        "ko": "죄송하지만 이해가 잘 안 가요."
      },
      {
        "en": "I'm afraid the weather will be bad.",
        "ko": "날씨가 안 좋을까 봐 걱정되네요."
      },
      {
        "en": "I'm afraid I forgot your name.",
        "ko": "죄송하지만 성함을 잊어버렸어요."
      },
      {
        "en": "I'm afraid we have to cancel the trip.",
        "ko": "유감스럽지만 여행을 취소해야 할 것 같아요."
      }
    ]
  },
  {
    "id": 16,
    "pattern": "Don't forget to...",
    "meaning": "~하는 거 잊지 마",
    "context": "상대가 꼭 챙겨야 할 일을 당부하고 확인시킬 때",
    "sentences": [
      {
        "en": "Don't forget to lock the door.",
        "ko": "문 잠그는 거 잊지 마."
      },
      {
        "en": "Don't forget to bring your umbrella.",
        "ko": "우산 가져오는 거 잊지 마."
      },
      {
        "en": "Don't forget to call your mom.",
        "ko": "어머니께 전화 드리는 거 잊지 마."
      },
      {
        "en": "Don't forget to turn off the lights.",
        "ko": "불 끄는 거 잊지 마."
      },
      {
        "en": "Don't forget to send the email.",
        "ko": "이메일 보내는 거 잊지 마."
      },
      {
        "en": "Don't forget to buy some milk.",
        "ko": "우유 사는 거 잊지 마."
      },
      {
        "en": "Don't forget to take your medicine.",
        "ko": "약 먹는 거 잊지 마."
      },
      {
        "en": "Don't forget to sign the document.",
        "ko": "서류에 서명하는 거 잊지 마."
      },
      {
        "en": "Don't forget to set the alarm.",
        "ko": "알람 맞추는 거 잊지 마."
      },
      {
        "en": "Don't forget to smile.",
        "ko": "웃는 거 잊지 마."
      }
    ]
  },
  {
    "id": 17,
    "pattern": "Is it okay if I...?",
    "meaning": "~해도 될까요?",
    "context": "자신의 행동이 상대에게 괜찮은지 허락을 구할 때",
    "sentences": [
      {
        "en": "Is it okay if I sit here?",
        "ko": "여기 앉아도 될까요?"
      },
      {
        "en": "Is it okay if I use your laptop?",
        "ko": "네 노트북 좀 써도 될까?"
      },
      {
        "en": "Is it okay if I ask a question?",
        "ko": "질문 하나 해도 될까요?"
      },
      {
        "en": "Is it okay if I come over tonight?",
        "ko": "오늘 밤에 놀러 가도 될까?"
      },
      {
        "en": "Is it okay if I open the window?",
        "ko": "창문 좀 열어도 될까요?"
      },
      {
        "en": "Is it okay if I call you later?",
        "ko": "나중에 전화해도 될까?"
      },
      {
        "en": "Is it okay if I leave early?",
        "ko": "좀 일찍 가도 될까요?"
      },
      {
        "en": "Is it okay if I change the channel?",
        "ko": "채널 바꿔도 될까요?"
      },
      {
        "en": "Is it okay if I borrow this book?",
        "ko": "이 책 좀 빌려도 될까?"
      },
      {
        "en": "Is it okay if I stay a bit longer?",
        "ko": "조금 더 머물러도 될까요?"
      }
    ]
  },
  {
    "id": 18,
    "pattern": "I'm thinking of -ing",
    "meaning": "~할까 생각 중이야",
    "context": "확정은 아니지만 머릿속으로 계획을 구상할 때",
    "sentences": [
      {
        "en": "I'm thinking of buying a new car.",
        "ko": "새 차를 살까 생각 중이야."
      },
      {
        "en": "I'm thinking of moving to Seoul.",
        "ko": "서울로 이사 갈까 생각 중이야."
      },
      {
        "en": "I'm thinking of changing my hair style.",
        "ko": "헤어 스타일을 바꿀까 생각 중이야."
      },
      {
        "en": "I'm thinking of quitting my job.",
        "ko": "회사를 그만둘까 생각 중이야."
      },
      {
        "en": "I'm thinking of starting a YouTube channel.",
        "ko": "유튜브 채널을 시작할까 생각 중이야."
      },
      {
        "en": "I'm thinking of getting a pet.",
        "ko": "반려동물을 키울까 생각 중이야."
      },
      {
        "en": "I'm thinking of taking a yoga class.",
        "ko": "요가 수업을 들을까 생각 중이야."
      },
      {
        "en": "I'm thinking of traveling alone.",
        "ko": "혼자 여행을 갈까 생각 중이야."
      },
      {
        "en": "I'm thinking of learning how to cook.",
        "ko": "요리를 배워볼까 생각 중이야."
      },
      {
        "en": "I'm thinking of selling my old clothes.",
        "ko": "헌 옷들을 팔까 생각 중이야."
      }
    ]
  },
  {
    "id": 19,
    "pattern": "I'll let you know...",
    "meaning": "~를 알려줄게",
    "context": "정보나 사실을 나중에 확인해서 전달해 주겠다고 할 때",
    "sentences": [
      {
        "en": "I'll let you know when I arrive.",
        "ko": "도착하면 알려줄게."
      },
      {
        "en": "I'll let you know the result soon.",
        "ko": "곧 결과를 알려드릴게요."
      },
      {
        "en": "I'll let you know if I'm free tomorrow.",
        "ko": "내일 시간 되는지 알려줄게."
      },
      {
        "en": "I'll let you know about the schedule.",
        "ko": "일정에 대해 알려줄게."
      },
      {
        "en": "I'll let you know what she says.",
        "ko": "그녀가 뭐라고 하는지 알려줄게."
      },
      {
        "en": "I'll let you know the price later.",
        "ko": "가격은 나중에 알려줄게."
      },
      {
        "en": "I'll let you know my decision by Friday.",
        "ko": "금요일까지 내 결정을 알려줄게."
      },
      {
        "en": "I'll let you know how it goes.",
        "ko": "어떻게 되어가는지 알려줄게."
      },
      {
        "en": "I'll let you know where the meeting is.",
        "ko": "회의 장소가 어디인지 알려줄게."
      },
      {
        "en": "I'll let you know if anything changes.",
        "ko": "변동 사항이 있으면 알려줄게."
      }
    ]
  },
  {
    "id": 20,
    "pattern": "I'm happy to...",
    "meaning": "~하게 되어 기뻐",
    "context": "좋은 일을 맡거나 소식을 전하게 되어 만족스러울 때",
    "sentences": [
      {
        "en": "I'm happy to help you.",
        "ko": "당신을 돕게 되어 기뻐요."
      },
      {
        "en": "I'm happy to see you again.",
        "ko": "다시 만나서 반가워."
      },
      {
        "en": "I'm happy to hear the good news.",
        "ko": "좋은 소식을 들어서 기뻐."
      },
      {
        "en": "I'm happy to join the team.",
        "ko": "팀에 합류하게 되어 기쁩니다."
      },
      {
        "en": "I'm happy to share my experience.",
        "ko": "제 경험을 공유하게 되어 기뻐요."
      },
      {
        "en": "I'm happy to announce the winner.",
        "ko": "우승자를 발표하게 되어 기쁩니다."
      },
      {
        "en": "I'm happy to work with you.",
        "ko": "당신과 일하게 되어 기뻐요."
      },
      {
        "en": "I'm happy to be here today.",
        "ko": "오늘 여기 오게 되어 기쁩니다."
      },
      {
        "en": "I'm happy to accept your invitation.",
        "ko": "초대에 응하게 되어 기뻐요."
      },
      {
        "en": "I'm happy to meet your family.",
        "ko": "너희 가족을 만나게 되어 기뻐."
      }
    ]
  },
  {
    "id": 21,
    "pattern": "Make sure to...",
    "meaning": "반드시 ~하도록 해",
    "context": "실수 없이 꼭 해야 할 일을 강조하여 지시할 때",
    "sentences": [
      {
        "en": "Make sure to double-check your work.",
        "ko": "작업한 거 반드시 재확인해."
      },
      {
        "en": "Make sure to bring your passport.",
        "ko": "반드시 여권 챙겨와."
      },
      {
        "en": "Make sure to arrive on time.",
        "ko": "반드시 제시간에 도착하도록 해."
      },
      {
        "en": "Make sure to save the file.",
        "ko": "파일 반드시 저장해."
      },
      {
        "en": "Make sure to wear a seatbelt.",
        "ko": "반드시 안전벨트를 매."
      },
      {
        "en": "Make sure to finish this by tomorrow.",
        "ko": "반드시 내일까지 이거 끝내."
      },
      {
        "en": "Make sure to stay hydrated.",
        "ko": "반드시 수분을 충분히 섭취해."
      },
      {
        "en": "Make sure to close the windows.",
        "ko": "창문 꼭 닫도록 해."
      },
      {
        "en": "Make sure to tell him the truth.",
        "ko": "그에게 반드시 사실을 말해."
      },
      {
        "en": "Make sure to follow the instructions.",
        "ko": "반드시 지시 사항을 따라."
      }
    ]
  },
  {
    "id": 22,
    "pattern": "I've been -ing",
    "meaning": "계속 ~해오고 있어",
    "context": "과거부터 지금까지 쭉 이어온 행동을 강조할 때",
    "sentences": [
      {
        "en": "I've been waiting for you.",
        "ko": "너 계속 기다리고 있었어."
      },
      {
        "en": "I've been studying English for years.",
        "ko": "수년째 영어를 공부해오고 있어."
      },
      {
        "en": "I've been working on this project.",
        "ko": "이 프로젝트를 계속 진행해오고 있어."
      },
      {
        "en": "I've been thinking about you.",
        "ko": "계속 네 생각 하고 있었어."
      },
      {
        "en": "I've been feeling a bit tired lately.",
        "ko": "요즘 계속 좀 피곤하네."
      },
      {
        "en": "I've been looking for my keys.",
        "ko": "내 열쇠를 계속 찾고 있어."
      },
      {
        "en": "I've been living here since 2010.",
        "ko": "2010년부터 여기서 계속 살고 있어."
      },
      {
        "en": "I've been trying to call you.",
        "ko": "너한테 계속 전화하려고 했었어."
      },
      {
        "en": "I've been practicing the piano.",
        "ko": "피아노를 계속 연습하고 있어."
      },
      {
        "en": "I've been watching that TV show.",
        "ko": "그 티비 쇼를 계속 보고 있어."
      }
    ]
  },
  {
    "id": 23,
    "pattern": "There's something...",
    "meaning": "~한 게 좀 있어",
    "context": "구체적인 할 말이나 문제가 있음을 암시할 때",
    "sentences": [
      {
        "en": "There's something I need to tell you.",
        "ko": "너한테 할 말이 좀 있어."
      },
      {
        "en": "There's something wrong with my phone.",
        "ko": "내 핸드폰에 좀 문제가 있어."
      },
      {
        "en": "There's something fishy about this.",
        "ko": "이거 좀 수상한 구석이 있어."
      },
      {
        "en": "There's something I don't understand.",
        "ko": "이해가 안 가는 게 좀 있어."
      },
      {
        "en": "There's something important to discuss.",
        "ko": "논의할 중요한 게 좀 있어."
      },
      {
        "en": "There's something missing here.",
        "ko": "여기에 뭐가 좀 빠졌어."
      },
      {
        "en": "There's something bothering me.",
        "ko": "나를 괴롭히는 게 좀 있어."
      },
      {
        "en": "There's something special for you.",
        "ko": "너를 위한 특별한 게 좀 있어."
      },
      {
        "en": "There's something I want to buy.",
        "ko": "사고 싶은 게 좀 있어."
      },
      {
        "en": "There's something on your face.",
        "ko": "얼굴에 뭐 묻었어."
      }
    ]
  },
  {
    "id": 24,
    "pattern": "I cannot help -ing",
    "meaning": "~하지 않을 수 없어",
    "context": "감정이나 상황을 억제하지 못하고 결국 하게 될 때",
    "sentences": [
      {
        "en": "I cannot help laughing.",
        "ko": "웃지 않을 수가 없어."
      },
      {
        "en": "I cannot help worrying about him.",
        "ko": "그가 걱정되지 않을 수가 없어."
      },
      {
        "en": "I cannot help crying.",
        "ko": "울지 않을 수가 없어."
      },
      {
        "en": "I cannot help feeling sorry for her.",
        "ko": "그녀가 안쓰럽게 느껴지지 않을 수 없어."
      },
      {
        "en": "I cannot help thinking that way.",
        "ko": "그렇게 생각하지 않을 수가 없어."
      },
      {
        "en": "I cannot help falling in love with you.",
        "ko": "너와 사랑에 빠지지 않을 수 없어."
      },
      {
        "en": "I cannot help wondering why.",
        "ko": "왜 그런지 궁금해하지 않을 수 없어."
      },
      {
        "en": "I cannot help agreeing with you.",
        "ko": "네 말에 동의하지 않을 수 없어."
      },
      {
        "en": "I cannot help noticing her talent.",
        "ko": "그녀의 재능을 알아보지 않을 수 없어."
      },
      {
        "en": "I cannot help buying this.",
        "ko": "이걸 사지 않을 수가 없어."
      }
    ]
  },
  {
    "id": 25,
    "pattern": "Do you want me to...?",
    "meaning": "내가 ~해줄까?",
    "context": "상대방이 원하는지 확인하며 도움을 제안할 때",
    "sentences": [
      {
        "en": "Do you want me to help you?",
        "ko": "내가 도와줄까?"
      },
      {
        "en": "Do you want me to pick you up?",
        "ko": "내가 데리러 갈까?"
      },
      {
        "en": "Do you want me to call him?",
        "ko": "내가 그에게 전화해줄까?"
      },
      {
        "en": "Do you want me to open the door?",
        "ko": "내가 문 열어줄까?"
      },
      {
        "en": "Do you want me to carry this for you?",
        "ko": "내가 이거 들어줄까?"
      },
      {
        "en": "Do you want me to stay here?",
        "ko": "내가 여기 있을까?"
      },
      {
        "en": "Do you want me to buy some coffee?",
        "ko": "내가 커피 좀 사 올까?"
      },
      {
        "en": "Do you want me to explain it again?",
        "ko": "내가 다시 설명해줄까?"
      },
      {
        "en": "Do you want me to send the file?",
        "ko": "내가 그 파일 보내줄까?"
      },
      {
        "en": "Do you want me to wait for you?",
        "ko": "내가 너 기다려줄까?"
      }
    ]
  },
  {
    "id": 26,
    "pattern": "I was wondering if...",
    "meaning": "~해도 될지 궁금해요",
    "context": "조심스럽고 공손하게 부탁이나 질문을 던질 때",
    "sentences": [
      {
        "en": "I was wondering if you could help me.",
        "ko": "저를 좀 도와주실 수 있는지 궁금해요."
      },
      {
        "en": "I was wondering if we could meet today.",
        "ko": "우리 오늘 만날 수 있을지 궁금해요."
      },
      {
        "en": "I was wondering if I could borrow your pen.",
        "ko": "당신의 펜을 빌릴 수 있을지 궁금해요."
      },
      {
        "en": "I was wondering if you have some time.",
        "ko": "시간이 좀 있으신지 궁금해요."
      },
      {
        "en": "I was wondering if it's okay to sit here.",
        "ko": "여기 앉아도 괜찮을지 궁금해요."
      },
      {
        "en": "I was wondering if you liked the gift.",
        "ko": "당신이 선물을 좋아했는지 궁금해요."
      },
      {
        "en": "I was wondering if I could join you.",
        "ko": "제가 합류해도 될지 궁금해요."
      },
      {
        "en": "I was wondering if you knew the truth.",
        "ko": "당신이 사실을 알고 있었는지 궁금해요."
      },
      {
        "en": "I was wondering if there is a discount.",
        "ko": "할인이 되는지 궁금해요."
      },
      {
        "en": "I was wondering if we can reschedule.",
        "ko": "일정을 변경할 수 있을지 궁금해요."
      }
    ]
  },
  {
    "id": 27,
    "pattern": "I'm worried about...",
    "meaning": "~이 걱정돼",
    "context": "불안하거나 마음이 쓰이는 대상에 대해 말할 때",
    "sentences": [
      {
        "en": "I'm worried about the exam.",
        "ko": "시험이 걱정돼."
      },
      {
        "en": "I'm worried about your health.",
        "ko": "네 건강이 걱정돼."
      },
      {
        "en": "I'm worried about the future.",
        "ko": "미래가 걱정돼."
      },
      {
        "en": "I'm worried about missing the bus.",
        "ko": "버스를 놓칠까 봐 걱정돼."
      },
      {
        "en": "I'm worried about what people think.",
        "ko": "사람들이 어떻게 생각할지 걱정돼."
      },
      {
        "en": "I'm worried about the environment.",
        "ko": "환경이 걱정돼."
      },
      {
        "en": "I'm worried about the deadline.",
        "ko": "마감 기한이 걱정돼."
      },
      {
        "en": "I'm worried about my family.",
        "ko": "가족이 걱정돼."
      },
      {
        "en": "I'm worried about making a mistake.",
        "ko": "실수할까 봐 걱정돼."
      },
      {
        "en": "I'm worried about the weather.",
        "ko": "날씨가 걱정돼."
      }
    ]
  },
  {
    "id": 28,
    "pattern": "I'm used to...",
    "meaning": "~에 익숙해",
    "context": "낯설었던 일이 반복되어 이제는 편안해졌을 때",
    "sentences": [
      {
        "en": "I'm used to spicy food.",
        "ko": "매운 음식에 익숙해."
      },
      {
        "en": "I'm used to waking up early.",
        "ko": "일찍 일어나는 것에 익숙해."
      },
      {
        "en": "I'm used to living alone.",
        "ko": "혼자 사는 것에 익숙해."
      },
      {
        "en": "I'm used to this noise.",
        "ko": "이 소음에 익숙해."
      },
      {
        "en": "I'm used to working late.",
        "ko": "늦게까지 일하는 것에 익숙해."
      },
      {
        "en": "I'm used to driving in the city.",
        "ko": "도시에서 운전하는 것에 익숙해."
      },
      {
        "en": "I'm used to his personality.",
        "ko": "그의 성격에 익숙해."
      },
      {
        "en": "I'm used to using this computer.",
        "ko": "이 컴퓨터를 사용하는 것에 익숙해."
      },
      {
        "en": "I'm used to public speaking.",
        "ko": "대중 앞에서 말하는 것에 익숙해."
      },
      {
        "en": "I'm used to the cold weather.",
        "ko": "추운 날씨에 익숙해."
      }
    ]
  },
  {
    "id": 29,
    "pattern": "I'm supposed to...",
    "meaning": "~하기로 되어 있어",
    "context": "약속, 규칙, 의무로 정해진 일을 언급할 때",
    "sentences": [
      {
        "en": "I'm supposed to meet him at six.",
        "ko": "6시에 그를 만나기로 되어 있어."
      },
      {
        "en": "I'm supposed to finish this today.",
        "ko": "오늘 이걸 끝내기로 되어 있어."
      },
      {
        "en": "I'm supposed to be on a diet.",
        "ko": "나 다이어트 하기로 되어 있어/하는 중이어야 해."
      },
      {
        "en": "I'm supposed to call my boss.",
        "ko": "상사에게 전화하기로 되어 있어."
      },
      {
        "en": "I'm supposed to go to the gym.",
        "ko": "체육관에 가기로 되어 있어."
      },
      {
        "en": "What am I supposed to do?",
        "ko": "내가 뭘 해야 하지?"
      },
      {
        "en": "I'm supposed to bring the cake.",
        "ko": "내가 케이크를 가져오기로 되어 있어."
      },
      {
        "en": "You're supposed to be sleeping.",
        "ko": "너 지금 자고 있어야 하잖아."
      },
      {
        "en": "I'm supposed to stay home.",
        "ko": "집에 있기로 되어 있어."
      },
      {
        "en": "I'm supposed to send the report.",
        "ko": "보고서를 보내기로 되어 있어."
      }
    ]
  },
  {
    "id": 30,
    "pattern": "I didn't mean to...",
    "meaning": "~하려던 의도는 아니었어",
    "context": "실수에 대해 변명하거나 오해를 풀고자 할 때",
    "sentences": [
      {
        "en": "I didn't mean to hurt your feelings.",
        "ko": "네 기분을 상하게 하려던 의도는 아니었어."
      },
      {
        "en": "I didn't mean to break it.",
        "ko": "그걸 깨뜨리려던 건 아니었어."
      },
      {
        "en": "I didn't mean to be rude.",
        "ko": "무례하게 굴려던 건 아니었어."
      },
      {
        "en": "I didn't mean to keep you waiting.",
        "ko": "널 기다리게 하려던 건 아니었어."
      },
      {
        "en": "I didn't mean to start a fight.",
        "ko": "싸움을 걸려던 건 아니었어."
      },
      {
        "en": "I didn't mean to wake you up.",
        "ko": "널 깨우려던 건 아니었어."
      },
      {
        "en": "I didn't mean to scare you.",
        "ko": "널 놀라게 하려던 건 아니었어."
      },
      {
        "en": "I didn't mean to lie to you.",
        "ko": "너한테 거짓말하려던 건 아니었어."
      },
      {
        "en": "I didn't mean to step on your foot.",
        "ko": "발을 밟으려던 건 아니었어."
      },
      {
        "en": "I didn't mean to offend anyone.",
        "ko": "누군가를 불쾌하게 하려던 의도는 아니었어."
      }
    ]
  },
  {
    "id": 31,
    "pattern": "You don't have to...",
    "meaning": "~할 필요 없어",
    "context": "상대의 부담을 덜어주며 의무가 아님을 알려줄 때",
    "sentences": [
      {
        "en": "You don't have to hurry.",
        "ko": "서두를 필요 없어."
      },
      {
        "en": "You don't have to worry about me.",
        "ko": "내 걱정은 안 해도 돼."
      },
      {
        "en": "You don't have to pay for this.",
        "ko": "이건 네가 안 내도 돼."
      },
      {
        "en": "You don't have to say anything.",
        "ko": "아무 말도 안 해도 돼."
      },
      {
        "en": "You don't have to come if you're busy.",
        "ko": "바쁘면 안 와도 돼."
      },
      {
        "en": "You don't have to do it right now.",
        "ko": "지금 당장 할 필요 없어."
      },
      {
        "en": "You don't have to agree with me.",
        "ko": "내 말에 동의하지 않아도 돼."
      },
      {
        "en": "You don't have to explain yourself.",
        "ko": "해명할 필요 없어."
      },
      {
        "en": "You don't have to wear a suit.",
        "ko": "양복을 입을 필요는 없어."
      },
      {
        "en": "You don't have to take it seriously.",
        "ko": "그걸 심각하게 받아들일 필요 없어."
      }
    ]
  },
  {
    "id": 32,
    "pattern": "You'd better...",
    "meaning": "~하는 게 좋을 거야",
    "context": "하지 않으면 불이익이 있을 수 있음을 강하게 충고할 때",
    "sentences": [
      {
        "en": "You'd better go now.",
        "ko": "지금 가는 게 좋을 거야."
      },
      {
        "en": "You'd better listen to me.",
        "ko": "내 말을 듣는 게 좋을 거야."
      },
      {
        "en": "You'd better be careful.",
        "ko": "조심하는 게 좋을 거야."
      },
      {
        "en": "You'd better finish your homework.",
        "ko": "숙제를 끝내는 게 좋을 거야."
      },
      {
        "en": "You'd better tell the truth.",
        "ko": "사실대로 말하는 게 좋을 거야."
      },
      {
        "en": "You'd better not miss the bus.",
        "ko": "버스를 안 놓치는 게 좋을 거야."
      },
      {
        "en": "You'd better check the weather.",
        "ko": "날씨를 확인하는 게 좋을 거야."
      },
      {
        "en": "You'd better stay at home.",
        "ko": "집에 있는 게 좋을 거야."
      },
      {
        "en": "You'd better wear a coat.",
        "ko": "코트를 입는 게 좋을 거야."
      },
      {
        "en": "You'd better call the doctor.",
        "ko": "의사에게 전화하는 게 좋을 거야."
      }
    ]
  },
  {
    "id": 33,
    "pattern": "It’s no use -ing",
    "meaning": "~해도 소용없어",
    "context": "이미 늦었거나 노력이 헛수고가 된 상태를 말할 때",
    "sentences": [
      {
        "en": "It’s no use crying over spilled milk.",
        "ko": "이미 엎질러진 물이야/울어도 소용없어."
      },
      {
        "en": "It’s no use waiting for him.",
        "ko": "그를 기다려도 소용없어."
      },
      {
        "en": "It’s no use complaining now.",
        "ko": "이제 와서 불평해도 소용없어."
      },
      {
        "en": "It’s no use trying to fix it.",
        "ko": "그걸 고치려고 노력해도 소용없어."
      },
      {
        "en": "It’s no use worrying about it.",
        "ko": "그것에 대해 걱정해도 소용없어."
      },
      {
        "en": "It’s no use asking her again.",
        "ko": "그녀에게 다시 물어봐도 소용없어."
      },
      {
        "en": "It’s no use arguing with him.",
        "ko": "그와 논쟁해봐야 소용없어."
      },
      {
        "en": "It’s no use hiding the truth.",
        "ko": "진실을 숨겨도 소용없어."
      },
      {
        "en": "It’s no use apologizing.",
        "ko": "사과해도 소용없어."
      },
      {
        "en": "It’s no use regretting the past.",
        "ko": "과거를 후회해도 소용없어."
      }
    ]
  },
  {
    "id": 34,
    "pattern": "There is no way...",
    "meaning": "~일 리가 없어",
    "context": "가능성이 전혀 없다고 강하게 부정할 때",
    "sentences": [
      {
        "en": "There is no way he forgot.",
        "ko": "그가 잊어버렸을 리가 없어."
      },
      {
        "en": "There is no way to finish this.",
        "ko": "이걸 끝낼 방법이 없어."
      },
      {
        "en": "There is no way she is lying.",
        "ko": "그녀가 거짓말할 리가 없어."
      },
      {
        "en": "There is no way to open this door.",
        "ko": "이 문을 열 방법이 전혀 없어."
      },
      {
        "en": "There is no way I'm going back.",
        "ko": "내가 돌아갈 리가 없어/절대 안 돌아가."
      },
      {
        "en": "There is no way out.",
        "ko": "빠져나갈 방법이 없어."
      },
      {
        "en": "There is no way to please everyone.",
        "ko": "모두를 만족시킬 방법은 없어."
      },
      {
        "en": "There is no way this is happening.",
        "ko": "이런 일이 일어날 리가 없어."
      },
      {
        "en": "There is no way they will find us.",
        "ko": "그들이 우리를 찾아낼 리가 없어."
      },
      {
        "en": "There is no way I can afford that.",
        "ko": "내가 그걸 감당할 수 있을 리가 없어."
      }
    ]
  },
  {
    "id": 35,
    "pattern": "As far as I know...",
    "meaning": "내가 알기로는...",
    "context": "자신의 지식 범위 내에서 정보를 조심스레 공유할 때",
    "sentences": [
      {
        "en": "As far as I know, he is coming.",
        "ko": "내가 알기로는 그는 올 거야."
      },
      {
        "en": "As far as I know, it's free.",
        "ko": "내가 알기로는 그건 무료야."
      },
      {
        "en": "As far as I know, the shop is closed.",
        "ko": "내가 알기로는 그 가게 문 닫았어."
      },
      {
        "en": "As far as I know, she lives in Seoul.",
        "ko": "내가 알기로는 그녀는 서울에 살아."
      },
      {
        "en": "As far as I know, the meeting is at 2.",
        "ko": "내가 알기로는 회의는 2시야."
      },
      {
        "en": "As far as I know, there is no problem.",
        "ko": "내가 알기로는 아무 문제 없어."
      },
      {
        "en": "As far as I know, he is single.",
        "ko": "내가 알기로는 그는 미혼이야."
      },
      {
        "en": "As far as I know, they are moving.",
        "ko": "내가 알기로는 그들은 이사 갈 거야."
      },
      {
        "en": "As far as I know, it's a secret.",
        "ko": "내가 알기로는 그건 비밀이야."
      },
      {
        "en": "As far as I know, he's the best.",
        "ko": "내가 알기로는 그가 최고야."
      }
    ]
  },
  {
    "id": 36,
    "pattern": "It takes",
    "meaning": "time) to... (~하는 데 (시간)이 걸려",
    "context": "특정 작업에 소요되는 시간의 양을 설명할 때",
    "sentences": [
      {
        "en": "It takes ten minutes to get there.",
        "ko": "거기 가는 데 10분 걸려."
      },
      {
        "en": "It takes a long time to learn English.",
        "ko": "영어를 배우는 데 오랜 시간이 걸려."
      },
      {
        "en": "It takes an hour to finish this.",
        "ko": "이걸 끝내는 데 한 시간 걸려."
      },
      {
        "en": "It takes forever to download this file.",
        "ko": "이 파일 다운로드하는 데 한참 걸리네."
      },
      {
        "en": "It takes courage to say no.",
        "ko": "아니라고 말하는 데는 용기가 필요해."
      },
      {
        "en": "It takes two hours to fly to Osaka.",
        "ko": "오사카까지 비행기로 2시간 걸려."
      },
      {
        "en": "It takes effort to change a habit.",
        "ko": "습관을 바꾸는 데는 노력이 들어."
      },
      {
        "en": "It takes a few days to process your order.",
        "ko": "주문을 처리하는 데 며칠이 걸려요."
      },
      {
        "en": "It takes five minutes to walk to the station.",
        "ko": "역까지 걸어서 5분 걸려."
      },
      {
        "en": "It takes time to heal a broken heart.",
        "ko": "상처받은 마음을 치유하는 데는 시간이 걸려."
      }
    ]
  },
  {
    "id": 37,
    "pattern": "I'm having trouble -ing",
    "meaning": "~하는 데 어려움을 겪고 있어",
    "context": "어떤 일이 잘 안 풀려 곤란한 상태임을 알릴 때",
    "sentences": [
      {
        "en": "I'm having trouble sleeping lately.",
        "ko": "요즘 잠을 자는 데 어려움을 겪고 있어."
      },
      {
        "en": "I'm having trouble finding my keys.",
        "ko": "열쇠를 찾는 데 애를 먹고 있어."
      },
      {
        "en": "I'm having trouble understanding this.",
        "ko": "이걸 이해하는 데 어려움이 있어."
      },
      {
        "en": "I'm having trouble connecting to the Wi-Fi.",
        "ko": "와이파이 연결하는 데 문제가 있어."
      },
      {
        "en": "I'm having trouble breathing.",
        "ko": "숨 쉬는 게 좀 힘들어."
      },
      {
        "en": "I'm having trouble starting the car.",
        "ko": "차 시동 거는 데 애를 먹고 있어."
      },
      {
        "en": "I'm having trouble opening this jar.",
        "ko": "이 병을 여는 게 잘 안돼."
      },
      {
        "en": "I'm having trouble keeping my balance.",
        "ko": "중심을 잡는 데 어려움을 겪고 있어."
      },
      {
        "en": "I'm having trouble remembering names.",
        "ko": "이름을 기억하는 게 잘 안돼."
      },
      {
        "en": "I'm having trouble focusing on my work.",
        "ko": "업무에 집중하는 데 어려움이 있어."
      }
    ]
  },
  {
    "id": 38,
    "pattern": "I'm planning to...",
    "meaning": "~할 계획이야",
    "context": "앞으로 할 구체적인 일정이나 목표를 밝힐 때",
    "sentences": [
      {
        "en": "I'm planning to go abroad next year.",
        "ko": "내년에 해외에 갈 계획이야."
      },
      {
        "en": "I'm planning to start a new business.",
        "ko": "새로운 사업을 시작할 계획이야."
      },
      {
        "en": "I'm planning to move next month.",
        "ko": "다음 달에 이사할 계획이야."
      },
      {
        "en": "I'm planning to visit my grandparents.",
        "ko": "조부모님을 뵈러 갈 계획이야."
      },
      {
        "en": "I'm planning to take a day off.",
        "ko": "하루 쉴 계획이야."
      },
      {
        "en": "I'm planning to buy a new laptop.",
        "ko": "새 노트북을 살 계획이야."
      },
      {
        "en": "I'm planning to cook something special.",
        "ko": "특별한 요리를 할 계획이야."
      },
      {
        "en": "I'm planning to stay at a hotel.",
        "ko": "호텔에 머물 계획이야."
      },
      {
        "en": "I'm planning to study abroad.",
        "ko": "유학을 갈 계획이야."
      },
      {
        "en": "I'm planning to invite them for dinner.",
        "ko": "그들을 저녁 식사에 초대할 계획이야."
      }
    ]
  },
  {
    "id": 39,
    "pattern": "I'm in the middle of...",
    "meaning": "한창 ~하는 중이야",
    "context": "현재 몰두하고 있는 작업 때문에 바쁜 상태일 때",
    "sentences": [
      {
        "en": "I'm in the middle of something.",
        "ko": "나 지금 뭐 좀 하는 중이야."
      },
      {
        "en": "I'm in the middle of a meeting.",
        "ko": "한창 회의하는 중이야."
      },
      {
        "en": "I'm in the middle of lunch.",
        "ko": "한창 점심 먹는 중이야."
      },
      {
        "en": "I'm in the middle of a phone call.",
        "ko": "한창 통화 중이야."
      },
      {
        "en": "I'm in the middle of cleaning my room.",
        "ko": "한창 방 청소하는 중이야."
      },
      {
        "en": "I'm in the middle of writing a report.",
        "ko": "보고서를 쓰는 중이야."
      },
      {
        "en": "I'm in the middle of a game.",
        "ko": "한창 게임 하는 중이야."
      },
      {
        "en": "I'm in the middle of cooking dinner.",
        "ko": "저녁 요리하는 중이야."
      },
      {
        "en": "I'm in the middle of a workout.",
        "ko": "한창 운동 중이야."
      },
      {
        "en": "I'm in the middle of an important task.",
        "ko": "중요한 업무를 처리하는 중이야."
      }
    ]
  },
  {
    "id": 40,
    "pattern": "That's why...",
    "meaning": "그래서 ~한 거야",
    "context": "앞서 설명한 이유에 대한 최종 결과를 강조할 때",
    "sentences": [
      {
        "en": "That's why I'm here.",
        "ko": "그래서 내가 여기 있는 거야."
      },
      {
        "en": "That's why I called you.",
        "ko": "그래서 너한테 전화한 거야."
      },
      {
        "en": "That's why she is so upset.",
        "ko": "그래서 그녀가 그렇게 화가 난 거야."
      },
      {
        "en": "That's why I love this city.",
        "ko": "그래서 내가 이 도시를 사랑하는 거야."
      },
      {
        "en": "That's why I quit my job.",
        "ko": "그래서 회사를 그만둔 거야."
      },
      {
        "en": "That's why I was late.",
        "ko": "그래서 내가 늦은 거야."
      },
      {
        "en": "That's why it's so expensive.",
        "ko": "그래서 이게 그렇게 비싼 거야."
      },
      {
        "en": "That's why I didn't tell you.",
        "ko": "그래서 너한테 말 안 한 거야."
      },
      {
        "en": "That's why we need to hurry.",
        "ko": "그래서 우리가 서둘러야 하는 거야."
      },
      {
        "en": "That's why I'm studying English.",
        "ko": "그래서 내가 영어를 공부하는 거야."
      }
    ]
  },
  {
    "id": 41,
    "pattern": "That's what I...",
    "meaning": "그게 바로 내가 ~한 거야",
    "context": "상대가 언급한 내용이 바로 자신의 의도임을 확인할 때",
    "sentences": [
      {
        "en": "That's what I meant.",
        "ko": "그게 바로 내 뜻이야."
      },
      {
        "en": "That's what I said.",
        "ko": "그게 바로 내가 했던 말이야."
      },
      {
        "en": "That's what I thought.",
        "ko": "그게 바로 내가 생각했던 거야."
      },
      {
        "en": "That's what I heard.",
        "ko": "그게 바로 내가 들은 거야."
      },
      {
        "en": "That's what I wanted to say.",
        "ko": "그게 바로 내가 말하고 싶었던 거야."
      },
      {
        "en": "That's what I need.",
        "ko": "그게 바로 내게 필요한 거야."
      },
      {
        "en": "That's what I am looking for.",
        "ko": "그게 바로 내가 찾고 있는 거야."
      },
      {
        "en": "That's what I like about you.",
        "ko": "그게 바로 내가 좋아하는 너의 모습이야."
      },
      {
        "en": "That's what I was afraid of.",
        "ko": "그게 바로 내가 걱정했던 거야."
      },
      {
        "en": "That's what I was going to do.",
        "ko": "그게 바로 내가 하려던 거야."
      }
    ]
  },
  {
    "id": 42,
    "pattern": "Feel free to...",
    "meaning": "마음 편히 ~하세요",
    "context": "상대방이 부담 없이 행동하도록 허락하고 격려할 때",
    "sentences": [
      {
        "en": "Feel free to ask questions.",
        "ko": "편하게 질문하세요."
      },
      {
        "en": "Feel free to call me anytime.",
        "ko": "언제든 편하게 전화해."
      },
      {
        "en": "Feel free to join us.",
        "ko": "편하게 우리와 함께해."
      },
      {
        "en": "Feel free to use my computer.",
        "ko": "내 컴퓨터 편하게 써."
      },
      {
        "en": "Feel free to stay as long as you want.",
        "ko": "원하는 만큼 편히 머무세요."
      },
      {
        "en": "Feel free to take a seat.",
        "ko": "편하게 앉으세요."
      },
      {
        "en": "Feel free to contact me if you need help.",
        "ko": "도움이 필요하면 편하게 연락해."
      },
      {
        "en": "Feel free to look around.",
        "ko": "편하게 둘러보세요."
      },
      {
        "en": "Feel free to share your thoughts.",
        "ko": "편하게 의견을 나누어 주세요."
      },
      {
        "en": "Feel free to come over.",
        "ko": "편하게 놀러 와."
      }
    ]
  },
  {
    "id": 43,
    "pattern": "I can't afford to...",
    "meaning": "~할 여유가 없어",
    "context": "경제적으로나 시간적으로 한계가 있음을 나타낼 때",
    "sentences": [
      {
        "en": "I can't afford to buy this car.",
        "ko": "이 차를 살 형편이 안 돼."
      },
      {
        "en": "I can't afford to lose this job.",
        "ko": "이 직장을 잃을 여유가 없어."
      },
      {
        "en": "I can't afford to waste time.",
        "ko": "시간을 낭비할 여유가 없어."
      },
      {
        "en": "I can't afford to travel this year.",
        "ko": "올해는 여행 갈 여유가 없어."
      },
      {
        "en": "I can't afford to fail.",
        "ko": "실패할 여유가 없어."
      },
      {
        "en": "I can't afford to make any mistakes.",
        "ko": "실수를 할 여유가 없어."
      },
      {
        "en": "I can't afford to live in this area.",
        "ko": "이 지역에 살 형편이 안 돼."
      },
      {
        "en": "I can't afford to take a break.",
        "ko": "쉴 틈이 없어."
      },
      {
        "en": "I can't afford to pay for the repair.",
        "ko": "수리비를 낼 여유가 없어."
      },
      {
        "en": "I can't afford to wait any longer.",
        "ko": "더 이상 기다릴 여유가 없어."
      }
    ]
  },
  {
    "id": 44,
    "pattern": "I'll help you...",
    "meaning": "네가 ~하는 걸 도와줄게",
    "context": "상대가 하는 구체적인 동작을 함께 돕겠다고 할 때",
    "sentences": [
      {
        "en": "I'll help you with the dishes.",
        "ko": "설거지하는 거 도와줄게."
      },
      {
        "en": "I'm going to help you move out.",
        "ko": "이사 나가는 거 도와줄게."
      },
      {
        "en": "I'll help you find your cat.",
        "ko": "고양이 찾는 거 도와줄게."
      },
      {
        "en": "I'll help you clean the house.",
        "ko": "집 청소하는 거 도와줄게."
      },
      {
        "en": "I'll help you solve the problem.",
        "ko": "문제 해결하는 거 도와줄게."
      },
      {
        "en": "I'll help you pack your bags.",
        "ko": "짐 싸는 거 도와줄게."
      },
      {
        "en": "I'll help you study for the test.",
        "ko": "시험공부 하는 거 도와줄게."
      },
      {
        "en": "I'll help you install the software.",
        "ko": "소프트웨어 설치하는 거 도와줄게."
      },
      {
        "en": "I'll help you carry these boxes.",
        "ko": "이 상자들 옮기는 거 도와줄게."
      },
      {
        "en": "I'll help you prepare for the party.",
        "ko": "파티 준비하는 거 도와줄게."
      }
    ]
  },
  {
    "id": 45,
    "pattern": "I'm ready to...",
    "meaning": "~할 준비가 됐어",
    "context": "모든 준비를 마치고 시작할 단계임을 선언할 때",
    "sentences": [
      {
        "en": "I'm ready to go.",
        "ko": "갈 준비 됐어."
      },
      {
        "en": "I'm ready to order.",
        "ko": "주문할 준비 됐어요."
      },
      {
        "en": "I'm ready to start the project.",
        "ko": "프로젝트 시작할 준비 됐어."
      },
      {
        "en": "I'm ready to listen to you.",
        "ko": "들을 준비 됐어."
      },
      {
        "en": "I'm ready to make a change.",
        "ko": "변화할 준비가 됐어."
      },
      {
        "en": "I'm ready to face the challenge.",
        "ko": "도전에 맞설 준비가 됐어."
      },
      {
        "en": "I'm ready to go to bed.",
        "ko": "자러 갈 준비 됐어."
      },
      {
        "en": "I'm ready to give my presentation.",
        "ko": "발표할 준비 됐어."
      },
      {
        "en": "I'm ready to move on.",
        "ko": "잊고 나아갈 준비가 됐어."
      },
      {
        "en": "I'm ready to sign the contract.",
        "ko": "계약서에 서명할 준비 됐어."
      }
    ]
  },
  {
    "id": 46,
    "pattern": "How do you like...?",
    "meaning": "~은 어떠세요?",
    "context": "물건이나 상태에 대한 상대방의 주관적 만족도를 물을 때",
    "sentences": [
      {
        "en": "How do you like your coffee?",
        "ko": "커피 어떻게 드릴까요? / 커피 맛 어때요?"
      },
      {
        "en": "How do you like your new job?",
        "ko": "새 직장은 어때?"
      },
      {
        "en": "How do you like this weather?",
        "ko": "이 날씨 어때요?"
      },
      {
        "en": "How do you like living here?",
        "ko": "여기 사는 거 어때?"
      },
      {
        "en": "How do you like the movie?",
        "ko": "영화 어때?"
      },
      {
        "en": "How do you like your steak cooked?",
        "ko": "스테이크 굽기는 어떻게 해드릴까요?"
      },
      {
        "en": "How do you like my new haircut?",
        "ko": "내 새 머리 스타일 어때?"
      },
      {
        "en": "How do you like the food?",
        "ko": "음식 맛이 어떠세요?"
      },
      {
        "en": "How do you like working with him?",
        "ko": "그랑 일하는 거 어때?"
      },
      {
        "en": "How do you like this dress on me?",
        "ko": "이 드레스 나한테 어때 보여?"
      }
    ]
  },
  {
    "id": 47,
    "pattern": "What do you mean by...?",
    "meaning": "~라는 게 무슨 뜻이야?",
    "context": "상대의 말이나 의도가 모호해서 명확한 설명을 요구할 때",
    "sentences": [
      {
        "en": "What do you mean by that?",
        "ko": "그게 무슨 뜻이야?"
      },
      {
        "en": "What do you mean by \"expensive\"?",
        "ko": "\"비싸다\"는 게 무슨 뜻이야? / 얼마나 비싸다는 거야?"
      },
      {
        "en": "What do you mean by \"soon\"?",
        "ko": "\"곧\"이라는 게 언제쯤을 말하는 거야?"
      },
      {
        "en": "What do you mean by \"impossible\"?",
        "ko": "\"불가능하다\"는 게 무슨 뜻이야?"
      },
      {
        "en": "What do you mean by success?",
        "ko": "네가 말하는 성공이란 게 뭐야?"
      },
      {
        "en": "What do you mean by \"later\"?",
        "ko": "\"나중에\"가 정확히 언제야?"
      },
      {
        "en": "What do you mean by changing the plan?",
        "ko": "계획을 바꾼다는 게 무슨 소리야?"
      },
      {
        "en": "What do you mean by giving up?",
        "ko": "포기한다니 그게 무슨 말이야?"
      },
      {
        "en": "What do you mean by \"danger\"?",
        "ko": "\"위험\"이라니 무슨 뜻이야?"
      },
      {
        "en": "What do you mean by his behavior?",
        "ko": "그의 행동이 무슨 의도라는 거야?"
      }
    ]
  },
  {
    "id": 48,
    "pattern": "Can you tell me how to...?",
    "meaning": "~하는 방법 좀 알려줄래?",
    "context": "모르는 방식이나 경로를 구체적으로 가르쳐 달라고 할 때",
    "sentences": [
      {
        "en": "Can you tell me how to get to the airport?",
        "ko": "공항 가는 방법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to use this machine?",
        "ko": "이 기계 쓰는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to cook this?",
        "ko": "이거 요리하는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to make a reservation?",
        "ko": "예약하는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to solve this problem?",
        "ko": "이 문제 푸는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to reach him?",
        "ko": "그에게 연락하는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to improve my English?",
        "ko": "영어 실력 키우는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to fix this?",
        "ko": "이거 고치는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to save money?",
        "ko": "돈 모으는 법 좀 알려줄래?"
      },
      {
        "en": "Can you tell me how to get a refund?",
        "ko": "환불받는 법 좀 알려줄래?"
      }
    ]
  },
  {
    "id": 49,
    "pattern": "Is there anything...?",
    "meaning": "뭐 ~할 거 있을까?",
    "context": "필요한 것이나 도와줄 부분이 있는지 조심스레 확인할 때",
    "sentences": [
      {
        "en": "Is there anything I can do for you?",
        "ko": "제가 뭐 도와드릴 거 있을까요?"
      },
      {
        "en": "Is there anything to eat in the fridge?",
        "ko": "냉장고에 뭐 먹을 거 있어?"
      },
      {
        "en": "Is there anything wrong?",
        "ko": "뭐 잘못된 거 있어?"
      },
      {
        "en": "Is there anything you want to buy?",
        "ko": "사고 싶은 거 있어?"
      },
      {
        "en": "Is there anything special today?",
        "ko": "오늘 뭐 특별한 거 있어?"
      },
      {
        "en": "Is there anything interesting to watch?",
        "ko": "볼만한 재미있는 거 있어?"
      },
      {
        "en": "Is there anything I should know?",
        "ko": "내가 알아야 할 게 있을까?"
      },
      {
        "en": "Is there anything missing?",
        "ko": "뭐 빠진 거 있어?"
      },
      {
        "en": "Is there anything you'd like to say?",
        "ko": "하고 싶은 말 있어?"
      },
      {
        "en": "Is there anything I can help with?",
        "ko": "내가 도와줄 거 있을까?"
      }
    ]
  },
  {
    "id": 50,
    "pattern": "I used to...",
    "meaning": "예전에는 ~하곤 했어",
    "context": "지금은 변했지만 과거 한때 가졌던 습관을 추억할 때",
    "sentences": [
      {
        "en": "I used to smoke a lot.",
        "ko": "예전에는 담배를 많이 피웠었어."
      },
      {
        "en": "I used to live in London.",
        "ko": "예전에 런던에 살았었어."
      },
      {
        "en": "I used to play the piano.",
        "ko": "예전에 피아노를 쳤었어."
      },
      {
        "en": "I used to be shy.",
        "ko": "예전에는 부끄러움을 많이 탔었어."
      },
      {
        "en": "I used to go jogging every morning.",
        "ko": "예전에는 매일 아침 조깅을 하곤 했어."
      },
      {
        "en": "I used to like him.",
        "ko": "예전에는 그를 좋아했었어."
      },
      {
        "en": "I used to have long hair.",
        "ko": "예전에는 머리가 길었었어."
      },
      {
        "en": "I used to exercise more.",
        "ko": "예전에는 운동을 더 많이 했었어."
      },
      {
        "en": "I used to eat a lot of sweets.",
        "ko": "예전에는 단 걸 많이 먹곤 했어."
      },
      {
        "en": "I used to travel often.",
        "ko": "예전에는 여행을 자주 다녔었어."
      }
    ]
  },
  {
    "id": 51,
    "pattern": "I have no idea",
    "meaning": "wh-)... (전혀 모르겠어",
    "context": "정보가 전혀 없거나 당황스러운 상황임을 강조할 때",
    "sentences": [
      {
        "en": "I have no idea what you're talking about.",
        "ko": "네가 무슨 말을 하는지 전혀 모르겠어."
      },
      {
        "en": "I have no idea where I left my phone.",
        "ko": "핸드폰을 어디 뒀는지 전혀 모르겠어."
      },
      {
        "en": "I have no idea how to fix this.",
        "ko": "이걸 어떻게 고쳐야 할지 전혀 모르겠어."
      },
      {
        "en": "I have no idea why she is so angry.",
        "ko": "그녀가 왜 그렇게 화가 났는지 전혀 모르겠어."
      },
      {
        "en": "I have no idea when the meeting starts.",
        "ko": "회의가 언제 시작하는지 전혀 모르겠어."
      },
      {
        "en": "I have no idea who he is.",
        "ko": "그가 누구인지 전혀 모르겠어."
      },
      {
        "en": "I have no idea what to do next.",
        "ko": "다음에 뭘 해야 할지 전혀 모르겠어."
      },
      {
        "en": "I have no idea which one is better.",
        "ko": "어느 것이 더 나은지 전혀 모르겠어."
      },
      {
        "en": "I have no idea how much it costs.",
        "ko": "그게 비용이 얼마나 드는지 전혀 모르겠어."
      },
      {
        "en": "I have no idea if they are coming.",
        "ko": "그들이 올지 안 올지 전혀 모르겠어."
      }
    ]
  },
  {
    "id": 52,
    "pattern": "Would you mind -ing?",
    "meaning": "~해주시겠어요?",
    "context": "상대방에게 공손하게 부탁하거나 정중히 행동을 요청할 때",
    "sentences": [
      {
        "en": "Would you mind closing the door?",
        "ko": "문 좀 닫아주시겠어요?"
      },
      {
        "en": "Would you mind helping me with this?",
        "ko": "이것 좀 도와주시겠어요?"
      },
      {
        "en": "Would you mind waiting for a moment?",
        "ko": "잠시만 기다려주시겠어요?"
      },
      {
        "en": "Would you mind explaining that again?",
        "ko": "그걸 다시 한번 설명해주시겠어요?"
      },
      {
        "en": "Would you mind speaking a bit louder?",
        "ko": "좀 더 크게 말씀해주시겠어요?"
      },
      {
        "en": "Would you mind taking a picture of us?",
        "ko": "우리 사진 좀 찍어주시겠어요?"
      },
      {
        "en": "Would you mind sending me the file?",
        "ko": "제게 그 파일을 보내주시겠어요?"
      },
      {
        "en": "Would you mind repeating what you said?",
        "ko": "방금 하신 말씀 다시 한번 해주시겠어요?"
      },
      {
        "en": "Would you mind moving your car?",
        "ko": "차 좀 옮겨주시겠어요?"
      },
      {
        "en": "Would you mind keeping it a secret?",
        "ko": "비밀로 해주시겠어요?"
      }
    ]
  },
  {
    "id": 53,
    "pattern": "Is it possible to...?",
    "meaning": "~하는 게 가능할까요?",
    "context": "실현 가능성을 묻거나 조심스럽게 허락을 구할 때",
    "sentences": [
      {
        "en": "Is it possible to get a refund?",
        "ko": "환불받는 게 가능할까요?"
      },
      {
        "en": "Is it possible to change my seat?",
        "ko": "좌석을 바꾸는 게 가능할까요?"
      },
      {
        "en": "Is it possible to finish this by today?",
        "ko": "오늘까지 이걸 끝내는 게 가능할까요?"
      },
      {
        "en": "Is it possible to visit you tomorrow?",
        "ko": "내일 방문하는 게 가능할까요?"
      },
      {
        "en": "Is it possible to park here?",
        "ko": "여기 주차하는 게 가능할까요?"
      },
      {
        "en": "Is it possible to use your phone?",
        "ko": "당신의 전화를 쓰는 게 가능할까요?"
      },
      {
        "en": "Is it possible to cancel my order?",
        "ko": "주문을 취소하는 게 가능할까요?"
      },
      {
        "en": "Is it possible to book a room for tonight?",
        "ko": "오늘 밤 방을 예약하는 게 가능할까요?"
      },
      {
        "en": "Is it possible to see the manager?",
        "ko": "매니저를 만나는 게 가능할까요?"
      },
      {
        "en": "Is it possible to reduce the price?",
        "ko": "가격을 깎아주는 게 가능할까요?"
      }
    ]
  },
  {
    "id": 54,
    "pattern": "I'm on my way to...",
    "meaning": "~하러 가는 길이야",
    "context": "현재 이동 중인 목적지나 상태를 실시간으로 알릴 때",
    "sentences": [
      {
        "en": "I'm on my way to work.",
        "ko": "출근하는 길이야."
      },
      {
        "en": "I'm on my way to meet you.",
        "ko": "너 만나러 가는 길이야."
      },
      {
        "en": "I'm on my way to the airport.",
        "ko": "공항 가는 길이야."
      },
      {
        "en": "I'm on my way to the gym.",
        "ko": "체육관 가는 길이야."
      },
      {
        "en": "I'm on my way to pick up my kids.",
        "ko": "아이들 데리러 가는 길이야."
      },
      {
        "en": "I'm on my way to buy some groceries.",
        "ko": "식료품 사러 가는 길이야."
      },
      {
        "en": "I'm on my way to the bank.",
        "ko": "은행 가는 길이야."
      },
      {
        "en": "I'm on my way home now.",
        "ko": "지금 집으로 가는 길이야."
      },
      {
        "en": "I'm on my way to a wedding.",
        "ko": "결혼식 가는 길이야."
      },
      {
        "en": "I'm on my way to the pharmacy.",
        "ko": "약국 가는 길이야."
      }
    ]
  },
  {
    "id": 55,
    "pattern": "What if...?",
    "meaning": "만약 ~라면 어쩌지? / ~하면 어때?",
    "context": "발생하지 않은 일에 대한 걱정이나 새로운 제안을 던질 때",
    "sentences": [
      {
        "en": "What if it rains tomorrow?",
        "ko": "내일 비 오면 어쩌지?"
      },
      {
        "en": "What if we fail?",
        "ko": "우리 실패하면 어떡해?"
      },
      {
        "en": "What if she says no?",
        "ko": "그녀가 안 된다고 하면 어쩌지?"
      },
      {
        "en": "What if we get lost?",
        "ko": "우리 길 잃으면 어쩌지?"
      },
      {
        "en": "What if we try a different way?",
        "ko": "다른 방법을 써보는 건 어때?"
      },
      {
        "en": "What if I don't pass the exam?",
        "ko": "시험에 못 붙으면 어쩌지?"
      },
      {
        "en": "What if nobody comes to the party?",
        "ko": "아무도 파티에 안 오면 어쩌지?"
      },
      {
        "en": "What if we go there earlier?",
        "ko": "거기 좀 일찍 가는 건 어때?"
      },
      {
        "en": "What if it's too expensive?",
        "ko": "너무 비싸면 어쩌지?"
      },
      {
        "en": "What if we postpone the meeting?",
        "ko": "회의를 미루는 건 어때?"
      }
    ]
  },
  {
    "id": 56,
    "pattern": "Do you happen to...?",
    "meaning": "혹시 ~하시나요? / 혹시 ~아세요?",
    "context": "상대가 정보를 가지고 있는지 조심스럽고 정중하게 물을 때",
    "sentences": [
      {
        "en": "Do you happen to know his name?",
        "ko": "혹시 그의 이름을 아시나요?"
      },
      {
        "en": "Do you happen to have a pen?",
        "ko": "혹시 펜 하나 가지고 계세요?"
      },
      {
        "en": "Do you happen to be free tonight?",
        "ko": "혹시 오늘 밤에 시간 되시나요?"
      },
      {
        "en": "Do you happen to know where the station is?",
        "ko": "혹시 역이 어디 있는지 아세요?"
      },
      {
        "en": "Do you happen to have any spare change?",
        "ko": "혹시 잔돈 좀 있으신가요?"
      },
      {
        "en": "Do you happen to remember me?",
        "ko": "혹시 저 기억하시나요?"
      },
      {
        "en": "Do you happen to like jazz?",
        "ko": "혹시 재즈 좋아하시나요?"
      },
      {
        "en": "Do you happen to know her phone number?",
        "ko": "혹시 그녀의 전화번호를 아시나요?"
      },
      {
        "en": "Do you happen to have an umbrella?",
        "ko": "혹시 우산 있으세요?"
      },
      {
        "en": "Do you happen to know what time it is?",
        "ko": "혹시 몇 시인지 아세요?"
      }
    ]
  },
  {
    "id": 57,
    "pattern": "I'm dying to...",
    "meaning": "너무 ~하고 싶어 죽겠어",
    "context": "간절히 원하거나 몹시 기대되는 마음을 강조할 때",
    "sentences": [
      {
        "en": "I'm dying to see you.",
        "ko": "네가 너무 보고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to know the truth.",
        "ko": "진실을 너무 알고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to try this food.",
        "ko": "이 음식 너무 먹어보고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to go on vacation.",
        "ko": "휴가 너무 가고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to hear the results.",
        "ko": "결과를 너무 듣고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to buy that bag.",
        "ko": "저 가방 너무 사고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to tell you the news.",
        "ko": "그 소식을 너한테 너무 말해주고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to visit Paris.",
        "ko": "파리에 너무 가보고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to watch that movie.",
        "ko": "그 영화 너무 보고 싶어 죽겠어."
      },
      {
        "en": "I'm dying to take a nap.",
        "ko": "낮잠 너무 자고 싶어 죽겠어."
      }
    ]
  },
  {
    "id": 58,
    "pattern": "The thing is...",
    "meaning": "실은/문제는 ~라는 거야",
    "context": "대화 중 핵심적인 이유나 곤란한 상황을 설명하기 시작할 때",
    "sentences": [
      {
        "en": "The thing is, I don't have enough money.",
        "ko": "문제는 내가 돈이 충분치 않다는 거야."
      },
      {
        "en": "The thing is, I'm already busy tonight.",
        "ko": "실은 내가 오늘 밤엔 이미 바빠."
      },
      {
        "en": "The thing is, I forgot my password.",
        "ko": "문제는 내가 비밀번호를 잊어버렸다는 거야."
      },
      {
        "en": "The thing is, she doesn't like me.",
        "ko": "실은 그녀가 나를 좋아하지 않아."
      },
      {
        "en": "The thing is, we're out of time.",
        "ko": "문제는 우리에게 시간이 없다는 거야."
      },
      {
        "en": "The thing is, I've never been there before.",
        "ko": "실은 나 거기 한 번도 안 가봤어."
      },
      {
        "en": "The thing is, it's too late now.",
        "ko": "문제는 지금 너무 늦었다는 거야."
      },
      {
        "en": "The thing is, I lost my wallet.",
        "ko": "실은 내가 지갑을 잃어버렸어."
      },
      {
        "en": "The thing is, I can't speak English well.",
        "ko": "문제는 내가 영어를 잘 못 한다는 거야."
      },
      {
        "en": "The thing is, it's not as easy as it looks.",
        "ko": "문제는 이게 보기만큼 쉽지 않다는 거야."
      }
    ]
  },
  {
    "id": 59,
    "pattern": "How come...?",
    "meaning": "어째서 ~야? / 왜?",
    "context": "예상 밖의 일에 대해 구체적인 이유를 물을 때 (Why보다 구어체 느낌)",
    "sentences": [
      {
        "en": "How come you're so late?",
        "ko": "어째서 이렇게 늦은 거야?"
      },
      {
        "en": "How come he didn't call me?",
        "ko": "어째서 그가 나한테 전화 안 했어?"
      },
      {
        "en": "How come you're not eating?",
        "ko": "왜 안 먹고 있어?"
      },
      {
        "en": "How come the door is open?",
        "ko": "왜 문이 열려 있지?"
      },
      {
        "en": "How come you changed your mind?",
        "ko": "어째서 마음을 바꾼 거야?"
      },
      {
        "en": "How come it's so expensive?",
        "ko": "왜 이렇게 비싼 거야?"
      },
      {
        "en": "How come she knows my name?",
        "ko": "그녀가 내 이름을 어떻게 아는 거지?"
      },
      {
        "en": "How come you're still here?",
        "ko": "어째서 아직 여기 있어?"
      },
      {
        "en": "How come we never met before?",
        "ko": "왜 우린 전에 한 번도 못 만났을까?"
      },
      {
        "en": "How come you look so happy?",
        "ko": "왜 그렇게 기분 좋아 보여?"
      }
    ]
  },
  {
    "id": 60,
    "pattern": "I can't wait to...",
    "meaning": "~하는 게 너무 기다려져",
    "context": "기대되는 일에 대해 설렘과 조바심을 동시에 나타낼 때",
    "sentences": [
      {
        "en": "I can't wait to see the movie.",
        "ko": "그 영화 보는 거 너무 기다려져."
      },
      {
        "en": "I can't wait to meet your family.",
        "ko": "너희 가족 만나는 거 너무 기대돼."
      },
      {
        "en": "I can't wait to go home.",
        "ko": "집에 가는 거 너무 기다려져."
      },
      {
        "en": "I can't wait to start the trip.",
        "ko": "여행 시작하는 게 너무 기다려져."
      },
      {
        "en": "I can't wait to try these shoes on.",
        "ko": "이 신발 신어보는 거 너무 기다려져."
      },
      {
        "en": "I can't wait to hear your story.",
        "ko": "네 이야기 듣는 거 너무 기대돼."
      },
      {
        "en": "I can't wait to open the gift.",
        "ko": "선물 뜯어보는 거 너무 기다려져."
      },
      {
        "en": "I can't wait to tell you everything.",
        "ko": "너한테 전부 다 말해주고 싶어 죽겠어."
      },
      {
        "en": "I can't wait to eat dinner.",
        "ko": "저녁 먹는 거 너무 기다려져."
      },
      {
        "en": "I can't wait to finish this project.",
        "ko": "이 프로젝트 끝내는 날이 너무 기다려져."
      }
    ]
  }
];
