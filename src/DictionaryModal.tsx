import React, { useState, useEffect } from 'react';
import { fetchWordDefinition } from './geminiService';

export const DictionaryModal = ({ word, onClose }: { word: string, onClose: () => void }) => {
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
