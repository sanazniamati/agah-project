/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // backgroundPosition: {
    //   "bottom-4": "center bottom 1rem",
    // },
    extend: {
      fontFamily: {
        font1: "font1",
        font2: "font2",
        font3: "font3",
      },
      colors: {
        darkblue: "#003064",
        darkPurpel: "#5C21B7",
        grayLight: "#F9FBFD",
      },
      boxShadow: {
        btnShadow: "0 2px 6px 0px rgba(31, 27, 45, 1)",
      },
      backgroundImage: {
        autoAgah: "url('/img/autoAgahBanner.jpg')",
        about: "url('/img/about.svg')",
        branch: "url('/img/branch.jpg')",
      },
    },
  },
  plugins: [],
};
