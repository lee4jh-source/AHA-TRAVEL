import React, { useState, useRef, useEffect } from 'react';
import { Brain, Edit3, Volume2, Languages, ChevronLeft } from 'lucide-react';

export const QuizView = ({ sentences, onClose }: { sentences: any[], onClose: () => void }) => {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [quizState]);

  const startQuiz = (type: 'fill' | 'dictation' | 'translate') => {
    const selected = [...sentences].sort(() => 0.5 - Math.random()).slice(0, 10);
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
      const suitableWords = words.filter((w: string) => w.replace(/[^a-zA-Z]/g, '').length > 2);
      const wordToBlank = suitableWords.length > 0 
        ? suitableWords[Math.floor(Math.random() * suitableWords.length)]
        : words[Math.floor(Math.random() * words.length)];
      
      const cleanWord = wordToBlank.replace(/[^a-zA-Z']/g, '');
      setBlankWord(cleanWord);
      
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
      <div className="flex-grow flex flex-col">
        <section className="mb-8">
          <div className="flex items-center gap-2 text-[#a93100] mb-2">
            <Brain size={20} className="fill-current" />
            <span className="font-bold text-[0.75rem] uppercase tracking-wider">복습 퀴즈</span>
          </div>
          <h1 className="text-[2rem] font-semibold leading-tight text-[#041627] mb-6">
            방금 학습한 문장<br />
            <span className="text-[#a93100]">완벽하게 익히기</span>
          </h1>
          
          <p className="text-[#44474c] font-medium text-sm">
            방금 학습한 10개의 문장으로 복습 퀴즈를 진행합니다. 원하는 방식을 선택하세요.
          </p>
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
        
        <button onClick={onClose} className="mt-8 w-full py-4 bg-[#f3f3f3] text-[#041627] font-bold rounded-xl hover:bg-[#e2e2e2] transition-colors text-lg">
          학습으로 돌아가기
        </button>
      </div>
    );
  }

  if (quizState === 'result') {
    return (
      <div className="flex-grow flex flex-col items-center text-center justify-center">
        <div className="w-32 h-32 bg-[#ffdbd0] rounded-full flex items-center justify-center mb-8">
          <Brain size={64} className="text-[#a93100]" />
        </div>
        <h2 className="text-[2rem] font-black text-[#041627] mb-2">퀴즈 완료!</h2>
        <p className="text-[#74777d] text-lg mb-8">총 10문제 중 <span className="font-bold text-[#a93100] text-2xl mx-1">{score}</span>문제를 맞췄습니다.</p>
        
        <div className="w-full space-y-3">
          <button onClick={() => setQuizState('menu')} className="w-full py-4 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] transition-colors text-lg">
            다른 퀴즈 도전하기
          </button>
          <button onClick={onClose} className="w-full py-4 bg-[#f3f3f3] text-[#041627] font-bold rounded-xl hover:bg-[#e2e2e2] transition-colors text-lg">
            학습으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="flex-grow flex flex-col">
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
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          
          {showFeedback ? (
            <div className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-bold text-lg mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? '정답입니다!' : '틀렸습니다.'}
              </p>
              {!isCorrect && (
                <p className="text-[#041627] font-medium">
                  정답: <span className="font-bold text-[#a93100]">{quizType === 'fill' ? blankWord : currentQ.en}</span>
                </p>
              )}
            </div>
          ) : null}

          <button 
            type={showFeedback ? "button" : "submit"}
            onClick={showFeedback ? handleNext : undefined}
            disabled={!userAnswer.trim() && !showFeedback}
            className="w-full py-4 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] disabled:opacity-50 disabled:hover:bg-[#041627] transition-colors text-lg shadow-sm"
          >
            {showFeedback ? (currentIndex === questions.length - 1 ? '결과 보기' : '다음 문제') : '정답 확인'}
          </button>
        </form>
      </div>
    </div>
  );
};
