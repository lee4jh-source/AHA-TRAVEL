import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const fetchWordDefinition = async (word: string): Promise<{ word: string, phonetic: string, meanings: string[] } | null> => {
  const prompt = `
당신은 영한사전입니다. 사용자가 입력한 영어 단어 "${word}"에 대한 사전적 의미를 제공해주세요.
반드시 아래 JSON 형식으로 응답해야 합니다.
- word: 원본 영어 단어 (소문자)
- phonetic: 발음 기호 (예: [ˈæpl])
- meanings: 한국어 뜻풀이 배열 (예: ["1. 사과", "2. (비격식) 녀석, 사람"])
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            phonetic: { type: Type.STRING },
            meanings: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["word", "phonetic", "meanings"]
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch word definition:", error);
    return null;
  }
};

export const generateMoreSentences = async (categoryTitle: string, existingSentences: string[]): Promise<{ en: string, ko: string, tip: string }[]> => {
  const prompt = `
당신은 해외여행을 준비하는 한국인을 위한 영어 회화 전문가입니다.
'${categoryTitle}' 상황에서 꼭 필요한 필수적이고 실용적인 영어 문장 10개를 생성해주세요.
이전에 이미 생성된 문장들과 중복되지 않아야 합니다.

이전에 생성된 문장들 (이 문장들은 제외하고 생성하세요):
${existingSentences.join('\n')}

각 문장은 다음 형식을 따라야 합니다:
- en: 영어 문장
- ko: 한국어 번역
- tip: 발음 팁이나 상황에 맞는 유용한 조언 (한국어)
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              en: { type: Type.STRING, description: "English sentence" },
              ko: { type: Type.STRING, description: "Korean translation" },
              tip: { type: Type.STRING, description: "Useful tip in Korean" }
            },
            required: ["en", "ko", "tip"]
          }
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return [];
  } catch (error) {
    console.error("Failed to generate sentences:", error);
    return [];
  }
};
