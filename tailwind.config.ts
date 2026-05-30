import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-whites — paper, parchment, cream
        cream: {
          50: "#fdfbf6",
          100: "#faf6ec",
          200: "#f3ead5",
          300: "#e9d9b3",
          400: "#dec18a",
          500: "#d0a45e",
        },
        // Warm blacks — for editorial text and dark backgrounds
        ink: {
          50: "#f5f3ef",
          100: "#e9e5db",
          200: "#cdc7b7",
          300: "#a8a08e",
          400: "#7a7361",
          500: "#564f3f",
          600: "#3d372a",
          700: "#2a251a",
          800: "#1a1610",
          900: "#100d08",
          950: "#0a0805",
        },
        // Terracotta / clay — primary accent
        clay: {
          50: "#fcf4ee",
          100: "#f7e3d2",
          200: "#eebfa1",
          300: "#e1976b",
          400: "#d27145",
          500: "#b8552e",
          600: "#9a3f23",
          700: "#7c321f",
          800: "#622a1d",
          900: "#502519",
          950: "#2c100a",
        },
        // Deep forest green — secondary accent
        forest: {
          50: "#f0f5f1",
          100: "#dde9df",
          200: "#bbd3c0",
          300: "#90b59a",
          400: "#609375",
          500: "#3f7657",
          600: "#2d5d43",
          700: "#264a36",
          800: "#1f3a2c",
          900: "#152a20",
          950: "#0a1810",
        },
        // Bright marigold — used sparingly for emphasis
        marigold: {
          50: "#fef8e6",
          100: "#fdedc0",
          200: "#fbdb80",
          300: "#f7c33f",
          400: "#efa912",
          500: "#d99008",
          600: "#bb7008",
          700: "#94530a",
          800: "#7a4310",
          900: "#683812",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        editorial: "-0.035em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-up": {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "ticker-up": "ticker-up 0.25s ease-out forwards",
      },
      boxShadow: {
        "edge-clay": "0 1px 0 0 rgba(184, 85, 46, 0.16), 0 18px 50px -28px rgba(184, 85, 46, 0.45)",
        editorial: "0 30px 60px -30px rgba(20, 14, 8, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
