/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}", // 👈 這行很重要，告訴 Tailwind 去哪裡掃描你的程式碼
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