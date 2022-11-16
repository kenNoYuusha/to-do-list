/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mobileRange: "clamp(1rem, 5vw, 2rem)",
      },
      spacing: {
        mobileRangeSpacing: "clamp(1rem, 5vw, 2rem)",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      keyframes: {
        loadingAnimation: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        loadingAnimation: "loadingAnimation 3s ease-in-out infinite",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
