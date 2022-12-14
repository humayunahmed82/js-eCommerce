/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
        },

        extend: {
            container: {
                center: true,
                padding: "15px",
            },

            fontFamily: {
                quicksand: ["Quicksand", "sans-serif"],
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
};
