/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{html,js}", "*.{html,js}"],
  theme: {
    colors: {
      'red': '#f00',
      'black-600': '#111',
      'deep-blue': '#0ff',
      'white': '#fff',
      'gray': '#808080',
      'blue': '#0081B4',
      'black': '#000',
      'yellow': '#F9F54B'
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('/app/image/bg1.jpg')"
      }
    },
  },
  plugins: [],
}
