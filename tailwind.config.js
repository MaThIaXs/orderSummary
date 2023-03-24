/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        redHatDisplay: ['Red Hat Display', 'sans-serif']
      },
      colors: {
        /*Primary*/
        'paleBlue': 'hsl(225, 100%, 94%)',
        'brightBlue': 'hsl(245, 75%, 52%)',
  
        /*Neutral*/
        'veryPaleBlue': 'hsl(255, 100%, 98%)',
        'desaturatedBlue': 'hsl(224, 23%, 55%)',
        'darkBlue': 'hsl(223, 47%, 23%)'
      },
      backgroundImage: {
        'pattern-background-desktop': "url('./images/pattern-background-desktop.svg')",
        'pattern-background-mobile': "url('./images/pattern-background-mobile.svg')"
      },
    },
  },
  plugins: [],
}