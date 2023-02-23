/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue': '#457B9D',
        'cream': '#F1FAEE',
        'deep-blue': '#1D3557',
        'light-blue': '#A8DADC',
        'light-red': '#ED9199',
        'red': '#B32D38',
        'white': '#FFF',
        'orange': '#F77F00'
      },
    },
  },
  plugins: [require('daisyui')],
};