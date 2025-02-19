import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151518",
        white: "#F7F1D7",
        green: "#0CA45A",
      },
      screens: {
        'xs': {'max': '389px'},
      },

    },
  },
  plugins: [],
} satisfies Config;
