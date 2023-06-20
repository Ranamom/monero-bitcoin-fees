const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "astro-gray": {
          100: "#F2F6FA",
          200: "#BFC1C9",
          300: "#858B98",
          400: "#545864",
          500: "#343841",
          600: "#23262D",
          700: "#17191E",
        },
        monero: "#fa6800",
        bitcoin: "#f6931a",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // yanked from astro.build :-)
      addBase({});
      addComponents({
        ".noise-container": {
          position: "relative",
          isolation: "isolate",
          backgroundColor: theme("colors.astro-gray.700"),
        },
        ".noise-underlay": {
          zIndex: -30,
          position: "relative",
        },
        ".noise": {
          zIndex: -20,
          position: "absolute",
          inset: 0,
          backgroundImage: `url("/assets/noise.webp")`,
          opacity: 0.4,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        },
        ".noise-panel": {
          "@apply relative isolate border border-astro-gray-500 bg-astro-gray-600 shadow-xl":
            {},
          "&::before": {
            "@apply absolute inset-0 opacity-40 mix-blend-overlay -z-20": {},
            content: "''",
            backgroundImage: `url("/assets/noise.webp")`,
          },
        },
        ".bg-grid": {
          // https://stackoverflow.com/a/32861765/1332403
          backgroundSize: "20px 20px",
          backgroundImage: `linear-gradient(to right, ${theme(
            "colors.astro-gray.600"
          )} 1px, transparent 1px),\n    linear-gradient(to bottom, ${theme(
            "colors.astro-gray.600"
          )} 1px, transparent 1px)`,
          backgroundPosition: "top center",
          imageRendering: "pixelated",

          // https://stackoverflow.com/a/9670876/1332403
          maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
        },
      });
    }),
  ],
};
