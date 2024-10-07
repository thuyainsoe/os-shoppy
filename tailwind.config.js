/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#0094CD",
        slightgray: "#E2E7EF",
        secondarycolor: "#EFF0F5",
        lightgray: "#EFF0F5",
        darkgray: "#828282",
        headingcolor: "#414141",
        contentcolor: "#828282",
        violet: "#BC1A8D",
        bordercolor: "##DDDDDD",
      },
    },
  },
  plugins: [],
};
