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
      backgroundImage: {
        mobileHeader: "url('/public/assets/home/mobile/image-header.jpg')",
        tabletHeader: "url('/public/assets/home/tablet/image-header.jpg')",
        desktopHeader: "url('/public/assets/home/desktop/image-hero.jpg')",
      },
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
      // etterSpacing: {
      //   tightest: "-.075em",
      //   tighter: "-.05em",
      //   tight: "-.025em",
      //   normal: "0",
      //   wide: ".025em",
      //   wider: ".05em",
      //   widest: ".1em",
      //   widestXl: ".25em",
      // },
    },
  },
  plugins: [],
};
