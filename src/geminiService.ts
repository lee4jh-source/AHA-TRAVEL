import { GoogleGenerativeAI } from "@google/generative-ai";

// Vite 환경 변수에서 API 키를 가져옵니다.
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey); // <-- 여기가 'GoogleGenerativeAI'여야 합니다!

export const getGeminiResponse = async (prompt: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API 호출 중 오류 발생:", error);
    return "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  }
};
