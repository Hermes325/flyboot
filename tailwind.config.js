const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "600px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-roboto)"],
        montserrat: ["var(--font-roboto)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
