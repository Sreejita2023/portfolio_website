/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textdark: "var(--textdark)",
        textdarkaccent: "var(--textdarkaccent)",
        textdarkgray: "var(--textdarkgray)",
        textlight: "var(--textlight)",
        textlightaccent: "var(--textlightaccent)",
        textlightgray: "var(--textlightgray)",
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        label: "var(--label-font-family)",
        text: "var(--text-font-family)",
        "text-big": "var(--text-big-font-family)",
        "text-small": "var(--text-small-font-family)",
      },
    },
  },
  plugins: [],
}

