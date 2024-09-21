/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e85f50',
        'secondary': '#91c7bc',
        'tertiary': '#004638',
        'quaternary': '#2a363b',
        'quinary': '#f9c22e',
        'senary': '#f4f1de',

        'white': '#ffffff',
        'black': '#000000',

        'primary-hover': '#d64d3f',
      },
      fontFamily: {
        'body': ['Poppins'],

    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}
}