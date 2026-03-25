const fs = require('fs');

const missingWords = {
  "admission": { en: "admission", ko: "입장, 입장료", type: "noun" },
  "adults": { en: "adults", ko: "어른들", type: "noun" },
  "tours": { en: "tours", ko: "투어들, 여행", type: "noun" },
  "photography": { en: "photography", ko: "사진 촬영", type: "noun" },
  "spot": { en: "spot", ko: "장소, 지점", type: "noun" },
  "photos": { en: "photos", ko: "사진들", type: "noun" },
  "advance": { en: "advance", ko: "사전, 미리", type: "noun" },
  "restrooms": { en: "restrooms", ko: "화장실들", type: "noun" },
  "postcards": { en: "postcards", ko: "엽서들", type: "noun" },
  "touch": { en: "touch", ko: "만지다", type: "verb" },
  "exhibits": { en: "exhibits", ko: "전시물들", type: "noun" },
  "locker": { en: "locker", ko: "사물함", type: "noun" },
  "observation": { en: "observation", ko: "관찰, 관측", type: "noun" },
  "deck": { en: "deck", ko: "갑판, 데크", type: "noun" },
  "amazing": { en: "amazing", ko: "놀라운, 멋진", type: "adjective" },
  "roof": { en: "roof", ko: "지붕, 옥상", type: "noun" },
  "called": { en: "called", ko: "불리는", type: "verb" },
  "castle": { en: "castle", ko: "성", type: "noun" },
  "built": { en: "built", ko: "지어진", type: "verb" },
  "painted": { en: "painted", ko: "그려진, 칠해진", type: "verb" },
  "masterpiece": { en: "masterpiece", ko: "걸작, 명작", type: "noun" },
  "ferry": { en: "ferry", ko: "페리, 여객선", type: "noun" },
  "voice": { en: "voice", ko: "목소리", type: "noun" },
  "smoking": { en: "smoking", ko: "흡연", type: "noun" },
  "valid": { en: "valid", ko: "유효한", type: "adjective" },
  "brochure": { en: "brochure", ko: "안내 책자, 브로셔", type: "noun" },
  "square": { en: "square", ko: "광장, 정사각형", type: "noun" },
  "opening": { en: "opening", ko: "개장, 시작", type: "noun" },
  "hours": { en: "hours", ko: "시간들, 영업시간", type: "noun" },
  "mondays": { en: "Mondays", ko: "월요일마다", type: "noun" },
  "closed": { en: "closed", ko: "닫힌, 휴무인", type: "adjective" },
  "holidays": { en: "holidays", ko: "휴일들, 공휴일", type: "noun" },
  "senior": { en: "senior", ko: "고령자, 선임", type: "noun" },
  "citizen": { en: "citizen", ko: "시민", type: "noun" },
  "temple": { en: "temple", ko: "사원, 절", type: "noun" },
  "cover": { en: "cover", ko: "가리다, 덮다", type: "verb" },
  "shoulders": { en: "shoulders", ko: "어깨", type: "noun" },
  "tripod": { en: "tripod", ko: "삼각대", type: "noun" },
  "drones": { en: "drones", ko: "드론들", type: "noun" },
  "strictly": { en: "strictly", ko: "엄격히", type: "adverb" },
  "prohibited": { en: "prohibited", ko: "금지된", type: "adjective" },
  "slippery": { en: "slippery", ko: "미끄러운", type: "adjective" },
  "lean": { en: "lean", ko: "기대다", type: "verb" },
  "fall": { en: "fall", ko: "떨어지다, 가을", type: "verb" },
  "twenty": { en: "twenty", ko: "20", type: "number" },
  "let's": { en: "let's", ko: "~하자 (let us)", type: "verb" },
  "o'clock": { en: "o'clock", ko: "시 (정각)", type: "adverb" },
  "sun": { en: "sun", ko: "태양, 해", type: "noun" },
  "fountain": { en: "fountain", ko: "분수", type: "noun" },
  "starts": { en: "starts", ko: "시작하다", type: "verb" },
  "eight": { en: "eight", ko: "8", type: "number" },
  "parade": { en: "parade", ko: "퍼레이드, 행진", type: "noun" },
  "feed": { en: "feed", ko: "먹이를 주다", type: "verb" },
  "animals": { en: "animals", ko: "동물들", type: "noun" },
  "pigeons": { en: "pigeons", ko: "비둘기들", type: "noun" },
  "roller": { en: "roller", ko: "롤러", type: "noun" },
  "coaster": { en: "coaster", ko: "코스터", type: "noun" },
  "aid": { en: "aid", ko: "도움, 처치", type: "noun" },
  "stamp": { en: "stamp", ko: "스탬프, 우표", type: "noun" },
  "collect": { en: "collect", ko: "수집하다", type: "verb" },
  "magnets": { en: "magnets", ko: "자석들", type: "noun" },
  "every": { en: "every", ko: "모든, 매~", type: "adjective" },
  "moving": { en: "moving", ko: "움직이는", type: "adjective" },
  "fast": { en: "fast", ko: "빠른, 빨리", type: "adjective" },
  "we've": { en: "we've", ko: "우리는 ~했다 (we have)", type: "pronoun" },
  "worth": { en: "worth", ko: "~의 가치가 있는", type: "adjective" },
  "glad": { en: "glad", ko: "기쁜", type: "adjective" },
  "breathtaking": { en: "breathtaking", ko: "숨이 멎을 듯한", type: "adjective" },
  "selfie": { en: "selfie", ko: "셀카", type: "noun" },
  "record": { en: "record", ko: "녹음하다, 기록하다", type: "verb" },
  "videos": { en: "videos", ko: "동영상들", type: "noun" },
  "join": { en: "join", ko: "합류하다, 가입하다", type: "verb" },
  "halfway": { en: "halfway", ko: "중간에, 도중에", type: "adverb" },
  "fast-track": { en: "fast-track", ko: "빠른 입장, 패스트트랙", type: "noun" },
  "lane": { en: "lane", ko: "차선, 줄", type: "noun" },
  "hire": { en: "hire", ko: "고용하다, 빌리다", type: "verb" },
  "private": { en: "private", ko: "개인적인, 사적인", type: "adjective" }
};

const dictionaryFile = 'src/dictionary.json';
const dictionaryData = JSON.parse(fs.readFileSync(dictionaryFile, 'utf8'));

let addedWords = 0;
for (const [word, def] of Object.entries(missingWords)) {
  const lowerWord = word.toLowerCase();
  if (!dictionaryData[lowerWord]) {
    dictionaryData[lowerWord] = def;
    addedWords++;
  }
}

fs.writeFileSync(dictionaryFile, JSON.stringify(dictionaryData, null, 2));
console.log(`Added ${addedWords} missing words to dictionary.`);
