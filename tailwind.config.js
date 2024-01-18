/** @type {import('tailwindcss').Config} */

import animationsData from "./src/theme/animations/index"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      animation: animationsData.animations,
      keyframes: animationsData.keyframes,
    },
  },
  plugins: [],
}
