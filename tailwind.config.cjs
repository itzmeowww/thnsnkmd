/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Noto Sans JP", "Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
