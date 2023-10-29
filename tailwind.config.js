/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FF6E0E',
          50: '#FFDCC6',
          100: '#FFD0B1',
          200: '#FFB888',
          300: '#FF9F60',
          400: '#FF8737',
          500: '#FF6E0E',
          600: '#D55500',
          700: '#9D3E00',
          800: '#652800',
          900: '#2D1200',
          950: '#110700'
        },
      },
      fontFamily: {
        sans: ["Satoshi"],
      },
    },
  },
  plugins: [],
};
