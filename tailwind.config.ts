import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 12px 40px rgba(0, 186, 227, 0.22)",
      },
      colors: {
        brandCyan: "rgb(0 186 227)",
        brandRed: "rgb(197 0 24)",
      },
      backgroundImage: {
        heroRadial:
          "radial-gradient(circle at 10% 15%, rgba(0,186,227,.22), transparent 18%), radial-gradient(circle at 90% 10%, rgba(197,0,24,.18), transparent 20%), linear-gradient(180deg, #08131a 0%, #0b1f29 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
