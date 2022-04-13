module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#4D77FF",
      },
    },
    backgroundImage: {
      "banner-bg-image":
        "url('/components/Banner/assets/banner-background.png')",
    },
  },
  plugins: [],
};
