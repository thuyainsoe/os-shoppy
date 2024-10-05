/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#0094CD",
        lightgray: "#EFF0F5",
        darkgray: "#828282",
        headingcolor: "#414141",
        violet: "#BC1A8D",
      },
    },
  },
  plugins: [],
};
