/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  backgroundImage: {
    wood: "url('/images/wood.jpg')",
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
