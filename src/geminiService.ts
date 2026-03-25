import { GoogleGenerativeAI } from "@google/generative-ai";

// 환경 변수에서 API 키를 가져옵니다.
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

// 1. 문장 생성 기능
export const generateMoreSentences = async (prompt: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("문장 생성 오류:", error);
    return "문장을 생성하는 중 오류가 발생했습니다.";
  }
};

// 2. 단어 정의 및 예문 기능 (이게 빠져서 에러가 났던 겁니다!)
export const fetchWordDefinition = async (word: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${word}에 대한 한국어 뜻과 영어 예문을 2개만 간단히 알려줘.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("단어 검색 오류:", error);
    return "단어 뜻을 찾는 중 오류가 발생했습니다.";
  }
};
