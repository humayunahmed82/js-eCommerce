/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: "1200px",
      "2xl": "1400px",
    },

    extend: {
      container: {
        center: true,
        padding: '15px',
      },

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },

      colors: {
        primary: "#1D2024",
        body: "#505050",
        secondary: "#9F9F9F",
        others_one: "#8B8B8B",
        others_tow: "#707070",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
}
