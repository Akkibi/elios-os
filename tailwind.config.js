/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'midnight': '#05080D',
      'blue': '#B7FFF2',
      transparent: 'transparent',
      current: 'currentColor'
    },
  },
  plugins: [],
};
