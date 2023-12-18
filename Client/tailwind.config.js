/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "cursive"]
      },
      colors: {
        btnprimary: "#D3924C",
        btnaccess: "#94FB98"
      }
    },
    minHeight: {
      "1/2": "50%",
      "1/3": "33.33%",
      "1/4": "25%",
      "3/4": "75%"
    }
  },
  plugins: []
};
