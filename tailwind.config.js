module.exports = {
  content: ["./src/*.html", "./src/js/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      heading: "'Lexend', sans-serif",
      body: "'Inter', sans-serif",
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        primary: "#4A6CF7",
        "dark-text": "#79808A",
        dark: "#111722",
      },
    },
  },
  plugins: [],
  prefix: "ud-",
};
