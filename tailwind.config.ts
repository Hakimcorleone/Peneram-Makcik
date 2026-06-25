import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7E8",
        beige: "#F4D6A0",
        golden: "#B76E1F",
        caramel: "#7A3E16",
        cocoa: "#2A160C",
        whatsapp: "#1FAF5B",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(122, 62, 22, 0.12)",
        card: "0 12px 28px rgba(42, 22, 12, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
