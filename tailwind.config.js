/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./public/**/*.html",
  "./public/**/*.js",],
  theme: {
    container :{
center : true,
padding : '16px'
    },
    extend: {
      colors :{
      },
      screens :{
'2xl': '1320px',
'sm': '640px',   // Ponsel
'md': '768px',   // Tablet
'lg': '1024px',  // Laptop
      }
    },
  },
  plugins: [],
}

