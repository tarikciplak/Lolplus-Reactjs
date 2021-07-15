const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  maxWidth: {
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      violet: "#7C3AED",
      violetlight: "#C4B5FD",
      amber300: "#FCD34D",
      amber200: "#FDE68A",
      white: "#F9FAFB",
      purple: "#4C1D95",
      blue: "#BFDBFE",
      win:"#00FF7F",
      lose:"#B22222",
      true:"#9932CC",
      false:"#FF8C00",

      IRON: "#778899",
      SILVER: "#626567",
      GOLD: "#F5B041",
      PLATINUM: "#27AE60",
      DIAMOND: "#1F618D",
      MASTER: "#7C3AED",
      GRANDMASTER: "#B03A2E",
      CHALLANGER: "#F4D03F"
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}