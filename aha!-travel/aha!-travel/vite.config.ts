import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 환경 변수(API 키 등)를 불러옵니다.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // 배포 시 파일 경로가 꼬이지 않도록 상대 경로로 설정합니다.
    base: './', 
    
    plugins: [react(), tailwindcss()],
    
    define: {
      // 앱 내부에서 'process.env.GEMINI_API_KEY'를 호출할 때 
      // Vercel에 등록한 열쇠를 안전하게 연결해 줍니다.
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        // 코드 내에서 '@/' 경로를 사용할 수 있게 해줍니다.
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
