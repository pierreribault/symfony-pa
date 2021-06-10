const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'eden': '#175D62',
                'burn-sienna': '#E66740',
                'grenadier': '#DD3E00',
                'silver': '#B9B9B9'
            },
            screens: {
                'xs': {'max': '369px'},
                ...defaultTheme.screens
            },
            maxWidth: {
                '10': '10rem',
            }
        },
        container: {
            center: true,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
