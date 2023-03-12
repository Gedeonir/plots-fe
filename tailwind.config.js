/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['Concert One', 'cursive'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
