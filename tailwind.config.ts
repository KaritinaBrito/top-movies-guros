import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      guros: {
        gray950: "#273138",
        gray500: "#5C7284",
        gray300: "#B9BFC6",
        blue500: "#4C42E4",
        white: "#FFFFFF",
        pink500: "#E5004D"
      }
    }
  },
  plugins: [],
};
export default config;
