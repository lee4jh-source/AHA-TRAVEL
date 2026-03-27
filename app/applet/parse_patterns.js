const fs = require('fs');

const raw1 = fs.readFileSync('raw_patterns_1.txt', 'utf-8');
const raw2 = fs.readFileSync('raw_patterns_2.txt', 'utf-8');
const fullText = raw1 + '\n' + raw2;

const patterns = [];
let currentPattern = null;

const lines = fullText.split('\n').map(line => line.trim());

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.startsWith('___') || line.startsWith('학습 속도에 맞춰')) continue;

  // Match pattern header: "1. I'm about to... (막 ~하려던 참이야)"
  const headerMatch = line.match(/^\d+\.\s+([^(]+)\s*\((.+)\)$/);
  if (headerMatch) {
    if (currentPattern) {
      patterns.push(currentPattern);
    }
    currentPattern = {
      id: patterns.length + 1,
      pattern: headerMatch[1].trim(),
      meaning: headerMatch[2].trim(),
      context: '',
      examples: []
    };
    // The next line is usually the context
    if (i + 1 < lines.length && !lines[i + 1].match(/^\d+\./) && !lines[i + 1].startsWith('___')) {
      currentPattern.context = lines[i + 1].trim();
      i++; // Skip the context line
    }
    continue;
  }

  // Match example sentence: "1. I'm about to leave. (막 나가려던 참이야.)"
  const exampleMatch = line.match(/^\d+\.\s+([^(]+)\s*\((.+)\)$/);
  if (exampleMatch && currentPattern) {
    currentPattern.examples.push({
      id: currentPattern.examples.length + 1,
      english: exampleMatch[1].trim(),
      korean: exampleMatch[2].trim()
    });
  }
}

if (currentPattern) {
  patterns.push(currentPattern);
}

const output = `export interface PatternSentence {
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

export const patternData: PatternItem[] = ${JSON.stringify(patterns, null, 2)};
`;

fs.writeFileSync('src/patternData.ts', output);
console.log('Successfully generated src/patternData.ts with ' + patterns.length + ' patterns.');
