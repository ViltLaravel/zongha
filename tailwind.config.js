/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins_regular: ["poppins_regular"],
        poppins_bold: ["poppins_bold"],
      },
    },
  },
  plugins: [],
};
