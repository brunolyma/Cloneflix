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
        dark: "#010511",
        input: "#333",
        placeholder: "#808080",
        focus: "#454545",
        light: "#e5e5e5",
        netflix: "#e50914",
        "light-hover": "#b3b3b3",
        signup: "#737373",
        button: "#6d6d6e70",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
