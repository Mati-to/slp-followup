/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
        karla: ['Karla']
      }
    },
  },
  plugins: [],
}
