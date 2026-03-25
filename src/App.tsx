// src/App.tsx (Updated to remove split errors and use local data structure)
import React, { useState, useEffect } from 'react';
// geminiService에서 데이터 타입도 함께 가져옵니다.
import { generateMoreSentences, fetchWordDefinition, SentenceItem, WordDefinition } from './geminiService';
// 필수 아이콘들 (tcs 빌드 에러 방지: 모든 카테고리 아이콘 정의 확인)
import {
  Compass, Phone, MapPin, PlaneLanding, Smartphone, Landmark,
  ShoppingBag, Bus, Search, AlertTriangle, AlertCircle, Info, Mic, RotateCcw,
  X, Volume2, Target, Plus, Send, Ship
} from 'lucide-react';

// --- 타입 정의 ---
interface Category {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

// --- 상수 정의 (카테고리 리스트) ---
const categories: Category[] = [
  { title: "공항/비행기 (Airport)", description: "티켓 카운터, 수하물, 탑승 등 필수 표현", icon: <PlaneLanding size={24} />, color: "border-sky-400 text-sky-500" },
  { title: "식당/카페 (Restaurant)", description: "자리 예약, 음식 주문, 결제 방법", icon: <Phone size={24} />, color: "border-emerald-400 text-emerald-500" },
  { title: "호텔/숙소 (Hotel)", description: "체크인/아웃, 룸 서비스 요청, 시설 문의", icon: <Landmark size={24} />, color: "border-amber-400 text-amber-500" },
  { title: "쇼핑 (Shopping)", description: "가격 문의, 사이즈/색상 요청, 환불/교환", icon: <ShoppingBag size={24} />, color: "border-rose-400 text-rose-500" },
  { title: "교통 (Transportation)", description: "지하철, 버스, 택시 이용 및 길 찾기", icon: <Bus size={24} />, color: "border-indigo-400 text-indigo-500" },
  { title: "관광 (Sightseeing)", description: "명소 정보, 티켓 구매, 사진 촬영 요청", icon: <Compass size={24} />, color: "border-orange-400 text-orange-500" },
  { title: "크루즈 여행 (Cruise)", description: "선내 시설 이용, 정박지 관광 문의", icon: <Ship size={24} />, color: "border-teal-400 text-teal-500" },
];

// --- 메인 앱 컴포넌트 ---
function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(categories[0]);
  const [sentences, setSentences] = useState<SentenceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 단어 사전 상태값 (fetchWordDefinition의 반환 객체 저장)
  const [definition, setDefinition] = useState<WordDefinition | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: Category) => {
    if (selectedCategory?.title !== category.title) {
      setSelectedCategory(category);
      setSentences([]); // 이전 카테고리 문장 초기화
      setDefinition(null);
      setSelectedWord(null);
      // 카테고리 변경 시 자동으로 처음 문장 3개 가져오기
      handleGetMore(category.title, []); 
    }
  };

  // 문장 가져오기 (로컬 데이터 방식)
  const handleGetMore = async (categoryTitle: string, currentSentences: SentenceItem[]) => {
    setIsLoading(true);
    setError(null);
    setDefinition(null); // 사전 창 닫기
    setSelectedWord(null);

    try {
      // tcs 빌드 에러 방지: currentSentences가 없을 경우 대비
      const existingEnSentences = currentSentences ? currentSentences.map(s => s.en) : [];
      
      // AI 스튜디오의 수정을 반영하여, 배열 데이터를 즉시 가져옵니다.
      const newItems = await generateMoreSentences(categoryTitle, existingEnSentences);

      if (newItems.length > 0) {
        setSentences(prev => [...prev, ...newItems]); // 이전 문장에 이어서 추가
      } else {
        setError("준비된 모든 문장을 확인하셨습니다. (data.ts에 데이터를 더 추가해 주세요)");
      }
    } catch (err: any) {
      setError(err.message || '문장을 가져오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 단어 클릭 핸들러 (사전 띄우기)
  const handleWordClick = async (word: string) => {
    const lowerWord = word.toLowerCase().replace(/[.,!?]/g, ""); // 문장 부호 제거
    setSelectedWord(lowerWord);
    setDefinition(null); // 이전 뜻 초기화
    
    // geminiService.ts에 정의된 로컬 사전을 검색합니다.
    const def = await fetchWordDefinition(lowerWord);
    setDefinition(def);
  };

  // 문장 내 단어들을 클릭 가능한 버튼으로 렌더링 (split 에러 원천 차단)
  const renderInteractiveSentence = (text: string) => {
    // tsc 에러 방지: text가 비어있을 경우 처리
    if (!text) return null;

    return text.split(' ').map((word, wordIndex) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
      const isSelected = selectedWord === cleanWord;
      return (
        <span
          key={wordIndex}
          onClick={() => handleWordClick(word)}
          className={`cursor-pointer inline-block px-1 rounded transition-colors duration-150 ${
            isSelected ? 'bg-sky-100 text-sky-700 font-medium' : 'hover:bg-sky-50 text-slate-800'
          }`}
        >
          {word}
        </span>
      );
    });
  };

  // --- UI 컴포넌트 (컴포넌트 내부에 정의하여 상태값 공유) ---

  // 헤더
  const HeaderView = () => (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Compass className="text-sky-500" size={28} />
        <h1 className="text-2xl font-bold text-slate-900">
          <span className="text-sky-500">아하!</span> 트래블 영어
        </h1>
      </div>
    </header>
  );

  // 왼쪽 카테고리 사이드바
  const CategoriesListView = () => (
    <aside className="fixed top-16 left-0 bottom-0 w-80 bg-slate-50 border-r border-slate-200 p-6 overflow-y-auto z-40">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">카테고리</h2>
      <nav className="space-y-3">
        {categories.map((category) => {
          const isActive = selectedCategory?.title === category.title;
          const colorParts = category.color.split(' ');
          const textColorClass = colorParts[1]; // e.g., 'text-sky-500'
          const bgColorClass = textColorClass.replace('text-', 'bg-').replace('500', '100'); // e.g., 'bg-sky-100'

          return (
            <button
              key={category.title}
              onClick={() => handleCategoryChange(category)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                isActive ? 'bg-white shadow-md border-2 ' + colorParts[0] : 'bg-slate-100 hover:bg-white border-2 border-transparent hover:border-slate-200'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive ? bgColorClass + ' ' + textColorClass : 'bg-white text-slate-500'}`}>{category.icon}</div>
              <div>
                <div className={`font-bold ${isActive ? 'text-slate-950' : 'text-slate-800'}`}>{category.title}</div>
                <div className="text-sm text-slate-600 mt-1 line-clamp-2">{category.description}</div>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );

  // 사전/단어 정의 모달 (단어 클릭 시 노출)
  const WordDefinitionView = () => (
    <div className={`fixed bottom-6 right-6 w-96 bg-white border border-slate-100 shadow-2xl rounded-3xl p-7 transition-all duration-300 z-50 transform ${definition ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      {definition ? (
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-3xl font-extrabold text-sky-500">{definition.word}</h4>
              <p className="text-slate-500 font-mono mt-1 text-lg">{definition.phonetic}</p>
            </div>
            <button onClick={() => setDefinition(null)} className="text-slate-400 hover:text-slate-600 p-1.5 bg-slate-100 rounded-full"><X size={20} /></button>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl space-y-2">
            <div className="text-sm text-slate-500 font-medium">한국어 뜻</div>
            {/* 뜻이 여러개일 수 있으므로 join으로 합쳐서 보여줍니다. */}
            <p className="text-2xl font-bold text-slate-950">{definition.meanings.join(', ')}</p>
          </div>
          <div className="flex gap-2.5 mt-6">
            {/* (개발 예정: TTS/음성 기능) */}
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white font-semibold py-3.5 rounded-xl hover:bg-slate-950 transition"><Volume2 size={20}/> 발음 듣기</button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-slate-500">단어를 클릭하여 뜻을 확인하세요.</div>
      )}
    </div>
  );

  // 메인 화면
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <HeaderView />
      <div className="flex flex-1">
        <CategoriesListView />
        <main className="ml-80 mt-16 p-10 bg-slate-100 min-h-[calc(100vh-64px)] w-[calc(100%-320px)]">
          <div className="max-w-6xl mx-auto space-y-10">
            {sentences.length === 0 && !isLoading && !error && (
              <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100 text-center flex flex-col items-center gap-6">
                <Target size={64} className="text-sky-400" />
                <h3 className="text-3xl font-extrabold text-slate-950">준비 완료!</h3>
                <p className="text-lg text-slate-700 max-w-lg">왼쪽 카테고리를 선택하거나, '처음 문장 가져오기' 버튼을 눌러 필수 여행 영어 표현을 확인하세요.</p>
                <button
                  onClick={() => handleGetMore(selectedCategory?.title || '', sentences)}
                  className="bg-sky-500 text-white font-bold px-10 py-4 rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-100"
                >
                  {selectedCategory?.title.split('(')[0]} 처음 문장 가져오기
                </button>
              </div>
            )}

            {error && (
              <div className="bg-amber-50 border-2 border-amber-200 text-amber-900 p-6 rounded-2xl flex items-center gap-4">
                <AlertTriangle className="text-amber-500" size={32} />
                <p className="text-lg font-semibold">{error}</p>
              </div>
            )}

            {sentences.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="text-sky-500 text-sm font-semibold flex items-center gap-1.5"><Info size={16} /> 💡 단어를 클릭하면 사전 뜻을 확인하고 음성을 들을 수 있습니다.</div>
                  <div className="text-4xl font-extrabold text-slate-950 leading-tight">
                    {/* 데이터 배열을 그대로 화면에 뿌려줍니다. (split 제거됨) */}
                    {renderInteractiveSentence(item.en)}
                  </div>
                  <div className="text-2xl font-semibold text-slate-700 mt-3">{item.ko}</div>
                  {item.tip && (
                    <div className="bg-slate-50 border border-slate-200 text-slate-800 p-5 rounded-xl text-lg mt-6 flex gap-3">
                      <Target size={24} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900 mb-1">상황 팁</div>
                        <div>{item.tip}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {sentences.length > 0 && !error && (
              <div className="text-center pt-8">
                <button
                  onClick={() => handleGetMore(selectedCategory?.title || '', sentences)}
                  disabled={isLoading}
                  className="bg-sky-500 text-white font-bold px-10 py-4 rounded-xl hover:bg-sky-600 transition-colors shadow-lg disabled:bg-slate-300 flex items-center gap-3 mx-auto"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      가져오는 중...
                    </>
                  ) : (
                    <>
                      <Plus size={20} />
                      {selectedCategory?.title.split('(')[0]} 문장 더 보기
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
      <WordDefinitionView />
    </div>
  );
}

export default App;