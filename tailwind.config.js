/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "react-bg": "url(/src/assets/og-home.png)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
