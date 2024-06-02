// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
