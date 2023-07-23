/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        green : "#3af484",
        blue : "#47b8e3"
      }
    },
  },
  plugins: [],
}
