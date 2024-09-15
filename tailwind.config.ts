import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Oswald: ["var(--font-Oswald)"],
      },
      colors: {
        'snow': {
          '50': '#f5f6f5',
          '100': '#eef0ee',
          '200': '#daddda',
          '300': '#bac0b9',
          '400': '#949d93',
        },
        'sonavy': '#2e3754',
      },
    },
  },
  plugins: [],
};
export default config;
