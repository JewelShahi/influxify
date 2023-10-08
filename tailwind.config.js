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
      secondary: "#00E5CC",
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
      'h2': '38px',
      'h3': '26px',
      'h4': '24px',
      'h5': '22px',
      'h6': '20px',
    }
  },
  plugins: [],
};
