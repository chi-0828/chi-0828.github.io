/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fbfaf7",     // warm off-white background
        surface: "#ffffff",
        ink: "#23262e",       // primary text
        muted: "#6b7280",     // secondary text
        faint: "#9ca3af",
        line: "#eceae4",      // hairline borders
        accent: "#3a5a9c",    // calm professional blue
        "accent-soft": "#eef2f8",
      },
      fontFamily: {
        arial: ["Arial", "Helvetica", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(35,38,46,0.04), 0 8px 24px -16px rgba(35,38,46,0.18)",
      },
    },
  },
  plugins: [],
}
