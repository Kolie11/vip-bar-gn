/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'gold': '#d4af37',
      'gold-light': '#e8c547',
      'black': '#0a0a0a',
      'dark-bg': '#0f0f0f',
      'dark-card': '#1a1a1a',
      'dark-border': '#2a2a2a',
      'gray-light': '#b0b0b0',
      'gray-med': '#999',
      'gray-dark': '#666',
      'white': '#ffffff',
      'white-90': '#f5f5f5',
    },
  },
  plugins: [],
}