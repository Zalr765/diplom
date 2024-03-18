/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grape': 'rgba(165, 82, 231, 1)',
      },
      fontFamily: {
        inter: 'Inter , sans-serif'
      },
      backgroundImage: {
        'kros': "url('/kros.jpg')",
      }
    },
  },
  plugins: [],
}

