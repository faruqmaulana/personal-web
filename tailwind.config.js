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
        stack: "#12223A",
        active: "#d0d3d6",
        button: "#2a61cc",
        primary: "#1A202C",
        onhover: "#2A61CC",
        primary1: "#86949f",
        secondary: "#E5E8EB",
        "stack-color": "#59A7FF",
        "skill-primary": "#212938",
        "skill-secondary": "#2d374a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
