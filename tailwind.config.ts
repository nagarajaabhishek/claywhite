import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#1F2937",
          DEFAULT: "#374151",
          light: "#4B5563",
        },
        charcoal: {
          DEFAULT: "#333740",
          light: "#34495E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#B8941E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
