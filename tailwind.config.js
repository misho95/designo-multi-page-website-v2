/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PEACH: "#E7816B",
        BLACK: "#1D1C1E",
        LIGHT_PEACH: "#FFAD9B",
        DARK_GREY: "#333136",
        LIGHT_GREY: "#F1F3F5",
      },
      fontFamily: {
        JOST: "Jost, sans-serif",
      },
    },
  },
  plugins: [],
};
