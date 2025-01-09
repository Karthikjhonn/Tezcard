/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        accent: "#233A6C",
        black: "#1E1E1E",
        primary:"#575760",
        halfWhite:"#FFFDE9"
      },
      fontFamily: {
        'Space-Mono': ["Space-Mono"],
        'Sora-Light': ["Sora-Light"],
        'Sora-Medium': ["Sora-Medium"],
        'Sora-Regular': ["Sora-Regular"],
        'Sora-SemiBold': ["Sora-SemiBold"],
      },
    },
  },
  plugins: [],
};
