/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#141414",
        light: "#e5e5e5",
        "light-hover": "#b3b3b3",
      },
    },
  },
  plugins: [],
};
