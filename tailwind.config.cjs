/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C5A059',
        'gold-light': '#D4B575',
        'gold-dark': '#A27E3B'
      }
    },
  },
  plugins: [],
};
