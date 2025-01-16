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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          DEFAULT: "#808080",
        },
      },
      keyframes: {
        wave: {
          "to, 100%": {
            transform: "rotate(360deg)",
          },
        },
        firework: {
          "from, 0%": {
            width: "50%",
            height: "50%",
            backgroundColor: "#557c55",
            opacity: "1",
          },
          "30%": {
            opacity: "1",
          },
          "to, 100%": {
            width: "150%",
            height: "150%",
            backgroundColor: "#a6cf98",
            opacity: "0",
          },
        },
      },
      animation: {
        wave: "wave 8s linear infinite",
        firework: "firework 1.3s 0.1s ease infinite both",
      },
    },
  },
  plugins: [],
};
export default config;
