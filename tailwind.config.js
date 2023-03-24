/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-100": "#fbaf85",
        "orange-300": "#D87D4A",
        "gray-20": "#FAFAFA",
        "gray-30": "#F1F1F1",
        white: "#FFFFFF",
        black: "#000000",
        "black-10": "#101010",
      },
      backgroundImages: {
        mobile: "./assets/home/mobile/image-header.jpg",
        tablet: "./assets/home/tablet/image-header.jpg",
        desktop: "./assets/home/desktop/image-hero.jpg",
      },
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
    },
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
