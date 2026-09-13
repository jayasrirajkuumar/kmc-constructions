/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          900: '#0F1715',
          800: '#17231F',
          700: '#263832',
          600: '#344A43',
        },
        ivory: {
          100: '#F4F1E8',
          200: '#E8E5DA',
        },
        gold: {
          400: '#E7CC79',
          500: '#D9B84C',
          600: '#C9A227',
        },
        charcoal: '#111412',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
