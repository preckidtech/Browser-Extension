/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(34,45,67)",
        lightTheme: "hsl(226, 11%, 37%)",
        lightred: "hsl(3, 86%, 64%)",
        lightGrey: "(225, 23%, 24%)",
        darkTheme: "linear-gradient(180deg, #040918 0%, #091540 100%)",
        lightBtn: "hsl(226, 11%, 37%)",
      },
    },
  },
  plugins: [],
};
