/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#2A7C84",
        dark: "#1E1E1E",
        "blue-gray": "#636C80",
        gray: "#909090",
        pink: "#FF9DC5",
        "light-gray": "#B0B0B0",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        "montserrat-alt": ["montserrat alternates"],
        playfair: ["Playfair Display"],
        sallyna: ["Sallyna Cattalya"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
