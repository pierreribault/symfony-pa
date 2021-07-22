const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'silver': '#B9B9B9',
                'gigas': '#4141A5',
                'violet': '#1B0A3C',
                'carnation': '#FC5156',
                'pastel-green': '#61E786',
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
