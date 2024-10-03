import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./app.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue"
  ],
  plugins: [tailwindTypography]
};
