import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const sentencesData = JSON.parse(fs.readFileSync('./src/sentences.json', 'utf8'));
const dictionaryData = JSON.parse(fs.readFileSync('./src/dictionary.json', 'utf8'));

const airportSentences = sentencesData.airport;
const allWords = new Set();

airportSentences.forEach(s => {
  const words = s.en.split(/\s+/);
  words.forEach(w => {
    const cleanWord = w.toLowerCase().replace(/[^a-z-]/g, '');
    if (cleanWord) {
      allWords.add(cleanWord);
    }
  });
});

const missingWords = [];
allWords.forEach(w => {
  if (!dictionaryData[w]) {
    missingWords.push(w);
  }
});

console.log(`Found ${missingWords.length} missing words.`);

async function run() {
  if (missingWords.length > 0) {
    const batchSize = 30;
    for (let i = 0; i < missingWords.length; i += batchSize) {
      const batch = missingWords.slice(i, i + batchSize);
      console.log(`Processing batch ${i / batchSize + 1}...`);
      
      const prompt = `Provide the phonetic spelling and Korean meanings for the following English words.
  Return a JSON array of objects with 'word', 'phonetic', and 'meanings' (array of strings).
  Words: ${batch.join(', ')}`;

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
          }
        });
        
        const result = JSON.parse(response.text);
        result.forEach(entry => {
          dictionaryData[entry.word.toLowerCase()] = entry;
        });
      } catch (e) {
        console.error("Error generating dictionary entries:", e);
      }
    }
    
    fs.writeFileSync('./src/dictionary.json', JSON.stringify(dictionaryData, null, 2));
    console.log('Dictionary updated.');
  } else {
    console.log('No missing words.');
  }
}

run();
