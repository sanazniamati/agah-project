/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: "font1",
        font2: "font2",
        font3: "font3",
      },
      colors: {
        darkblue: "#003064",
      },
      boxShadow: {
        btnShadow: "0 2px 6px 0px rgba(31, 27, 45, 1)",
      },
    },
  },
  plugins: [],
};
