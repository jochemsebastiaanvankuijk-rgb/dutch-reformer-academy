import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        graphite: "#242321",
        linen: "#f6f1ea",
        porcelain: "#fbfaf7",
        taupe: "#b8a996",
        bronze: "#9b7552",
        clay: "#d9cec1"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(25, 22, 18, 0.10)",
        glow: "0 18px 54px rgba(155, 117, 82, 0.26)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
