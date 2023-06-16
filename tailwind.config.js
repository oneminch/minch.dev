/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./app.vue", "./pages/**/*.vue", "./components/**/*.vue"],
  plugins: [require("@tailwindcss/typography")]
};
