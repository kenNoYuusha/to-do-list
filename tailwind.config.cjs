/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mobileRange : "clamp(1rem, 5vw, 2rem)",
      },
      spacing : {
        mobileRangeSpacing : "clamp(1rem, 5vw, 2rem)",
      }
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
