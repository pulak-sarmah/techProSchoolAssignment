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
          n_blue: "#001F3F",
          n_blue_light: "#1e3a8a",
          grey_light: "#e2e8f0",
          neutral: "#e5e5e5",
          neutral_light: "#fafafa",
        },
        outline: "#cbd5e1",

        background: "#fafafa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
