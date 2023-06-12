/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{html,js}',
  './index.html',
],
  
  theme: {
    extend: {
      backgroundImage: {
        'my': "url('/src/blackjack.jpg')",
        'in': "url('/src/bg.webp')",
      },
     },
     fontFamily: {
      'custom': ['Arvo'],
  },
  },
  plugins: [],
}