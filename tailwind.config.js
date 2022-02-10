/** @format */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        landscape: "images.landscape",
        portrait: "images.portrait",
      },
      colors: {
        "light-blue": "#D0D6F9",
        "dark-blue": "#0B0D17",
      },

      fontFamily: {
        condensed: "BarlowCondensed-Regular",
        bellefair: "Bellefair",
        regular: "Barlow-Regular",
      },
      spacing: {
        445: "445px",
        444: "444px",
        473: "473px",
        515: "515px",
        527: "527px",
        1024: "1024",
        573: "573px",
        458: "458px",
        310: "310px",
      },
      screens: {
        sm: "375px",
        md: "729px",
        lg: "1080px",
      },
    },
  },
  plugins: [],
};
