import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          elevated: "#161b22",
          subtle: "#1c2129",
          inset: "#010409",
        },
        border: {
          DEFAULT: "#30363d",
          muted: "#21262d",
        },
        fg: {
          DEFAULT: "#e6edf3",
          muted: "#8b949e",
          subtle: "#6e7681",
        },
        primary: {
          DEFAULT: "#58a6ff",
          hover: "#79b8ff",
          ring: "rgba(88,166,255,0.35)",
        },
        accent: {
          DEFAULT: "#ff9472",
          warm: "#ffb088",
          deep: "#f97758",
        },
        success: "#3fb950",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(48,54,61,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(48,54,61,0.25) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(88,166,255,0.18) 0%, rgba(13,17,23,0) 70%)",
        "accent-glow":
          "radial-gradient(40% 40% at 80% 20%, rgba(255,148,114,0.15) 0%, rgba(13,17,23,0) 70%)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(48,54,61,0.6)",
        "card-hover":
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(88,166,255,0.35), 0 20px 60px -20px rgba(88,166,255,0.25)",
        glow: "0 0 0 1px rgba(88,166,255,0.4), 0 12px 40px -10px rgba(88,166,255,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
