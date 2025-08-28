/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // enable dark mode via "dark" class
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        // 🌙 Dark mode base
        primary: "#0d1b2a",        // page background in dark
        surfaceDark: "#1b263b",    // darker cards/sections
        textDark: "#e6edf5",

        // ☀️ Light mode base
        surfaceLight: "#f7f9fc",   // page background in light
        textLight: "#0d1b2a",

        // 🎨 Accent colors
          accent: "#ee9b00",
          accentHover: "#d98a00",
        // Extra utility color
        stairs: "#3c6e71",         // used in your stair animation
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
