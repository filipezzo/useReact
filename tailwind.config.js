/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "react-bg": "url(/src/assets/react.png)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
