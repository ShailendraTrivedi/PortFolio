/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "500px" },
        md: { min: "500px", max: "1100px" },
        lg: { min: "1100px", max: "1500px" },
        xl: { min: "1500" },
      },
    },
  },
  plugins: [],
};
