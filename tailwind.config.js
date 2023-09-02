/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        paragraphColor: "#717273",
        mediaSVGColor: "#545454",
        navLinksColor: "#b7b3b5",
      },
    },
  },
  plugins: [],
};
