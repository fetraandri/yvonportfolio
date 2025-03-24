/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',              // Inclut le fichier HTML principal
    './src/**/*.{js,ts,jsx,tsx}', // Inclut tous les fichiers dans src avec ces extensions
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
};