/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}", "*.{html,js}", "./play.html"],
  theme: {
    colors: {
      'black-600': '#111',
      'deep-blue': '#0ff',
      'red': '#f00',
      'white': '#fff',
      'gray': '#808080',
      'blue': '#0081B4',
      'black': '#000'
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('/app/image/bg1.jpg')"
      }
    },
  },
  plugins: [],
}
