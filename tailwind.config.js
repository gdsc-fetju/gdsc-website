/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#428eff",
          red: "#ff5145",
          yellow: "#ffbb01",
          green: "#38a852",
          black: "#202124",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
}
