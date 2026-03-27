import React, { useState, Component, ErrorInfo, ReactNode, useEffect, useRef } from 'react';
import { generateMoreSentences, fetchWordDefinition } from './geminiService';
import { 
  Compass, Phone, MapPin, PlaneLanding, Smartphone, Landmark, 
  Stethoscope, Ship, Plane, Train, Hotel, Utensils, ShoppingBag, 
  Wifi, CircleDollarSign, Languages, Shield, Pill, Map,
  Home, GraduationCap, User, Play, Snail, Hand,
  Ban, TriangleAlert, RadioTower, Copy, ArrowRight, Quote, Share2,
  ChevronRight, CreditCard, ChevronLeft, Coffee, Camera,
  Brain, Volume2, CheckCircle2, XCircle, RefreshCw, Edit3, PenTool,
  BookOpen, FileText, Briefcase, ShieldAlert, Mic, X, Layers
} from 'lucide-react';
import { categoryData } from './data';
import { patternData } from './patternData';
import { PatternTab } from './PatternTab';
import { QuizView } from './QuizView';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-500 bg-red-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
          <pre className="whitespace-pre-wrap text-sm">{this.state.error?.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('hospital');
  const [recentSentences, setRecentSentences] = useState<any[]>([]);

  const navigateToLearning = (category: string) => {
    setActiveCategory(category);
    setActiveTab('learning');
  };

  return (
    <div className="bg-gradient-to-br from-[#fff8f0] via-[#fffdfa] to-[#ffeadd] min-h-screen font-sans text-[#1a1c1c]">
      {/* TopAppBar */}
      <header className="bg-[#041627] text-white flex justify-between items-center w-full px-6 h-16 fixed top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <Compass size={24} />
          <span className="text-lg font-bold tracking-widest">AHA! TRAVEL</span>
        </div>
        <div className="text-xs text-white font-medium text-right leading-tight">
          Copyright © 이재환<br />All rights reserved
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'home' && <HomeTab navigateToLearning={navigateToLearning} />}
      {activeTab === 'learning' && <LearningTab category={activeCategory} setRecentSentences={setRecentSentences} />}
      {activeTab === 'pattern' && <PatternTab />}
      {activeTab === 'guide' && <GuideTab />}

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-white/80 backdrop-blur-lg border-t border-slate-200/50">
        <NavItem 
          icon={<Home size={24} className={activeTab === 'home' ? 'fill-current' : ''} />} 
          label="홈" 
          isActive={activeTab === 'home'} 
          onClick={() => setActiveTab('home')} 
        />
        <NavItem 
          icon={<GraduationCap size={24} className={activeTab === 'learning' ? 'fill-current' : ''} />} 
          label="여행영어" 
          isActive={activeTab === 'learning'} 
          onClick={() => setActiveTab('learning')} 
        />
        <NavItem 
          icon={<Layers size={24} className={activeTab === 'pattern' ? 'fill-current' : ''} />} 
          label="패턴영어" 
          isActive={activeTab === 'pattern'} 
          onClick={() => setActiveTab('pattern')} 
        />
        <NavItem 
          icon={<BookOpen size={24} className={activeTab === 'guide' ? 'fill-current' : ''} />} 
          label="여행 팁" 
          isActive={activeTab === 'guide'} 
          onClick={() => setActiveTab('guide')} 
        />
      </nav>
    </div>
  );
}

