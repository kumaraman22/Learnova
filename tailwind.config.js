/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-scroll-left',
    'animate-scroll-right'
  ],
  theme: {
    extend: {
      colors: {
        brightBackground: "DEFBE0",
        brightGreen: "#539165",
        lightText: "#959595",
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 32s linear infinite',
      },
    },
  },
  plugins: [],
};


