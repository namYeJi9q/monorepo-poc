import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "SolutionACore",
      fileName: "solution-a-core",
    },
    outDir: "dist",
  },
  plugins: [react()],
});
