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
        primary: "#1A202C",
        primary1: "#86949f",
        secondary: "#E5E8EB",
        onhover: "#2A61CC",
        "skill-primary": "#212938",
        "skill-secondary": "#252d3d",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
