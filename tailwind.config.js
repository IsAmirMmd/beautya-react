/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#0C0C0C",
      background: "#FAF9F5",
      primary: "#A10550",
      pink: {
        50: "#FBEFF2",
        100: "#FED5E9",
        200: "#FDABD2",
        300: "#FA58A6",
        400: "#F50779",
        500: "#CB0665",
        600: "#79043C",
        700: "#510228",
        800: "#3D021E",
        900: "#280114",
        950: "#14010A",
      },
      neutral: {
        100: "#F9F9F9",
        200: "#EDEDED",
        300: "#DFDFDF",
        400: "#CBCBCB",
        500: "#868686",
        600: "#606060",
        700: "#404040",
        800: "#202020",
      },
      state: {
        error: "#C30000",
        errorLight: "#ED2E2E",
        errorBG: "#FFF2F2",
        warning: "#A9791C",
        warningLight: "#F4B740",
        warningBG: "#FFF8E1",
        success: "#00966D",
        successLight: "#00BA88",
        successBG: "#F3FDFA",
      },
    },
    fontSize: {
      "1rem": "1rem",
      "1.2rem": "1.2rem",
      "1.4rem": "1.4rem",
      "1.6rem": "1.6rem",
      "1.8rem": "1.8rem",
      "2.4rem": "2.4rem",
      "4.4rem": "4.4rem",
    },
    extend: {},
  },
  plugins: [],
};
