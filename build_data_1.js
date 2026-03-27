const fs = require('fs');

const data = `export interface PatternSentence {
  id: number;
  english: string;
  korean: string;
}

export interface PatternItem {
  id: number;
  pattern: string;
  meaning: string;
  context: string;
  examples: PatternSentence[];
}

export const patternData: PatternItem[] = [
`;
fs.writeFileSync('src/patternData.ts', data);
