/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A2640",
        lightGrey: "#f1f1f1",
        brand: {
          green: "#65E4A3",
          gray: "#777777",
        },
      },
      lineHeight: {
        "extra-loose": "72px",
      },
      borderRadius: {
        56: "56px",
        240: "240px",
      },
      height: {
        60: "60px",
      },
    },
  },
  plugins: [],
};
