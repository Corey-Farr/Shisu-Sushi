import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "shisu-black": "#050608",
        "shisu-charcoal": "#121318",
        "shisu-gold": "#C5A46D",
        "shisu-ivory": "#F8F4EC"
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["system-ui", "sans-serif"]
      },
      maxWidth: {
        "content": "72rem"
      },
      letterSpacing: {
        tightest: "-0.06em"
      }
    }
  },
  plugins: []
};

export default config;


