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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#E63946',
      'light-red': '#E66772',
      'cream': '#F1FAEE',
      'white': '#fff',
      'light-blue': '#A8DADC',
      'blue': '#457B9d',
      'deep-blue': '#1D3557',
      'slate-800': '#4e5a65',
    },
    extend: {},
  },
  plugins: [],
};
