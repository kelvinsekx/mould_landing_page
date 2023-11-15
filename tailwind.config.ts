import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moundUpWhite: "#FFFDFA",
        moundUpBlack: "#0F0800",
        moundUpGreen: "#006A4E",
        moundUpBrown: '#7E7E7E',
        moundUpGreen__light: "#E0EBE8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "30": "120px",
      },
    },
  },
  plugins: [],
};
export default config;
