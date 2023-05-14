/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "IranSans-bold": ["IranSans-bold"],
        "IranSans-medium": ["IranSans-medium"],
        "IranSans-Regular": ["RegulaIranSans-Regularr"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
