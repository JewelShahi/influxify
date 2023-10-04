/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      primary: "#060640",
      secondary: "#00AA63",
      paragraph: "#828297",
      heroBg: "#DFF3FD",
      black: "#111111",
      white: "#ffffff",
    },
  },
  plugins: [],
};
