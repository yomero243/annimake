import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom Palette: Rose Gold on Ebony
        ebony: {
          DEFAULT: "#0C0C0C", // Deep rich black
          light: "#1A1A1A",   // Slightly lighter for cards/sections
          lighter: "#2A2A2A", // Borders or secondary elements
        },
        rosegold: {
          DEFAULT: "#E0BFB8", // Primary text / soft rose gold
          dark: "#B76E79",    // Accents / Buttons
          light: "#F2Ddd9",   // Hover states / Highlights
        },
        gold: {
          DEFAULT: "#D4AF37", // Classic gold for subtle highlights if needed
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
