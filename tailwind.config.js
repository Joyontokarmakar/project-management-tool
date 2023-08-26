/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      boxShadow: {
        header: '0px -9px 43px 0px #1c1c1c',
        form:'0px 0px 12px 0px #1e248154'
      },
    },
  },
  plugins: [],
}

