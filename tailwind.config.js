/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 1. 只掃描「根目錄」下的檔案 (例如 App.tsx, main.tsx)
    // 注意：這裡只有一個星號 *，代表不進入子資料夾
    "./*.{js,ts,jsx,tsx}", 
    
    // 2. 指定掃描 components 資料夾 (如果有)
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // 3. 指定掃描 pages 資料夾 (如果有)
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 把你原本寫在 HTML script 裡的顏色設定搬來這裡
        primary: "#334155",
        "primary-dark": "#1e293b",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}