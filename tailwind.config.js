module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
      },
      colors:{
        "background": "#FCFBF9",
        "navBorder": "#F6F5F1",
        "pink": "#CD3E4A"
      },
      inset:{
        "60":"40%",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
