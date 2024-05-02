/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        biege: "rgba(235,251,238,255)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