const NavItem = ({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-xl transition-all duration-200 ease-in-out ${
      isActive ? 'bg-[#e2e2e2] text-[#a93100]' : 'text-[#041627] opacity-70 hover:bg-[#f3f3f3]'
    }`}
  >
    {icon}
    <span className="font-medium text-[0.75rem] mt-1">{label}</span>
  </button>
);

const HomeTab = ({ navigateToLearning }: { navigateToLearning: (category: string) => void }) => (
  <main className="pt-24 px-6 max-w-md mx-auto pb-32">
    <section className="mb-10">
      <div className="flex items-center gap-2 text-[#a93100] mb-2">
        <MapPin size={20} className="fill-current" />
        <span className="font-bold text-[0.75rem] uppercase tracking-wider">상황별 회화</span>
      </div>
      <h1 className="text-[2rem] font-semibold leading-tight text-[#041627] mb-8">
        해외여행 필수 문장<br />
        <span className="text-[#a93100]">어디서든 당당하게!</span>
      </h1>
    </section>

    <div className="grid grid-cols-2 gap-4">
      <GridItem icon={<PlaneLanding size={28} />} title="1_공항" colorClass="text-sky-500" bgClass="bg-sky-50" onClick={() => navigateToLearning('airport')} />
      <GridItem icon={<Hotel size={28} />} title="2_호텔" colorClass="text-amber-500" bgClass="bg-amber-50" onClick={() => navigateToLearning('hotel')} />
      <GridItem icon={<Utensils size={28} />} title="3_식당" colorClass="text-emerald-500" bgClass="bg-emerald-50" onClick={() => navigateToLearning('dining')} />
      <GridItem icon={<Train size={28} />} title="4_대중교통" colorClass="text-indigo-500" bgClass="bg-indigo-50" onClick={() => navigateToLearning('transit')} />
      <GridItem icon={<ShoppingBag size={28} />} title="5_쇼핑" colorClass="text-rose-500" bgClass="bg-rose-50" onClick={() => navigateToLearning('shopping')} />
      <GridItem icon={<Coffee size={28} />} title="6_카페" colorClass="text-orange-500" bgClass="bg-orange-50" onClick={() => navigateToLearning('cafe')} />
      <GridItem icon={<TriangleAlert size={28} />} title="7_위급상황" colorClass="text-red-500" bgClass="bg-red-50" onClick={() => navigateToLearning('emergency')} />
      <GridItem icon={<Stethoscope size={28} />} title="8_병원" colorClass="text-teal-500" bgClass="bg-teal-50" onClick={() => navigateToLearning('hospital')} />
      <GridItem icon={<Shield size={28} />} title="9_경찰서_분실신고" colorClass="text-blue-600" bgClass="bg-blue-50" onClick={() => navigateToLearning('police')} />
      <GridItem icon={<MapPin size={28} />} title="10_길찾기" colorClass="text-slate-600" bgClass="bg-slate-100" onClick={() => navigateToLearning('navigation')} />
      <GridItem icon={<Camera size={28} />} title="11_관광지" colorClass="text-violet-500" bgClass="bg-violet-50" onClick={() => navigateToLearning('sightseeing')} />
      <GridItem icon={<Smartphone size={28} />} title="12_통신" colorClass="text-cyan-500" bgClass="bg-cyan-50" onClick={() => navigateToLearning('sim')} />
      <GridItem icon={<Landmark size={28} />} title="13_은행" colorClass="text-lime-600" bgClass="bg-lime-50" onClick={() => navigateToLearning('bank')} />
      <GridItem icon={<Languages size={28} />} title="14_소통" colorClass="text-fuchsia-500" bgClass="bg-fuchsia-50" onClick={() => navigateToLearning('communication')} />
      <GridItem icon={<Ship size={28} />} title="15_크루즈여행" colorClass="text-cyan-700" bgClass="bg-cyan-50" onClick={() => navigateToLearning('cruise')} />
    </div>
  </main>
);

const GridItem = ({ icon, title, colorClass, bgClass, onClick }: { icon: React.ReactNode, title: string, colorClass: string, bgClass: string, onClick?: () => void }) => {
  const parts = title.split('_');
  const displayTitle = parts.length > 1 ? parts.slice(1).join(' ').replace(/_/g, '/') : title;
  
  return (
    <div 
      onClick={onClick}
      className="bg-white p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center aspect-square transition-all hover:-translate-y-1 hover:shadow-md shadow-sm cursor-pointer active:scale-95 border border-slate-100 group"
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${bgClass} ${colorClass}`}>
        {icon}
      </div>
      <span className="text-[#041627] font-bold text-[0.95rem] leading-tight break-keep">{displayTitle}</span>
    </div>
  );
};

