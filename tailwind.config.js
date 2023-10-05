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
      gray: "#828297",
      heroBg: "#ECF9FF",
      black: "#111111",
      white: "#ffffff",
      'primary-hover': "#363636",
      'secondary-hover': "#007041",
    },
    borderRadius: {
      'standard': '10px',
    },
    fontSize: {
      'h1': '44px',
      'h2': '36px',
      'h3': '28px',
      'h4': '26px',
      'h5': '24px',
      'h6': '22px',
    }
  },
  plugins: [],
};
