/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'footer-pattern': "url('/assets/DesktopImg/Subtract.svg')",
      },
    },
  },
  plugins: [],
}