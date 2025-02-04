/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F0FF',
          300: '#99C4FF',
          500: '#3388FF',
          700: '#0055CC',
          900: '#000000', // Updated to black
        },
        about: '#111111', // Added about color
      },
      backgroundColor: {
        'about': '#111111', // Dark background for about section
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll-slow': 'scroll 2s ease infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(51, 136, 255, 0.5), 0 0 15px rgba(51, 136, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(51, 136, 255, 0.8), 0 0 30px rgba(51, 136, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};