/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Fira Mono"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
