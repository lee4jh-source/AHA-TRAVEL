import dictionaryData from './dictionary.json';
import sentencesData from './sentences.json';

export const fetchWordDefinition = async (word: string): Promise<{ word: string, phonetic: string, meanings: string[] } | null> => {
  try {
    // Clean the word to match dictionary keys (lowercase, remove punctuation except hyphens and apostrophes)
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9-']/g, '');
    const def = (dictionaryData as any)[cleanWord];
    
    if (def) {
      return def;
    }
    
    // Fallback: try finding a key that includes the word or vice versa if exact match fails
    const keys = Object.keys(dictionaryData);
    const partialMatch = keys.find(k => k === cleanWord || cleanWord.startsWith(k) || k.startsWith(cleanWord));
    if (partialMatch) {
      return (dictionaryData as any)[partialMatch];
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch word definition:", error);
    return null;
  }
};

export const generateMoreSentences = async (categoryKey: string, existingSentences: string[]): Promise<{ en: string, ko: string, tip: string }[]> => {
  try {
    // categoryKey should be like 'airport', 'hotel', etc.
    const allSentences = (sentencesData as any)[categoryKey] || [];
    
    // Filter out existing sentences
    const existingEnSet = new Set(existingSentences);
    const newSentences = allSentences.filter((s: any) => !existingEnSet.has(s.en));
    
    // Return the next 10 sentences
    return newSentences.slice(0, 10);
  } catch (error) {
    console.error("Failed to fetch more sentences:", error);
    return [];
  }
};
