/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //dark
        darkPrimary: "#1c1c1e",
        darkHeading: "#ffffff66",
        darkSecondary: "#161617",
        borderGray: "#ffffff33",
        //light
        lightPrimary: "#f5f8fc",
        lightHeading: "#000000",
        lightSecondary: "#6E6E6E",
        borderBlue: "#5b93ff99",
        borderLightGray: "#00000033",
        //common
        specialBlue: "#5b93ff",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
