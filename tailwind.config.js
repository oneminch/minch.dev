/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./app.vue", "./**/*.vue"],
  plugins: [require("@tailwindcss/typography")]
};
