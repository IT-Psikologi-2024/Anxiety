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
      backgroundImage: {},
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      rotate: {
        '15.60': '15.60deg',
        '-11.34': '-11.34deg',
      },
      boxShadow: {
        'inner-custom': 'inset 4px 4px 16px rgba(0, 0, 0, 0.25)',
        'custom-outer': '3px 3px 8px white, inset 4px 4px 16px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        'product-color': '#618758',
      }
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.text-shadow-white-outline': {
          textShadow: '0px 0px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
        },
        '.hide-number-input-arrows': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
        },
        '.hide-number-input-arrows::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.hide-number-input-arrows::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;