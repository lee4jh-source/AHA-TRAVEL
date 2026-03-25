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
  BookOpen, FileText, Briefcase, ShieldAlert, Mic, X
} from 'lucide-react';
import { categoryData } from './data';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
      {activeTab === 'quiz' && <QuizTab setActiveTab={setActiveTab} recentSentences={recentSentences} />}
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
          label="학습" 
          isActive={activeTab === 'learning'} 
          onClick={() => setActiveTab('learning')} 
        />
        <NavItem 
          icon={<Brain size={24} className={activeTab === 'quiz' ? 'fill-current' : ''} />} 
          label="퀴즈" 
          isActive={activeTab === 'quiz'} 
          onClick={() => setActiveTab('quiz')} 
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
      <GridItem icon={<PlaneLanding size={32} />} title="1_공항&비행기" onClick={() => navigateToLearning('airport')} />
      <GridItem icon={<Hotel size={32} />} title="2_호텔" onClick={() => navigateToLearning('hotel')} />
      <GridItem icon={<Utensils size={32} />} title="3_식당" onClick={() => navigateToLearning('dining')} />
      <GridItem icon={<Train size={32} />} title="4_대중교통" onClick={() => navigateToLearning('transit')} />
      <GridItem icon={<ShoppingBag size={32} />} title="5_쇼핑" onClick={() => navigateToLearning('shopping')} />
      <GridItem icon={<Coffee size={32} />} title="6_카페" onClick={() => navigateToLearning('cafe')} />
      <GridItem icon={<TriangleAlert size={32} className="text-[#a93100]" />} title="7_위급상황&도움요청" onClick={() => navigateToLearning('emergency')} />
      <GridItem icon={<Stethoscope size={32} />} title="8_병원&약국" onClick={() => navigateToLearning('hospital')} />
      <GridItem icon={<Shield size={32} />} title="9_경찰서_분실신고" onClick={() => navigateToLearning('police')} />
      <GridItem icon={<MapPin size={32} />} title="10_길찾기&길묻기" onClick={() => navigateToLearning('navigation')} />
      <GridItem icon={<Camera size={32} />} title="11_관광지" onClick={() => navigateToLearning('sightseeing')} />
      <GridItem icon={<Smartphone size={32} />} title="12_유심&통신" onClick={() => navigateToLearning('sim')} />
      <GridItem icon={<Landmark size={32} />} title="13_환전&은행" onClick={() => navigateToLearning('bank')} />
      <GridItem icon={<Languages size={32} />} title="14_인사&소통&문화" onClick={() => navigateToLearning('communication')} />
      <GridItem icon={<Ship size={32} />} title="15_크루즈여행" onClick={() => navigateToLearning('cruise')} />
    </div>
  </main>
);

