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
        paragraphColor: "#717273",
        mediaSVGColor: "#545454",
        bgColor: "#f5f5f558",
      },
    },
  },
  plugins: [],
};
