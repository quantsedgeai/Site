import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // QuantsEdge Brand Colors
        accent: {
          DEFAULT: "#00FFC6",
          dark: "#00D4AA",
          darker: "#00B896",
        },
        black: "#000000",
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#0F0F0F",
        },
        grey: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#999999",
          tertiary: "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Monaco", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "0.9" }],
        "display-md": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "0.9" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.02em",
        wide: "0.08em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% center" },
          "50%": { "background-position": "200% center" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;