/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Outfit:["Outfit","sans-serif"]
      },
      screens: {
        'max-[600px]': {'max': '600px'},
      },
    },
  },
  plugins: [],
}
