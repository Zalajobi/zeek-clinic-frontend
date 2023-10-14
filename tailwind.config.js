/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ['var(--font-rubik)', 'sans-serif'],
    },
    colors: {
      primary: 'rgb(233,244,254)',
      error: '#FAECEC',
    },
  },
  plugins: [],
});
