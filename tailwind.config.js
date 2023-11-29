/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#020617",
          white: "#f8fafc",
          grey: "#0f172a",
          grey_light: "#e2e8f0",
          neutral: "#e5e5e5",
          neutral_light: "#fafafa",
        },
        outline: "#cbd5e1",

        background: "##f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
