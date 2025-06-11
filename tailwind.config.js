// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // 👈 This adds support for `xs:*` utility classes
      },
      colors: {
        primary: "#030014",
        "light-100": "#cecefb",
        "light-200": "#a8b5db",
        "gray-100": "#9ca4ab",
        "dark-100": "#0f0d23",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.png')",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
