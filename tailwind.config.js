/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#2EB1A1",
        secondary: "#F2BE22",
        tertiary: "#FFBE18",
        quaternary: "#F56969",
        disabled: "#AAAAAA",
        "tertiary-bg": "#FFBE1866",
      },
      boxShadow: {
        red: "5px 5px 0px 0px #F56969",
        redDown: "3px 3px 0px 0px #F56969",
        primary: "5px 5px 0px 0px #01B7A0",
        primaryDown: "3px 3px 0px 0px #01B7A0",
        disabled: "5px 5px 0px 0px #C0C0C0",
      },
      fontFamily: {
        jua: ["Jua", "sans-serif"],
        lemon: ["Lemon", "cursive"],
      },
      borderRadius: {
        DEFAULT: "10px",
      },
      width: {
        250: "250px",
        280: "280px",
      },
    },
  },
  plugins: [],
};
