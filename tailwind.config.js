/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#222737",
        gray: "#252C3B",
        warning: "#FBBC05",
        success: "#40CBB3",
        danger: "#FF5AA5",
        primary: "#5AD7FF",
        "border-color": "#3f4a63",
      },
    },
  },
  plugins: [],
};
