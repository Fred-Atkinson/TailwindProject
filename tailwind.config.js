/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      height: {
        'h-90': '90%'
      },
      margin: {
        'm-5': '5%',
        'm-50': '50%'
      },
      backgroundImage:{
        'room': 'url(images/background.jpg)'
      }
    },
  },
  plugins: [],
}

