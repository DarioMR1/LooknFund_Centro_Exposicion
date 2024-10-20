/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#519CC6',
        accent: '#45C2C8',
        secondary: '#26314C',
      },
    },
  },
  plugins: [],
};