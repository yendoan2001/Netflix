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
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            }
        },
        keyframes: {
            slideDown: {
                '0%': {transform: 'translateY(-100%)'},
                '100%': {transform: 'translateY(0)'},
            },
            fadeIn: {
                '0%': {opacity: 0},
                '100%': {opacity: 1}
            }
        },
        animation: {
            slideDown: 'slideDown .4s ease-in-out',
            fadeIn: 'fadeIn .4s ease-in-out',
        },
    },
    plugins: [require('flowbite/plugin')]
}
