/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#223B4F',
        'secondary-bg': '#E0E0DF',
        'main-bg': '#C7C5C5',
        'text-dark-grey': '#56585B',
        'text-light-grey': '#605D5D',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'], // This will work with className="font-jost"
      },
    },
  },
  plugins: [],
}