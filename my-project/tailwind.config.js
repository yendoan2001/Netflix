/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'coffee': {
                    50: '#E8D6D0',
                    200: '#C89F94',
                    400: '#A25F4B',
                    600: '#744838',
                },
                'black-custom': '#1d1f2e',
                'white50': {
                    50: '#e0d5d5'
                }
            },
            screens: {
                '2xl': {'max': '1535px'},
                // => @media (max-width: 1535px) { ... }

                'xl': {'max': '1279px'},
                // => @media (max-width: 1279px) { ... }

                'lg': {'max': '1023px'},
                // => @media (max-width: 1023px) { ... }

                'md': {'max': '767px'},
                // => @media (max-width: 767px) { ... }

                'sm': {'max': '639px'},
                // => @media (max-width: 639px) { ... }
            }
        },
    },
    plugins: [require('flowbite/plugin')]
}