import { SpeakingModal } from './SpeakingModal';
import { DictionaryModal } from './DictionaryModal';

const LearningTab = ({ category, setRecentSentences }: { category: string, setRecentSentences: (sentences: any[]) => void }) => {
  const data = categoryData[category] || categoryData['hospital'];
  const [currentPage, setCurrentPage] = useState(0);
  const [sentences, setSentences] = useState(data.sentences);
  const [isLoading, setIsLoading] = useState(false);
  const [speakingQueue, setSpeakingQueue] = useState<any[] | null>(null);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const playStateRef = useRef({ mode: 'idle', index: -1 });
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [playMode, setPlayMode] = useState<'idle' | 'play-all' | 'repeat-all' | 'play-one' | 'repeat-one'>('idle');
  const prefetchPromise = useRef<Promise<any> | null>(null);
  const sentenceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const [showQuiz, setShowQuiz] = useState(false);

  const itemsPerPage = 10;
  const totalPages = 10; // Allow up to 10 pages (100 sentences)
  const currentSentences = sentences.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  useEffect(() => {
    setRecentSentences(currentSentences);
  }, [currentPage, sentences, setRecentSentences]);

  const stopAudio = () => {
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }
    playStateRef.current = { mode: 'idle', index: -1 };
    setPlayMode('idle');
    window.speechSynthesis.cancel();
    setActiveSentenceIndex(null);
  };

  useEffect(() => {
    setCurrentPage(0);
    setSentences(data.sentences);
    stopAudio();
    return () => stopAudio();
  }, [category, data]);

  useEffect(() => {
    stopAudio();
    // DOM 업데이트 후 스크롤이 적용되도록 약간의 지연을 줍니다.
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    if (activeSentenceIndex !== null && sentenceRefs.current[activeSentenceIndex]) {
      sentenceRefs.current[activeSentenceIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeSentenceIndex]);

  const fetchMore = async () => {
    if (prefetchPromise.current) {
      return prefetchPromise.current;
    }
    
    const existingEn = data.sentences.map(s => s.en);
    const promise = generateMoreSentences(category, existingEn).then(newSentences => {
      if (newSentences && newSentences.length > 0) {
        data.sentences = [...data.sentences, ...newSentences];
        setSentences(data.sentences);
      }
      prefetchPromise.current = null;
      return newSentences;
    }).catch(e => {
      prefetchPromise.current = null;
      throw e;
    });
    
    prefetchPromise.current = promise;
    return promise;
  };

  useEffect(() => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * itemsPerPage;
    
    if (startIndex >= sentences.length && nextPage < totalPages) {
      const timer = setTimeout(() => {
        fetchMore().catch(console.error);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, sentences.length, category]);

  const handleNextPage = async () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * itemsPerPage;
    
    if (startIndex >= sentences.length) {
      setIsLoading(true);
      try {
        const newSentences = await fetchMore();
        if (newSentences && newSentences.length > 0) {
          setCurrentPage(nextPage);
        } else {
          alert("새로운 문장을 생성하는 데 실패했습니다. 다시 시도해주세요.");
        }
      } catch (e) {
        alert("오류가 발생했습니다.");
      }
      setIsLoading(false);
    } else {
      setCurrentPage(nextPage);
    }
  };

  const playNext = () => {
    const state = playStateRef.current;
    if (state.mode === 'idle') return;

    let targetIndex = -1;

    if (state.mode === 'play-all' || state.mode === 'repeat-all') {
      if (state.index >= currentSentences.length) {
        if (state.mode === 'repeat-all') {
          state.index = 0;
        } else {
          stopAudio();
          return;
        }
      }
      targetIndex = state.index;
    } else if (state.mode === 'play-one' || state.mode === 'repeat-one') {
      targetIndex = state.index;
    }

    setActiveSentenceIndex(targetIndex);
    const utterance = new SpeechSynthesisUtterance(currentSentences[targetIndex].en);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;

    utterance.onend = () => {
      if (playStateRef.current.mode === 'idle') return;
      
      playTimeoutRef.current = setTimeout(() => {
        if (playStateRef.current.mode === 'idle') return;
        
        if (playStateRef.current.mode === 'play-all' || playStateRef.current.mode === 'repeat-all') {
          playStateRef.current.index++;
          playNext();
        } else if (playStateRef.current.mode === 'repeat-one') {
          playNext();
        } else {
          stopAudio();
        }
      }, 1200); // 1.2초 대기
    };

    utterance.onerror = () => stopAudio();
    window.speechSynthesis.speak(utterance);
  };

  const startPlayAll = (repeat: boolean) => {
    const targetMode = repeat ? 'repeat-all' : 'play-all';
    if (playStateRef.current.mode === targetMode) {
      stopAudio();
      return;
    }
    stopAudio();
    setTimeout(() => {
      playStateRef.current = { mode: targetMode, index: 0 };
      setPlayMode(targetMode);
      playNext();
    }, 50);
  };

  const startPlayOne = (index: number, repeat: boolean) => {
    const targetMode = repeat ? 'repeat-one' : 'play-one';
    if (playStateRef.current.mode === targetMode && playStateRef.current.index === index) {
      stopAudio();
      return;
    }
    stopAudio();
    setTimeout(() => {
      playStateRef.current = { mode: targetMode, index };
      setPlayMode(targetMode);
      playNext();
    }, 50);
  };

  if (showQuiz) {
    return (
      <main className="flex-grow px-4 pt-24 pb-32 max-w-md mx-auto w-full flex flex-col min-h-screen">
        <QuizView sentences={currentSentences} onClose={() => setShowQuiz(false)} />
      </main>
    );
  }

  return (
    <main className="flex-grow px-4 pt-24 pb-32 max-w-md mx-auto w-full flex flex-col">
      {speakingQueue && <SpeakingModal queue={speakingQueue} onClose={() => setSpeakingQueue(null)} />}
      {selectedWord && <DictionaryModal word={selectedWord} onClose={() => setSelectedWord(null)} />}
      
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm mb-4 border border-[#e2e2e2] flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <div className="bg-gradient-to-br from-[#041627] to-[#1a2b3c] p-1.5 rounded-lg text-white shadow-sm">
              <Play size={14} className="fill-current" />
            </div>
            <span className="text-[#041627] font-bold text-sm">전체 동작</span>
          </div>
          <span className="text-[#a93100] font-bold text-[0.75rem] tracking-widest uppercase bg-[#ffdbd0] px-3 py-1 rounded-full shadow-sm w-fit">
            {data.title.replace(/^\d+_/, '').replace(/_/g, '/')}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => startPlayAll(false)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all border-2 ${playMode === 'play-all' ? 'border-blue-300 bg-blue-50 text-blue-700 translate-y-[2px] shadow-none' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-[0_2px_0_0_#e2e8f0] active:translate-y-[2px] active:shadow-none'}`} title="전체 듣기">
            {playMode === 'play-all' ? <Volume2 size={18} className="text-blue-600" /> : <Volume2 size={18} className="text-slate-500" />}
          </button>
          <button onClick={() => startPlayAll(true)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all border-2 ${playMode === 'repeat-all' ? 'border-emerald-300 bg-emerald-50 text-emerald-700 translate-y-[2px] shadow-none' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-[0_2px_0_0_#e2e8f0] active:translate-y-[2px] active:shadow-none'}`} title="전체 반복">
            {playMode === 'repeat-all' ? <RefreshCw size={18} className="text-emerald-600" /> : <RefreshCw size={18} className="text-slate-500" />}
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {currentSentences.map((sentence, idx) => (
          <div key={idx} ref={el => { sentenceRefs.current[idx] = el; }} className={`p-5 rounded-2xl border-2 transition-all duration-300 ${activeSentenceIndex === idx ? 'border-[#a93100] bg-[#fff8f5] shadow-md scale-[1.02]' : 'border-transparent bg-white shadow-sm'}`}>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-bold text-[1.125rem] text-[#041627] leading-tight mb-1">
                  {sentence.en.split(' ').map((word, i) => {
                    const cleanWord = word.replace(/[^a-zA-Z0-9'-]/g, '');
                    return (
                      <span key={i}>
                        <span 
                          onClick={() => cleanWord && setSelectedWord(cleanWord)}
                          className="cursor-pointer hover:text-[#a93100] hover:underline transition-colors"
                        >
                          {word}
                        </span>
                        {i < sentence.en.split(' ').length - 1 ? ' ' : ''}
                      </span>
                    );
                  })}
                </p>
                <p className="text-[0.875rem] text-[#74777d]">{sentence.ko}</p>
              </div>
              <div className="flex justify-between gap-3 border-t border-slate-100 pt-4 mt-3">
                <button 
                  onClick={() => startPlayOne(idx, false)} 
                  className={`flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 ${
                    playMode === 'play-one' && activeSentenceIndex === idx 
                      ? 'border-blue-300 bg-blue-50 text-blue-700 translate-y-[3px] shadow-none' 
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none'
                  }`}
                >
                  <Volume2 size={16} className={playMode === 'play-one' && activeSentenceIndex === idx ? 'text-blue-600' : 'text-slate-500'} />
                  {playMode === 'play-one' && activeSentenceIndex === idx ? '정지' : '듣기'}
                </button>
                <button 
                  onClick={() => startPlayOne(idx, true)} 
                  className={`flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 ${
                    playMode === 'repeat-one' && activeSentenceIndex === idx 
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700 translate-y-[3px] shadow-none' 
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none'
                  }`}
                >
                  <RefreshCw size={16} className={playMode === 'repeat-one' && activeSentenceIndex === idx ? 'text-emerald-600' : 'text-slate-500'} />
                  {playMode === 'repeat-one' && activeSentenceIndex === idx ? '정지' : '반복'}
                </button>
                <button 
                  onClick={() => setSpeakingQueue([sentence])} 
                  className="flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 border-[#ffcbb9] bg-[#fff5f2] text-[#a93100] hover:bg-[#ffeadd] shadow-[0_3px_0_0_#ffcbb9] active:translate-y-[3px] active:shadow-none"
                >
                  <Mic size={16} className="text-[#a93100]" />
                  스피킹
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowQuiz(true)}
        className="w-full py-4 bg-[#ffdbd0] text-[#a93100] font-bold rounded-xl hover:bg-[#ffcbb9] transition-colors text-lg mb-6 flex items-center justify-center gap-2 shadow-sm"
      >
        <Brain size={24} />
        방금 배운 10문장 퀴즈 풀기
      </button>

      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-sm border border-[#e2e2e2] mt-auto">
        <button 
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          disabled={currentPage === 0 || isLoading}
          className="px-3 py-2 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#e2e8f0] transition-all flex flex-col items-center justify-center gap-1 min-w-[70px]"
        >
          <span className="text-xl leading-none">👈</span>
          <span className="text-xs whitespace-nowrap">이전 10개</span>
        </button>
        <span className="font-bold text-[#a93100] bg-[#ffdbd0] px-3 py-1.5 rounded-full text-xs sm:text-sm shadow-sm whitespace-nowrap mx-1 text-center">
          {isLoading ? '생성 중...' : `${currentPage + 1} / ${totalPages}`}
        </span>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isLoading}
          className="px-3 py-2 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#e2e8f0] transition-all flex flex-col items-center justify-center gap-1 min-w-[70px]"
        >
          {isLoading ? (
            <span className="animate-spin inline-block w-5 h-5 border-2 border-slate-700 border-t-transparent rounded-full"></span>
          ) : (
            <span className="text-xl leading-none">👉</span>
          )}
          <span className="text-xs whitespace-nowrap">다음 10개</span>
        </button>
      </div>
    </main>
  );
};

const GuideTab = () => (
  <main className="max-w-md mx-auto px-6 pt-24 pb-32">
    <section className="mb-10">
      <div className="flex items-center gap-2 text-[#a93100] mb-2">
        <BookOpen size={20} className="fill-current" />
        <span className="font-bold text-[0.75rem] uppercase tracking-wider">필수 정보</span>
      </div>
      <h1 className="text-[2rem] font-semibold leading-tight text-[#041627] mb-8">
        해외여행 가이드<br />
        <span className="text-[#a93100]">완벽 준비하기</span>
      </h1>
      <p className="text-[#44474c] font-medium">안전하고 즐거운 여행을 위해 꼭 알아두어야 할 사항들입니다.</p>
    </section>

    <div className="space-y-4">
      <div className="bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3f3f3] p-2.5 rounded-xl text-[#041627]">
            <FileText size={24} />
          </div>
          <h3 className="text-[1.25rem] font-bold text-[#041627]">여권 및 비자</h3>
        </div>
        <ul className="space-y-2 text-[#74777d] text-sm pl-2">
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 여권 만료일이 최소 6개월 이상 남았는지 확인하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 방문 국가의 비자나 전자여행허가(K-ETA, ESTA 등) 필요 여부를 미리 체크하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 분실에 대비해 여권 사본과 여권 사진 2매를 따로 보관하세요.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3f3f3] p-2.5 rounded-xl text-[#041627]">
            <CreditCard size={24} />
          </div>
          <h3 className="text-[1.25rem] font-bold text-[#041627]">환전 및 결제</h3>
        </div>
        <ul className="space-y-2 text-[#74777d] text-sm pl-2">
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 팁이나 소규모 매장 결제를 위해 약간의 현지 통화를 미리 환전하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 트래블월렛, 트래블로그 등 해외 결제 수수료가 무료인 카드를 준비하면 편리합니다.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 비상시를 대비해 해외 결제가 가능한 신용카드를 하나 더 챙기세요.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3f3f3] p-2.5 rounded-xl text-[#041627]">
            <Briefcase size={24} />
          </div>
          <h3 className="text-[1.25rem] font-bold text-[#041627]">필수 준비물</h3>
        </div>
        <ul className="space-y-2 text-[#74777d] text-sm pl-2">
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 방문 국가의 콘센트 규격에 맞는 멀티 어댑터를 준비하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 보조배터리는 위탁 수하물이 아닌 반드시 **기내에 들고 탑승**해야 합니다.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 소화제, 진통제, 밴드 등 기본 상비약을 챙기세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 만약의 사고나 질병에 대비해 여행자 보험 가입을 권장합니다.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3f3f3] p-2.5 rounded-xl text-[#041627]">
            <ShieldAlert size={24} />
          </div>
          <h3 className="text-[1.25rem] font-bold text-[#041627]">안전 및 주의사항</h3>
        </div>
        <ul className="space-y-2 text-[#74777d] text-sm pl-2">
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 소매치기가 많은 지역에서는 크로스백을 앞으로 메고 스마트폰 스트랩을 사용하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 늦은 시간 인적이 드문 골목길은 피하고 큰 길로 다니세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 현지 대사관이나 영사관의 긴급 연락처를 미리 저장해두세요.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3f3f3] p-2.5 rounded-xl text-[#041627]">
            <Smartphone size={24} />
          </div>
          <h3 className="text-[1.25rem] font-bold text-[#041627]">스마트폰 및 로밍</h3>
        </div>
        <ul className="space-y-2 text-[#74777d] text-sm pl-2">
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 유심, eSIM, 또는 통신사 로밍을 출국 전 미리 신청하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 데이터가 안 터질 때를 대비해 구글 맵 오프라인 지도를 다운로드하세요.</li>
          <li className="flex gap-2"><span className="text-[#a93100] font-bold">•</span> 번역 앱(파파고, 구글 번역)의 오프라인 언어 팩을 미리 받아두면 유용합니다.</li>
        </ul>
      </div>
    </div>
  </main>
);
