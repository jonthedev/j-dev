/** @type {import('tailwindcss').Config} */

import animationsData from "./src/theme/animations/index"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },

      colors: {
        pink: {
          650: "#e10098",
        },
      },
      animation: animationsData.animations,
      keyframes: animationsData.keyframes,
    },
  },
  plugins: [],
}
