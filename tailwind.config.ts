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
          dark: '#032c24',
          teal: '#0a463a',
          forest: '#0c5243',
          accentGreen: '#10b981',
          lime: '#c5e848',
          limeLight: '#e4f788',
          limeDark: '#4d7c0f',
          orange: '#f97316',
          orangeHover: '#ea580c',
          softOrange: '#ffedd5',
          softBg: '#f8fafc',
          lightBlueBg: '#f0fdf4',
          inkNavy: '#10222b',
          warmCream: '#fff9f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

