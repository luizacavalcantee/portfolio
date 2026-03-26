import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        accent: "#c8b89a",
        "accent-warm": "#d4a853",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "scale-in": "scaleIn 0.6s ease forwards",
        "smoke-float": "smokeFloat 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
