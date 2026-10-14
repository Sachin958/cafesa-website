import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#FAF3E7", bean: "#3B2416", forest: "#2F5D3A", gold: "#C49A3C" },
    fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-body)", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
