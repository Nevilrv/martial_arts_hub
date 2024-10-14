/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#E1DFD7",
      primary_dark: "#D6D3CA",
      black: "#0F0F0F",
      Dark_black: "#000",
      white: "#fff",
      gay: {
        50:"#9A9892",
        100: "#F6F5F9",
        200: "#C7C6BF",
        250: "#CFCDC7",
        300: "#6B6B6B",
        350: "#C6C6C6",
        400: "#717171",
        500: "#BCBCBC",
        600: "#D9D7CF",
        650: "#6F6F6F",
        700: "#D2CFC9",
      },
      yellow: {
        100: "#FFB423",
      },
      green: "#25C277",
      Green: {
        50: "#CDD6D2",
        100:"#CFDED7",
        200:"#34B175"
      },
      red: {
        100: "#E1D2D1",
        150: "#F4DEDC",
        200: "#CB3530",
      },
    },
    extend: {
      padding: {
        space: "124px",
      },
    },
  },
  plugins: [],
};
