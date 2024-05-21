const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "4-1/6": "62.66%",
        "4-2/6": "58.66%",
        "basic-circle": "650px",
      },
      height: {
        "4-1/6": "62.66%",
        "4-2/6": "58.66%",
        "basic-circle": "650px",
        "basic-video": "550px",
      },
      dropShadow: {
        "lg-1": "1px 2px 5px rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        inner: "inset 0 1px 4px 0 rgba(0, 0, 0, 0.15)",
      },
      colors: {
        basic: "#A020F0",
        "basic-100": "#A020D0",
      },
    },
  },
  plugins: [],
});
