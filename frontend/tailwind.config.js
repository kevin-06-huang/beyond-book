/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        light_green: "rgba(235,251,238,255)",
        biege: "rgba(254,249,219,255)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
