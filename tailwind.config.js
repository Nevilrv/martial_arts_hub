/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#E1DFD7",
      black: "#0F0F0F",
      white: "#fff",
      gay: {
        100: "#F6F5F9",
        200: "#C7C6BF",
        300: "#6B6B6B",
        400: "#717171",
        500:"#BCBCBC"
      },
      yellow:{
        100:"#FFB423"
      },
      green: "#25C277",
    },
    extend: {
      padding: {
        space: "124px",
      },
    },
  },
  plugins: [],
};
