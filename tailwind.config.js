/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        warm: {
          bg: '#F2EDE7',
          alt: '#E7DDD3',
          card: '#F8F2EB',
          border: '#CCBEB1',
        },
        gold: {
          light: '#FFDBBB',
          DEFAULT: '#997E67',
          hover: '#664930',
        },
        ink: {
          primary: '#2E2219',
          secondary: '#5E4D3E',
          muted: '#82705F',
        },
        primary: {
          DEFAULT: '#2E2219',
          dark: '#1D1510',
          light: '#5E4D3E',
        },
        secondary: {
          DEFAULT: '#997E67',
          hover: '#664930',
          light: '#FFDBBB',
        },
        accent: {
          DEFAULT: '#997E67',
          hover: '#664930',
          soft: '#FFDBBB',
        },
      },
    },
  },
  plugins: [],
};