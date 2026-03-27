import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export const SpeakingModal = ({ queue, onClose }: { queue: any[], onClose: () => void }) => {
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
          ) : idx < queue.length - 1 && (
            <button onClick={handleNext} className="w-full py-3 bg-[#041627] text-white font-bold rounded-xl hover:bg-[#1a2b3c] transition-colors">
              다음 문장
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
