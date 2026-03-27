import React, { useState, useEffect, useRef } from 'react';
import { Play, Repeat, Volume2, ChevronLeft, Layers, ChevronRight, Brain, Mic } from 'lucide-react';
import { patternData, PatternItem } from './patternData';
import { QuizView } from './QuizView';
import { SpeakingModal } from './SpeakingModal';
import { DictionaryModal } from './DictionaryModal';

export const PatternTab = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState<PatternItem | null>(null);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const playStateRef = useRef({ mode: 'idle', index: -1 });
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [playMode, setPlayMode] = useState<'idle' | 'play-all' | 'repeat-all' | 'play-one' | 'repeat-one'>('idle');
  const sentenceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [speakingQueue, setSpeakingQueue] = useState<any[] | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(patternData.length / itemsPerPage);
  const currentPatterns = patternData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
    stopAudio();
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPage, selectedPattern]);

  useEffect(() => {
    if (activeSentenceIndex !== null && sentenceRefs.current[activeSentenceIndex]) {
      sentenceRefs.current[activeSentenceIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeSentenceIndex]);

  const playNext = () => {
    if (!selectedPattern) return;
    const state = playStateRef.current;
    if (state.mode === 'idle') return;

    let targetIndex = -1;

    if (state.mode === 'play-all' || state.mode === 'repeat-all') {
      if (state.index >= selectedPattern.sentences.length) {
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
    const utterance = new SpeechSynthesisUtterance(selectedPattern.sentences[targetIndex].en);
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
      }, 1200);
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

  if (showQuiz && selectedPattern) {
    return (
      <main className="flex-grow px-4 pt-24 pb-32 max-w-md mx-auto w-full flex flex-col min-h-screen">
        <QuizView sentences={selectedPattern.sentences} onClose={() => setShowQuiz(false)} />
      </main>
    );
  }

  if (selectedPattern) {
    return (
      <main className="flex-grow px-4 pt-24 pb-32 max-w-md mx-auto w-full flex flex-col">
        {speakingQueue && <SpeakingModal queue={speakingQueue} onClose={() => setSpeakingQueue(null)} />}
        {selectedWord && <DictionaryModal word={selectedWord} onClose={() => setSelectedWord(null)} />}
        
        <div className="mb-6 px-2">
          <button 
            onClick={() => setSelectedPattern(null)} 
            className="text-[#74777d] hover:text-[#041627] flex items-center gap-1 font-medium mb-4"
          >
            <ChevronLeft size={20} /> 목록으로
          </button>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e2e2]">
            <h1 className="text-2xl font-black text-[#041627] mb-2">{selectedPattern.pattern}</h1>
            <p className="text-[#a93100] font-bold text-lg mb-4">{selectedPattern.meaning}</p>
            <div className="bg-[#f3f3f3] p-4 rounded-xl">
              <p className="text-[#44474c] text-sm leading-relaxed">{selectedPattern.context}</p>
            </div>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm mb-4 border border-[#e2e2e2] flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <div className="bg-gradient-to-br from-[#041627] to-[#1a2b3c] p-1.5 rounded-lg text-white shadow-sm">
                <Play size={14} className="fill-current" />
              </div>
              <span className="text-[#041627] font-bold text-sm">전체 동작</span>
            </div>
            <span className="text-[#a93100] font-bold text-[0.75rem] tracking-widest uppercase bg-[#ffdbd0] px-3 py-1 rounded-full shadow-sm w-fit">
              예문 10개
            </span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => startPlayAll(false)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs transition-all shadow-sm ${
                playMode === 'play-all' 
                  ? 'bg-[#041627] text-white border-2 border-[#041627]' 
                  : 'bg-white text-[#041627] border-2 border-[#e2e2e2] hover:border-[#041627]'
              }`}
            >
              <Volume2 size={14} />
              듣기
            </button>
            <button 
              onClick={() => startPlayAll(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs transition-all shadow-sm ${
                playMode === 'repeat-all' 
                  ? 'bg-[#a93100] text-white border-2 border-[#a93100]' 
                  : 'bg-white text-[#a93100] border-2 border-[#ffdbd0] hover:border-[#a93100]'
              }`}
            >
              <Repeat size={14} />
              반복
            </button>
          </div>
        </div>

        <div className="space-y-4 flex-grow mb-6">
          {selectedPattern.sentences.map((item, index) => {
            const isPlaying = activeSentenceIndex === index;
            const isRepeating = isPlaying && playMode === 'repeat-one';
            
            return (
              <div 
                key={index}
                ref={el => { sentenceRefs.current[index] = el; }}
                className={`bg-white p-5 rounded-2xl shadow-sm border-2 transition-all ${
                  isPlaying ? 'border-[#041627] shadow-md scale-[1.02]' : 'border-[#e2e2e2] hover:border-[#cbd5e1]'
                }`}
              >
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div className="flex-1">
                    <p className="text-[1.1rem] font-bold text-[#041627] leading-snug mb-2">
                      {item.en.split(' ').map((word, i) => {
                        const cleanWord = word.replace(/[^a-zA-Z0-9'-]/g, '');
                        return (
                          <span key={i}>
                            <span 
                              onClick={() => cleanWord && setSelectedWord(cleanWord)}
                              className="cursor-pointer hover:text-[#a93100] hover:underline transition-colors"
                            >
                              {word}
                            </span>
                            {i < item.en.split(' ').length - 1 ? ' ' : ''}
                          </span>
                        );
                      })}
                    </p>
                    <p className="text-[#74777d] text-sm font-medium">{item.ko}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => startPlayOne(index, false)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 ${
                      isPlaying && !isRepeating
                        ? 'bg-[#041627] text-white border-[#041627] shadow-none translate-y-[3px]' 
                        : 'bg-white text-[#041627] border-slate-200 hover:bg-slate-50 shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none'
                    }`}
                  >
                    <Volume2 size={16} />
                    듣기
                  </button>
                  <button 
                    onClick={() => startPlayOne(index, true)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 ${
                      isRepeating
                        ? 'bg-[#a93100] text-white border-[#a93100] shadow-none translate-y-[3px]' 
                        : 'bg-white text-[#a93100] border-slate-200 hover:bg-slate-50 shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none'
                    }`}
                  >
                    <Repeat size={16} />
                    반복
                  </button>
                  <button 
                    onClick={() => setSpeakingQueue([item])} 
                    className="flex-1 py-2.5 rounded-xl font-bold text-[0.8rem] flex justify-center items-center gap-1.5 transition-all border-2 border-[#ffcbb9] bg-[#fff5f2] text-[#a93100] hover:bg-[#ffeadd] shadow-[0_3px_0_0_#ffcbb9] active:translate-y-[3px] active:shadow-none"
                  >
                    <Mic size={16} className="text-[#a93100]" />
                    스피킹
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={() => setShowQuiz(true)}
          className="w-full py-4 bg-[#ffdbd0] text-[#a93100] font-bold rounded-xl hover:bg-[#ffcbb9] transition-colors text-lg mb-4 flex items-center justify-center gap-2 shadow-sm"
        >
          <Brain size={24} />
          방금 배운 10문장 퀴즈 풀기
        </button>

        <button 
          onClick={() => setSelectedPattern(null)} 
          className="w-full py-4 bg-white text-[#041627] font-bold rounded-xl border-2 border-[#e2e2e2] hover:border-[#041627] transition-colors text-lg flex items-center justify-center gap-2 shadow-sm"
        >
          <ChevronLeft size={24} />
          목록으로
        </button>
      </main>
    );
  }

  return (
    <main className="flex-grow px-4 pt-24 pb-32 max-w-md mx-auto w-full flex flex-col min-h-screen">
      <section className="mb-8 px-2">
        <div className="flex items-center gap-2 text-[#a93100] mb-2">
          <Layers size={20} className="fill-current" />
          <span className="font-bold text-[0.75rem] uppercase tracking-wider">패턴영어</span>
        </div>
        <h1 className="text-[2rem] font-semibold leading-tight text-[#041627] mb-4">
          자주 쓰는 패턴으로<br />
          <span className="text-[#a93100]">문장 만들기</span>
        </h1>
        <p className="text-[#44474c] font-medium text-sm">원하는 패턴을 선택하여 예문을 학습해 보세요.</p>
      </section>

      <div className="space-y-3 flex-grow">
        {currentPatterns.map((item, index) => (
          <button 
            key={item.id}
            onClick={() => setSelectedPattern(item)}
            className="w-full bg-white p-5 rounded-2xl border-2 border-[#e2e2e2] hover:border-[#041627] hover:shadow-md transition-all text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#f3f3f3] text-[#74777d] font-black flex items-center justify-center text-sm group-hover:bg-[#041627] group-hover:text-white transition-colors">
                {currentPage * itemsPerPage + index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#041627] mb-1">{item.pattern}</h3>
                <p className="text-[#74777d] text-sm font-medium">{item.meaning}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#cbd5e1] group-hover:text-[#041627] transition-colors" />
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-sm border border-[#e2e2e2] mt-6">
        <button 
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="px-3 py-2 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#e2e8f0] transition-all flex flex-col items-center justify-center gap-1 min-w-[70px]"
        >
          <span className="text-xl leading-none">👈</span>
          <span className="text-xs whitespace-nowrap">이전 10개</span>
        </button>
        <span className="font-bold text-[#a93100] bg-[#ffdbd0] px-3 py-1.5 rounded-full text-xs sm:text-sm shadow-sm whitespace-nowrap mx-1 text-center">
          {currentPage + 1} / {totalPages || 1}
        </span>
        <button 
          onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage >= totalPages - 1}
          className="px-3 py-2 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_3px_0_0_#e2e8f0] active:translate-y-[3px] active:shadow-none shadow-[0_3px_0_0_#e2e8f0] transition-all flex flex-col items-center justify-center gap-1 min-w-[70px]"
        >
          <span className="text-xl leading-none">👉</span>
          <span className="text-xs whitespace-nowrap">다음 10개</span>
        </button>
      </div>
    </main>
  );
};
