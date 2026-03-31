/** @type {import('tailwindcss').Config} */
module.exports = {
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
      primary: "var(--font-inter)",
    },
    extend: {
      colors: {
        canvas:      "#daeaf5",   // pale sky blue page base
        surface:     "#eef5fb",   // near-white with blue tint
        stroke:      "#a8cce0",   // medium blue border
        ink:         "#0d1b2a",   // dark navy text
        inkMuted:    "#3a5a78",   // medium navy muted text
        accent:      "#2a6a9a",   // deep navy accent
        accentHover: "#1e5580",
        accentLight: "#c8e0f4",   // light blue tint
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
