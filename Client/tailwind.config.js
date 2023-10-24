/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "cursive"],
      },
      colors: {
        btnprimary: "#D3924C",
        btnaccess: "#94FB98",
      },
    },
  },
  plugins: [],
};