const GridItem = ({ icon, title, onClick }: { icon: React.ReactNode, title: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-[#ffffff] p-4 rounded-3xl flex flex-col items-center justify-center text-center aspect-square transition-all hover:bg-[#f3f3f3] shadow-sm cursor-pointer active:scale-95"
  >
    <div className="text-[#041627] mb-2">{icon}</div>
    <span className="text-[#041627] font-semibold text-[0.9rem] leading-tight break-keep">{title}</span>
  </div>
);

const SpeakingModal = ({ queue, onClose }: { queue: any[], onClose: () => void }) => {
  const [idx, setIdx] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [recognizedText, setRecognizedText] = useState('');
  
  const recognitionRef = useRef<any>(null);
  const isRecordingRef = useRef(false);
  const accumulatedTextRef = useRef('');
  const currentSessionTextRef = useRef('');

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        currentSessionTextRef.current = finalTranscript || interimTranscript;
        const fullText = (accumulatedTextRef.current + ' ' + currentSessionTextRef.current).trim();
        setRecognizedText(fullText);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        if (event.error === 'no-speech') {
          return; // Ignore no-speech, let onend handle restart if needed
        }
        isRecordingRef.current = false;
        setIsRecording(false);
        setFeedback('마이크 오류가 발생했습니다.');
      };

      recognition.onend = () => {
        if (isRecordingRef.current) {
          if (currentSessionTextRef.current) {
            accumulatedTextRef.current = (accumulatedTextRef.current + ' ' + currentSessionTextRef.current).trim();
            currentSessionTextRef.current = '';
          }
          try {
            recognition.start();
          } catch (e) {
            console.error("Failed to restart recognition", e);
          }
        }
      };

      recognitionRef.current = recognition;
    } else {
      setFeedback('이 브라우저에서는 음성 인식을 지원하지 않습니다.');
    }

    return () => {
      isRecordingRef.current = false;
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const calculateScore = (target: string, spoken: string) => {
    const t = target.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const s = spoken.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    if (!s) return 0;
    
    const matrix = [];
    for (let i = 0; i <= s.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= t.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= t.length; j++) {
        if (s.charAt(i-1) === t.charAt(j-1)) {
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
        }
      }
    }
    const dist = matrix[s.length][t.length];
    const maxLen = Math.max(t.length, s.length);
    return Math.max(0, Math.round((1 - dist / maxLen) * 100));
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) return;

    if (isRecordingRef.current) {
      isRecordingRef.current = false;
      setIsRecording(false);
      recognitionRef.current.stop();
      
      const finalSpokenText = (accumulatedTextRef.current + ' ' + currentSessionTextRef.current).trim();
      setRecognizedText(finalSpokenText);
      
      if (finalSpokenText) {
        const calculatedScore = calculateScore(queue[idx].en, finalSpokenText);
        setScore(calculatedScore);
        if (calculatedScore >= 90) setFeedback('완벽해요! 🌟');
        else if (calculatedScore >= 70) setFeedback('아주 좋아요! 👍');
        else setFeedback('조금 더 연습해볼까요? 💪');
      } else {
        setFeedback('인식된 음성이 없습니다. 다시 시도해주세요.');
      }
    } else {
      setRecognizedText('');
      accumulatedTextRef.current = '';
      currentSessionTextRef.current = '';
      setScore(null);
      setFeedback('듣고 있습니다... (완료 후 마이크를 다시 누르세요)');
      isRecordingRef.current = true;
      setIsRecording(true);
      try {
        recognitionRef.current.start();
      } catch (e) {
        // Already started
      }
    }
  };

  const handleNext = () => {
    if (idx < queue.length - 1) {
      setIdx(idx + 1);
      setRecognizedText('');
      accumulatedTextRef.current = '';
      currentSessionTextRef.current = '';
      setScore(null);
      setFeedback('');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-[#041627]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center text-center shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <X size={24} />
        </button>
        <h3 className="text-xl font-bold mb-2 text-[#041627]">스피킹 연습</h3>
        <p className="text-sm font-medium text-[#a93100] mb-8 bg-[#ffdbd0] px-3 py-1 rounded-full">
          {idx + 1} / {queue.length}
        </p>
        
        <p className="text-2xl font-bold text-[#041627] mb-3 leading-tight">{queue[idx].en}</p>
        <p className="text-[#74777d] mb-8">{queue[idx].ko}</p>

        <button 
          onClick={toggleRecording}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-xl transition-all duration-300 mb-6 ${isRecording ? 'bg-red-500 animate-pulse scale-110' : 'bg-[#041627] hover:scale-105 active:scale-95'}`}
        >
          {isRecording ? '⏹️' : '🎤'}
        </button>

        <div className="h-24 flex flex-col items-center justify-center w-full">
          {score !== null ? (
            <>
              <div className="text-4xl font-black text-[#a93100] mb-2">{score}점</div>
              <p className="font-semibold text-lg text-[#2e7d32] mb-1">{feedback}</p>
              <p className="text-sm text-[#74777d] italic line-clamp-2">"{recognizedText}"</p>
            </>
          ) : (
            <>
              <p className="font-semibold text-sm text-[#a93100] mb-2">{feedback}</p>
              {recognizedText && <p className="text-sm text-[#74777d] italic line-clamp-2">"{recognizedText}"</p>}
            </>
          )}
        </div>
        
        <div className="flex flex-col items-center justify-center w-full mt-6 min-h-[3rem]">
          {score === null ? (
            <p className="text-[#74777d] font-medium">마이크 버튼을 클릭하세요.</p>
          ) : (
            <button onClick={handleNext} className="w-full py-3 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] transition-colors">
              {idx < queue.length - 1 ? '다음 문장' : '완료'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const DictionaryModal = ({ word, onClose }: { word: string, onClose: () => void }) => {
  const [def, setDef] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWordDefinition(word).then(res => {
      setDef(res);
      setLoading(false);
    }).catch(e => {
      setLoading(false);
    });
  }, [word]);

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 bg-[#041627]/80 backdrop-blur-sm z-[110] flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl" onClick={e => e.stopPropagation()}>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <span className="animate-spin inline-block w-8 h-8 border-4 border-[#a93100] border-t-transparent rounded-full mb-4"></span>
            <p className="text-[#74777d] font-medium">사전 검색 중...</p>
          </div>
        ) : def ? (
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-black text-[#041627] mb-1">{def.word}</h3>
                <p className="text-[#74777d] font-medium">{def.phonetic}</p>
              </div>
              <button onClick={playPronunciation} className="w-12 h-12 flex items-center justify-center bg-[#f3f3f3] text-[#041627] rounded-full hover:bg-[#e2e2e2] active:scale-95 transition-all text-xl shadow-sm">
                🔊
              </button>
            </div>
            <ul className="space-y-3 mb-8">
              {def.meanings.map((m: string, i: number) => (
                <li key={i} className="text-[#041627] font-medium text-lg">{m}</li>
              ))}
            </ul>
          </>
        ) : (
          <div className="py-8 text-center">
            <p className="text-[#a93100] font-bold">사전 정보를 불러오지 못했습니다.</p>
          </div>
        )}
        <button onClick={onClose} className="w-full py-3 bg-[#f3f3f3] text-[#041627] font-bold rounded-xl hover:bg-[#e2e2e2] transition-colors">
          닫기
        </button>
      </div>
    </div>
  );
};

const LearningTab = ({ category, setRecentSentences }: { category: string, setRecentSentences: (sentences: any[]) => void }) => {
  const data = categoryData[category] || categoryData['hospital'];
  const [currentPage, setCurrentPage] = useState(0);
  const [sentences, setSentences] = useState(data.sentences);
  const [isLoading, setIsLoading] = useState(false);
  const [speakingQueue, setSpeakingQueue] = useState<any[] | null>(null);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const playStateRef = useRef({ mode: 'idle', index: -1 });
  const [playMode, setPlayMode] = useState<'idle' | 'play-all' | 'repeat-all' | 'play-one' | 'repeat-one'>('idle');
  const prefetchPromise = useRef<Promise<any> | null>(null);
  const sentenceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalPages = 10; // Allow up to 10 pages (100 sentences)
  const currentSentences = sentences.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  useEffect(() => {
    setRecentSentences(currentSentences);
  }, [currentPage, sentences, setRecentSentences]);

  const stopAudio = () => {
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
      
      if (playStateRef.current.mode === 'play-all' || playStateRef.current.mode === 'repeat-all') {
        playStateRef.current.index++;
        playNext();
      } else if (playStateRef.current.mode === 'repeat-one') {
        playNext();
      } else {
        stopAudio();
      }
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
            {data.title}
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
          <div key={idx} ref={el => sentenceRefs.current[idx] = el} className={`p-5 rounded-2xl border-2 transition-all duration-300 ${activeSentenceIndex === idx ? 'border-[#a93100] bg-[#fff8f5] shadow-md scale-[1.02]' : 'border-transparent bg-white shadow-sm'}`}>
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

      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-[#e2e2e2] mt-auto">
        <button 
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          disabled={currentPage === 0 || isLoading}
          className="px-4 py-2.5 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#e2e8f0] transition-all text-sm"
        >
          이전 10개
        </button>
        <span className="font-bold text-[#a93100] bg-[#ffdbd0] px-3 py-1.5 rounded-full text-sm shadow-sm">
          {isLoading ? '생성 중...' : `${currentPage + 1} / ${totalPages}`}
        </span>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isLoading}
          className="px-4 py-2.5 bg-[#041627] text-white border-2 border-[#041627] rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#020b14] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#020b14] transition-all flex items-center gap-2 text-sm"
        >
          {isLoading ? (
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
          ) : null}
          다음 10개
        </button>
      </div>
    </main>
  );
};

const QuizTab = ({ setActiveTab, recentSentences }: { setActiveTab: (tab: string) => void, recentSentences: any[] }) => {
  const [quizState, setQuizState] = useState<'menu' | 'playing' | 'result'>('menu');
  const [quizType, setQuizType] = useState<'fill' | 'dictation' | 'translate'>('fill');
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [blankWord, setBlankWord] = useState('');
  const [blankedSentence, setBlankedSentence] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const startQuiz = (type: 'fill' | 'dictation' | 'translate') => {
    let selected = [];
    
    if (recentSentences && recentSentences.length > 0) {
      // Use recently learned sentences, shuffle them
      selected = [...recentSentences].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else {
      // Fallback: Gather all sentences from all categories
      let allSentences: any[] = [];
      Object.values(categoryData).forEach(cat => {
        allSentences = [...allSentences, ...cat.sentences];
      });
      selected = allSentences.sort(() => 0.5 - Math.random()).slice(0, 10);
    }

    setQuizType(type);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowFeedback(false);
    setQuizState('playing');
    prepareQuestion(selected[0], type);
  };

  const prepareQuestion = (question: any, type: string) => {
    if (type === 'fill') {
      const words = question.en.split(' ');
      // Find a suitable word to blank out (length > 2 if possible)
      const suitableWords = words.filter((w: string) => w.replace(/[^a-zA-Z]/g, '').length > 2);
      const wordToBlank = suitableWords.length > 0 
        ? suitableWords[Math.floor(Math.random() * suitableWords.length)]
        : words[Math.floor(Math.random() * words.length)];
      
      const cleanWord = wordToBlank.replace(/[^a-zA-Z']/g, '');
      setBlankWord(cleanWord);
      
      // Replace only the word part, keeping punctuation
      const regex = new RegExp(`\\b${cleanWord}\\b`, 'i');
      setBlankedSentence(question.en.replace(regex, '________'));
    }
  };

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const cleanString = (str: string) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim() || showFeedback) return;

    const currentQ = questions[currentIndex];
    let correct = false;

    if (quizType === 'fill') {
      correct = cleanString(userAnswer) === cleanString(blankWord);
    } else {
      correct = cleanString(userAnswer) === cleanString(currentQ.en);
    }

    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setUserAnswer('');
      setShowFeedback(false);
      prepareQuestion(questions[nextIndex], quizType);
      if (inputRef.current) inputRef.current.focus();
    } else {
      setQuizState('result');
    }
  };

  if (quizState === 'menu') {
    return (
      <main className="max-w-md mx-auto px-6 pt-24 pb-32">
        <section className="mb-10">
          <div className="flex items-center gap-2 text-[#a93100] mb-2">
            <Brain size={20} className="fill-current" />
            <span className="font-bold text-[0.75rem] uppercase tracking-wider">복습 퀴즈</span>
          </div>
          <h1 className="text-[2rem] font-semibold leading-tight text-[#041627] mb-8">
            방금 학습한 문장<br />
            <span className="text-[#a93100]">완벽하게 익히기</span>
          </h1>
          <p className="text-[#44474c] font-medium">방금 학습 탭에서 본 10개의 문장으로 복습 퀴즈를 진행합니다. 원하는 방식을 선택하세요.</p>
        </section>

        <div className="space-y-4">
          <button onClick={() => startQuiz('fill')} className="w-full bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] hover:border-[#a93100] hover:bg-[#fff8f5] transition-all text-left group shadow-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#f3f3f3] p-3 rounded-xl group-hover:bg-[#ffdbd0] group-hover:text-[#a93100] transition-colors">
                <Edit3 size={24} />
              </div>
              <h3 className="text-[1.25rem] font-bold text-[#041627]">빈칸 채우기</h3>
            </div>
            <p className="text-[#74777d] text-sm pl-14">영어 문장의 빈칸에 들어갈 알맞은 단어를 적어보세요.</p>
          </button>

          <button onClick={() => startQuiz('dictation')} className="w-full bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] hover:border-[#a93100] hover:bg-[#fff8f5] transition-all text-left group shadow-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#f3f3f3] p-3 rounded-xl group-hover:bg-[#ffdbd0] group-hover:text-[#a93100] transition-colors">
                <Volume2 size={24} />
              </div>
              <h3 className="text-[1.25rem] font-bold text-[#041627]">듣고 받아쓰기</h3>
            </div>
            <p className="text-[#74777d] text-sm pl-14">원어민의 음성을 듣고 전체 영어 문장을 정확히 받아 적어보세요.</p>
          </button>

          <button onClick={() => startQuiz('translate')} className="w-full bg-white p-6 rounded-2xl border-2 border-[#e2e2e2] hover:border-[#a93100] hover:bg-[#fff8f5] transition-all text-left group shadow-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#f3f3f3] p-3 rounded-xl group-hover:bg-[#ffdbd0] group-hover:text-[#a93100] transition-colors">
                <Languages size={24} />
              </div>
              <h3 className="text-[1.25rem] font-bold text-[#041627]">영작하기</h3>
            </div>
            <p className="text-[#74777d] text-sm pl-14">한국어 뜻을 보고 알맞은 영어 문장을 직접 작성해보세요.</p>
          </button>
        </div>
      </main>
    );
  }

  if (quizState === 'result') {
    return (
      <main className="max-w-md mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center">
        <div className="w-32 h-32 bg-[#ffdbd0] rounded-full flex items-center justify-center mb-8">
          <Brain size={64} className="text-[#a93100]" />
        </div>
        <h2 className="text-[2rem] font-black text-[#041627] mb-2">퀴즈 완료!</h2>
        <p className="text-[#74777d] text-lg mb-8">총 10문제 중 <span className="font-bold text-[#a93100] text-2xl mx-1">{score}</span>문제를 맞췄습니다.</p>
        
        <div className="w-full space-y-3">
          <button onClick={() => setQuizState('menu')} className="w-full py-4 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] transition-colors text-lg">
            다른 퀴즈 도전하기
          </button>
          <button onClick={() => setActiveTab('learning')} className="w-full py-4 bg-[#f3f3f3] text-[#041627] font-bold rounded-xl hover:bg-[#e2e2e2] transition-colors text-lg">
            학습으로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <main className="max-w-md mx-auto px-4 pt-24 pb-32 flex flex-col min-h-screen">
      <div className="flex justify-between items-center mb-6 px-2">
        <button onClick={() => setQuizState('menu')} className="text-[#74777d] hover:text-[#041627] flex items-center gap-1 font-medium">
          <ChevronLeft size={20} /> 나가기
        </button>
        <span className="font-bold text-[#041627] bg-[#e2e2e2] px-4 py-1.5 rounded-full text-sm">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#e2e2e2] flex-grow flex flex-col">
        <div className="mb-8 flex-grow flex flex-col justify-center">
          {quizType === 'fill' && (
            <>
              <p className="text-[#74777d] font-medium mb-4 text-center">빈칸에 들어갈 단어를 적어주세요.</p>
              <p className="text-[1.5rem] font-bold text-[#041627] text-center leading-relaxed mb-4">
                {blankedSentence}
              </p>
              <p className="text-center text-[#74777d]">{currentQ.ko}</p>
            </>
          )}

          {quizType === 'dictation' && (
            <div className="flex flex-col items-center">
              <p className="text-[#74777d] font-medium mb-8 text-center">음성을 듣고 영어 문장을 적어주세요.</p>
              <button 
                onClick={() => playAudio(currentQ.en)}
                className="w-24 h-24 bg-[#ffdbd0] text-[#a93100] rounded-full flex items-center justify-center hover:bg-[#ffcbb9] active:scale-95 transition-all shadow-md mb-6"
              >
                <Volume2 size={48} />
              </button>
              <p className="text-center text-[#74777d] text-sm">(버튼을 눌러 음성을 재생하세요)</p>
            </div>
          )}

          {quizType === 'translate' && (
            <>
              <p className="text-[#74777d] font-medium mb-4 text-center">다음 뜻을 가진 영어 문장을 적어주세요.</p>
              <p className="text-[1.5rem] font-bold text-[#041627] text-center leading-relaxed">
                {currentQ.ko}
              </p>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-auto">
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={showFeedback}
            placeholder="정답을 입력하세요..."
            className="w-full bg-[#f3f3f3] border-2 border-transparent focus:border-[#041627] rounded-xl px-4 py-4 text-lg outline-none transition-colors mb-4 disabled:opacity-50"
            autoFocus
            autoComplete="off"
          />
          
          {!showFeedback ? (
            <button 
              type="submit" 
              disabled={!userAnswer.trim()}
              className="w-full py-4 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] transition-colors disabled:opacity-30 text-lg"
            >
              정답 확인
            </button>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className={`p-4 rounded-xl mb-4 flex items-start gap-3 ${isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {isCorrect ? <CheckCircle2 size={24} className="shrink-0 text-emerald-600" /> : <XCircle size={24} className="shrink-0 text-red-600" />}
                <div>
                  <p className="font-bold text-lg mb-1">{isCorrect ? '정답입니다!' : '아쉽네요, 오답입니다.'}</p>
                  <p className="font-medium opacity-90">
                    정답: <span className="font-bold">{quizType === 'fill' ? blankWord : currentQ.en}</span>
                  </p>
                  {quizType !== 'translate' && <p className="text-sm mt-2 opacity-80">{currentQ.ko}</p>}
                </div>
              </div>
              <button 
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-[#a93100] text-white font-bold rounded-xl hover:bg-[#8a2800] transition-colors text-lg"
              >
                {currentIndex < questions.length - 1 ? '다음 문제' : '결과 보기'}
              </button>
            </div>
          )}
        </form>
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
