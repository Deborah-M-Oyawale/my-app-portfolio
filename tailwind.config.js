/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        94: '94%',
        45: '45%',
        5: '5%',
        90: '90%',
        85:'350px'
      },

      spacing: {
        '45': '45%',
        '-10': '-10px',
        '300': '300px'

      },
      colors: {
        'grey': '#373b40',
        // 'green': '#008080',
      },

      borderRadius: {
        7: '60px'
      }
    },
  },
  plugins: [],
}
