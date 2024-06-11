/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["selector", '[data-bs-theme="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
};
