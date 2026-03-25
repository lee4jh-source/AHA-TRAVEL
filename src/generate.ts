import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log("Generating sentences...");
  const prompt = `Generate exactly 90 unique, practical English sentences for a cafe setting for Korean travelers.
  Format as JSON array of objects with 'en', 'ko', and 'tip' (in Korean).
  Do not include these existing ones: "I'd like an iced Americano, please.", "For here or to go?", "To go, please.", "Can I get an extra shot?", "With oat milk, please.", "No syrup, please.", "What is your best-selling dessert?", "Where is the restroom?", "What is the Wi-Fi password?", "Can you heat this up?"`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            en: { type: Type.STRING },
            ko: { type: Type.STRING },
            tip: { type: Type.STRING }
          },
          required: ["en", "ko", "tip"]
        }
      }
    }
  });

  const sentences = JSON.parse(response.text!);
  
  const sentencesData = JSON.parse(fs.readFileSync('./src/sentences.json', 'utf-8'));
  sentencesData.cafe = [...sentencesData.cafe, ...sentences];
  fs.writeFileSync('./src/sentences.json', JSON.stringify(sentencesData, null, 2));

  console.log(`Generated ${sentences.length} sentences.`);
  console.log("Extracting words...");
  const words = new Set<string>();
  sentences.forEach((s: any) => {
    const cleanWords = s.en.toLowerCase().replace(/[^a-z0-9-'\s]/g, '').split(/\s+/);
    cleanWords.forEach((w: string) => {
      if (w && w.length > 1) words.add(w);
    });
  });

  const dictionaryData = JSON.parse(fs.readFileSync('./src/dictionary.json', 'utf-8'));
  const wordsToFetch = Array.from(words).filter(w => !dictionaryData[w]);
  
  console.log(`Fetching definitions for ${wordsToFetch.length} words...`);
  
  const batchSize = 30;
  for (let i = 0; i < wordsToFetch.length; i += batchSize) {
    const batch = wordsToFetch.slice(i, i + batchSize);
    const dictPrompt = `Provide dictionary definitions for these English words: ${batch.join(', ')}.
    Format as a JSON array of objects. Each object must have:
    - word: the english word (lowercase)
    - phonetic: phonetic symbol (e.g. [ˈæpl])
    - meanings: array of Korean meanings (e.g. ["1. 사과", "2. 녀석"])`;
    
    try {
        const dictRes = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: dictPrompt,
          config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    phonetic: { type: Type.STRING },
                    meanings: { type: Type.ARRAY, items: { type: Type.STRING } }
                  },
                  required: ["word", "phonetic", "meanings"]
                }
              }
          }
        });
        
        const dictArray = JSON.parse(dictRes.text!);
        for (const item of dictArray) {
          dictionaryData[item.word.toLowerCase()] = item;
        }
        fs.writeFileSync('./src/dictionary.json', JSON.stringify(dictionaryData, null, 2));
        console.log(`Processed batch ${i / batchSize + 1}`);
    } catch (e) {
        console.error("Batch failed", e);
    }
  }
  console.log("Done!");
}
run();
