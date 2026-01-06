// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust path as necessary
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#223B4F', // Used for buttons, sidebar, and underline
        'secondary-bg': '#E0E0DF', // Used for header background
        'main-bg': '#C7C5C5', // Used for body background
        'text-dark-grey': '#56585B', // Used for paragraphs
        'text-light-grey': '#605D5D',
      },
      fontFamily: {
        // You MUST ensure 'Jost' is imported in your global CSS or HTML for this to work.
        jost: ['Jost', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // For the name
      },
    },
  },
  plugins: [],
}