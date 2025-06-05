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
                600:"#e0e7ff",
            }
        }
    },
  },
  plugins: [],
}