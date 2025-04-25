import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // 필요 시 core 컴포넌트 override 경로 설정
      // 'solution-a-core/components': path.resolve(__dirname, 'src/overrides')
      'solution-a-core/src/Button': path.resolve(__dirname, 'src/overrides/Button'),
    },
  },
});
