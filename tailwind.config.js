/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
        "default-background": "url(../../public/bg1.png);",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open sans", "serif"],
      },

      colors: {
        primaryBtn: "#316782",
        secondaryBtn: "#1572A1",
        navbarcolor: "#092E49",
      },

      height: {
        128: "32rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1232px", // Sesuaikan dengan lebar yang diinginkan
          xl: "1232px",
        },
      },
    },
  },
  plugins: [],
});
