import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-main": "#654940",
        "brown-sub": "#65494089",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        diphylleia: ["var(--font-diphylleia)"],
        "serif-kr": ["var(--font-noto-serif-kr)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
