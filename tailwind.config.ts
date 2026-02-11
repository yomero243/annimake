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
        primary: "#d2c7d6",
        "rose-gold": "#E0C0B0",
        "rose-gold-dark": "#BFA090",
        charcoal: "#2C2C2C",
        "background-light": "#f7f7f7",
        "background-dark": "#0a0a0a",
        "overlay-dark": "rgba(0, 0, 0, 0.6)",
        "glass-light": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(224, 192, 176, 0.2)",
      },
      fontFamily: {
        display: ["var(--font-syncopate)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
