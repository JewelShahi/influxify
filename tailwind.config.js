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
      secondary: "#0fba34",
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
      'h1': '50px',
      'h2': '45px',
      'h3': '26px',
      'h4': '24px',
      'h5': '22px',
      'h6': '20px',
    },
    screens: {
      'xs' : {'max' : '320px'},
      // => @media (max-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lmd' :'800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'sxl': '1243px',
      // => @media (min-width: 1243px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
