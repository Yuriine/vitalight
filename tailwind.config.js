/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60f692",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
    darkTheme: "dark",
  },
};
