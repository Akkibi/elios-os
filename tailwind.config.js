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
        'sm': '0px 0px 1.5rem rgba(183, 255, 242, 0.3)',
        "md": '0px 0px 1rem rgba(183, 255, 242, 0.3)',
        "txt": '0px 0px .2em rgba(183, 255, 242, 0.3)',
        'yel': '0px 0px 1rem rgba(255, 217, 73, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slow-2': 'spin 7s linear infinite',
        'levels': 'levels 5s ease-in-out infinite'
      },
      keyframes: {
        levels: {
          '0%, 100%': { height: '20%' },
          '40%': { height: '80%' },
          '60%': { height: '60%' }
        }
      },
    },
    colors: {
      'white': '#ffffff',
      'midnight': '#05080D',
      'blue': '#B7FFF2',
      'red': '#FF0000',
      'yellow': "#FFEB9D",
      transparent: 'transparent',
      current: 'currentColor'
    },
  },
  plugins: [],
};
