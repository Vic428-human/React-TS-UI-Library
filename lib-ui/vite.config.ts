import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "rororor",
      fileName: "rororor",
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});

// Rollup 是一个 JavaScript 模块打包器，特别适合用于库和应用的打包
