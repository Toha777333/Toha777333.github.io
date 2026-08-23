/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        brand: {
          cyan: '#66d9ed',
          violet: '#9440e8',
          pink: '#DF058D',
          blue: '#2C49D8',
          orange: '#FF6B2B',
          bg: '#0e1017',
          card: '#161822',
          cardHover: '#1c1f2e',
        }
      }
    },
  },
  plugins: [],
}
