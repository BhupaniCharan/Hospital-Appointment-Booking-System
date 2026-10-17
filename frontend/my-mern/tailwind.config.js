/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#80bfff"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-FileList,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}