/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
      },
      animation: {
        zoomOut: 'zoomOut 0.8s ease-out forwards', // Animation personnalisée
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.2)', opacity: '0' }, 
          '100%': { transform: 'scale(1)', opacity: '1' }, 
        },
      },
    },
  },
  plugins: [],
};