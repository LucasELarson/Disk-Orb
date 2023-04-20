const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        hover: "rgb(219,222,225)",
        bghover: "rgb(54,55,61)",
        gray: colors.neutral,
        neutral: {
          900: 'rgb(30,31,34)',
          800: "rgb(43,45,49)",
          700: "rgb(49,51,56)",
          600: "rgb(56,58,64)",
          400: "rgb(124,128,138)",
          300: "rgb(181,186,193)",
          200: "#ebedef",
          100: "#f2f3f5",
        }
      }
    },
  },
  plugins: [],
}