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
        modal: '0px 2px 8px rgba(0,0,0,0.25)',
        form:'0px 0px 12px 0px #1e248154'
      },
      animation: {
        slideDown: 'slideDown 300ms ease-out forwards',
      },
      keyframes: {
        slideDown: {
          'from': { opacity: 0, transform: 'translateY(-3rem)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

