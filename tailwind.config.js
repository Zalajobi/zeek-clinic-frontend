/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
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
      customPrimaryColor: 'var(--blue-6, #228BE6)',
      customDangerColor: 'var(--red-6, #FA5252);',
      customBackgroundDangerColor: 'var(--red-0, #FFF5F5)',
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin.cjs')],
};
