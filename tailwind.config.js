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
      white: "#fff",
      gay: {
        100: "#F6F5F9",
        200: "#C7C6BF",
        250: "#CFCDC7",
        300: "#6B6B6B",
        400: "#717171",
        500: "#BCBCBC",
        600: "#D9D7CF",
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
