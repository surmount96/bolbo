/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBlue:'#0A2640',
        lightGrey:'#f1f1f1',
      },
      lineHeight:{
        'extra-loose':'72px'
      }
    },
  },
  plugins: [],
}

