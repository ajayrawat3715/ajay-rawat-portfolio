import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#05070B", // Deep Space Obsidian
          subtle: "#0A0E17",
          surface: "#0F1623",
          elevated: "#151E2E",
          border: "#1E2B40",
          "border-bright": "#2D3F5D",
        },
        accent: {
          DEFAULT: "#00E5FF", // Electric Cyber Cyan
          hover: "#33EBFF",
          muted: "rgba(0, 229, 255, 0.12)",
          ring: "rgba(0, 229, 255, 0.35)",
        },
        sand: {
          DEFAULT: "#F0F6FC", // Ice White
          dim: "#C9D1D9",
          muted: "#8B949E",
          subtle: "#484F58",
        },
        neon: {
          cyan: "#00E5FF",
          mint: "#00F5A0",
          amber: "#FFB800",
          purple: "#A855F7",
          blue: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        widest: "0.15em",
        futuristic: "0.2em",
      },
      boxShadow: {
        precision: "0 1px 1px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 229, 255, 0.12)",
        "precision-hover": "0 8px 30px -4px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 229, 255, 0.45)",
        glow: "0 0 35px -5px rgba(0, 229, 255, 0.35)",
        "glow-mint": "0 0 35px -5px rgba(0, 245, 160, 0.35)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(0,229,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.035) 1px, transparent 1px)",
        "grid-fine": "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-md": "48px 48px",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scanline: "scanline 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
