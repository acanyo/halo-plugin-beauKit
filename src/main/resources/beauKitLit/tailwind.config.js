/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{html,js}",
    "./dist/**/*.{js,css}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
      },
      backgroundColor: {
        'white/5': 'rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
} 