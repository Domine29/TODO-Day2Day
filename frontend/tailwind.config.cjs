/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: { 'background': "url('/images/background.svg')"},
      colors: {
        'theme-blue': '#355764',
        'theme-grey': '#D9D9D9',
        'theme-lt-blue': '#81CACF',
        'theme-lt-blue-darken': '#669EA1',
        'theme-drk-blue': '#355764'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
