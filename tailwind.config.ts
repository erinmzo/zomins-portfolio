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
        black: "#000000",
        white: "#ffffff",
        blue: "#006aff",
        orange: "#ffa434",
        green: "#21ca51",
        gray: {
          1: "#f8f8f8",
          2: "#e8e8e8",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
