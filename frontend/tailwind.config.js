/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            blue:{
                400:"#5046e4",
                500:"##3e38a1",
                600:"#5046e2",
                200:"#4840b8"
            },
            purple:{
              100:"#e0e8fd"
              
            },
            
        }
    },
  },
  plugins: [],
}