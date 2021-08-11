module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        dark: "#282c34",
      },
      height: {
        "10-screen": "40vh",
      },
      textColor: {
        link: "#61dafb",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
