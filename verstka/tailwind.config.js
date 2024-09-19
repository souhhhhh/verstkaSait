/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    screens:  {
       tablet: {max: '778px'}, 
       tablet450: {max: '505px'}, 
       tablet410: {max: '410px'},
       tabletSmall: {max: '400px'},
    },
    extend: {
      colors: {
        orange: '#FFA500',
        teal: '#008080',
        black: '#000000',
      },
      fontFamily: { 
        Helvetica: ['Helvetica']
      }
    },
  },
  plugins: [],
}

