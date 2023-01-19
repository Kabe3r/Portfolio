/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1599px'
      },
      spacing: {
        82: '350px',
        98: '450px',
        99: '600px'
      }
    },
  },
  plugins: [],
}
