/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      },
      dropShadow: {
        'sm': '0px 0px 53.33333206176758px rgba(0.7176470756530762,1,0.9490196108818054,0.12999999523162842)',
        
      }
    },
    colors: {
      'white': '#ffffff',
      'midnight': '#05080D',
      'blue': '#B7FFF2',
      'red': '#FF0000',
      transparent: 'transparent',
      current: 'currentColor'
    },
  },
  plugins: [],
};
