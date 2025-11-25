/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Deep Slate/Navy
                    light: '#1e293b',
                    dark: '#020617',
                },
                accent: {
                    DEFAULT: '#c5a059', // Muted Gold/Bronze
                    light: '#dcc186',
                    dark: '#9e8045',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    alt: '#f8fafc', // Slate 50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
