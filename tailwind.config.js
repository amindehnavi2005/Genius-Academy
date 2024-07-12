

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px"
      }
    },
  },
  plugins: [],
}