/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#001F3F', // Navy blue
          700: '#3A6D8C', // Steel blue
          500: '#6A9AB0', // Light blue
          100: '#EAD8B1', // Cream
        }
      }
    },
  },
  plugins: [],
};