module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      fontFamily: {
        lexend: [
          "Lexend",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        primary: "#191A1E",
        primary1: "#86949f",
        secondary: "#E5E8EB",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
