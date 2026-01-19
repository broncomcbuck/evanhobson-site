/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        sage: "#6F8F72",
        tan: "#F8F7F4",
        dark: "#2E2D2B",
        sand: "#F3EBDD",
        clay: "#C7A27D",
        mesa: "#A36D3A",
        bark: "#3B2F2F",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Literata", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
