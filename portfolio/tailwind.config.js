/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-color": "#49a09d",
        custom: {
          primary: "rgb(95, 44, 130)",
          secondary: "rgb(73, 160, 157)",
          customGray: "rgba(217, 217, 217, 0.2)",
        },
      },
      height: {
        "h-500": "500px",
      },
    },
  },
  plugins: [],
};
