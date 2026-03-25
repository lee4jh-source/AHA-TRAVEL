// src/geminiService.ts (Updated for static data & Vercel build success)
import sentenceData from './sentences.json'; // data.ts 대신 JSON을 직접 사용합니다.

// --- 타입 정의 (tsc 빌드 에러 방지) ---
export interface SentenceItem {
  en: string;
  ko: string;
  tip: string;
}

export interface WordDefinition {
  word: string;
  meanings: string[];
  phonetic: string;
}

// 배열에서 무작위로 n개의 아이템을 가져오는 헬퍼 함수
const getRandomItems = <T>(arr: T[], count: number): T[] => {
  if (!arr || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 1. 카테고리별 미리 정의된 문장 가져오기 (API 호출 제거, 딜레이 시뮬레이션)
export const generateMoreSentences = async (
  categoryTitle: string,
  currentEnSentences: string[] = [] // tsc 에러 방지: 기본값 설정
): Promise<SentenceItem[]> => {
  
  // 스마트폰 환경에서 AI가 생각하는 듯한 자연스러운 느낌을 주기 위한 짧은 딜레이 (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  let sourceData: SentenceItem[] = [];

  // App.tsx의 카테고리 제목과 sentences.json의 데이터 구조를 매핑
  // 괄호 이전의 한글 제목만 추출하여 유연하게 매핑합니다.
  const cleanTitle = categoryTitle.split('(')[0].trim();

  if (cleanTitle.includes("공항") || cleanTitle.includes("비행기")) {
    sourceData = sentenceData.airport.data_airport;
  } else if (cleanTitle.includes("기내") || cleanTitle.includes("입국")) {
    sourceData = sentenceData.inflight.data_inflight;
  } else if (cleanTitle.includes("호텔") || cleanTitle.includes("숙소")) {
    sourceData = sentenceData.hotel.data_hotel;
  } else if (cleanTitle.includes("식당") || cleanTitle.includes("카페")) {
    sourceData = sentenceData.restaurant.data_restaurant;
  } else if (cleanTitle.includes("쇼핑")) {
    sourceData = sentenceData.shopping.data_shopping;
  } else if (cleanTitle.includes("교통")) {
    sourceData = sentenceData.transport.data_transport;
  } else if (cleanTitle.includes("관광")) {
    sourceData = sentenceData.sightseeing.data_sightseeing;
  } else if (cleanTitle.includes("크루즈")) {
    sourceData = sentenceData.cruise.data_cruise;
  }

  if (!sourceData || sourceData.length === 0) {
    return []; // 해당 카테고리 데이터가 없을 경우
  }

  // 중복 방지: 이미 화면에 표시된 문장 제외
  const availableSentences = sourceData.filter(item => !currentEnSentences.includes(item.en));

  // 새로운 문장이 충분하지 않으면 있는 만큼만 반환
  if (availableSentences.length === 0) return [];
  
  // 3개의 무작위 새로운 문장 반환
  return getRandomItems(availableSentences, Math.min(availableSentences.length, 3));
};

// 2. 로컬 사전에서 단어 뜻 찾기 (API 호출 제거)
export const fetchWordDefinition = async (word: string): Promise<WordDefinition | null> => {
  // 여기에 자주 쓰이는 단어 사전을 미리 정의해 둘 수 있습니다. (예시)
  const localDictionary: { [key: string]: WordDefinition } = {
    "check-in": { word: "check-in", meanings: ["탑승 수속", "투숙 수속"], phonetic: "/tʃek ɪn/" },
    "reservation": { word: "reservation", meanings: ["예약"], phonetic: "/ˌrezəˈveɪʃn/" },
    "recommend": { word: "recommend", meanings: ["추천하다"], phonetic: "/ˌrekəˈmend/" },
    "boarding": { word: "boarding", meanings: ["탑승"], phonetic: "/ˈbɔːrdɪŋ/" },
    "gate": { word: "gate", meanings: ["게이트", "탑승구"], phonetic: "/ɡeɪt/" },
    "luggage": { word: "luggage", meanings: ["수하물", "짐"], phonetic: "/ˈlʌɡɪdʒ/" },
    "passport": { word: "passport", meanings: ["여권"], phonetic: "/ˈpæspɔːrt/" },
  };

  const lowerWord = word.toLowerCase().replace(/[.,!?]/g, ""); // 문장 부호 제거
  const definition = localDictionary[lowerWord];

  if (definition) {
    return definition;
  } else {
    // 사전에 없는 경우 기본 처리 (Vercel 빌드 에러 방지)
    return { word, meanings: ["사전에 등록되지 않은 단어입니다."], phonetic: "" };
  }
};