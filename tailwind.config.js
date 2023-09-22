/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/preline/dist/*.js',
  ],
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
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin.cjs'),
    require('preline/plugin'),
  ],
};
