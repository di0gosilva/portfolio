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
        'xxxs': {'max': '330px'},
        'xxs': {'min': '331px', 'max': '365px'},
        'xs': {'min': '366px','max': '388px'},
        'sm': {'min': '590px', 'max': '767px'},
        'xlwin': {'min': '1365px', 'max': '1439px'},
      },
    },
  },
  plugins: [],
} satisfies Config;
