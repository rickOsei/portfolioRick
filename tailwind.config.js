/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        secondaryColor: "#52d3b9",
        bgColorLight: "#f4faf9a0",
        bgColorDark: "#050e1d9f",
      },
    },
  },
  plugins: [],
};
