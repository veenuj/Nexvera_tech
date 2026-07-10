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
        brand: {
          black: "#050505",
          charcoal: "#111111",
          graphite: "#1A1A1A",
          white: "#FFFFFF",
          lightGray: "#EAEAEA",
          border: "#2A2A2A",
        },
        gold: {
          primary: "#D4AF37",
          rich: "#C89B2B",
          highlight: "#F5D76E",
          shadow: "#8C6A12",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #F5D76E, #D4AF37, #8C6A12)",
        "dark-gradient": "linear-gradient(to bottom, #111111, #050505)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "glass": "0 4px 30px rgba(0, 0, 0, 0.5)",
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.10)",
        "gold-glow-hover": "0 0 35px rgba(245, 215, 110, 0.20)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;