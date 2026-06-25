/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0b0d",
        coal: "#111317",
        panel: "#16181d",
        steel: "#23272f",
        iron: "#2f343d",
        edge: "#3a404a",
        ash: "#9aa1ad",
        cloud: "#e8eaee",
        accent: {
          DEFAULT: "#c2c8d2",
          600: "#9097a3",
          400: "#e9edf2",
          glow: "#c2c8d233",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
        "accent-sheen":
          "linear-gradient(180deg, #f1f3f6 0%, #cdd2da 42%, #aeb4bf 52%, #cdd2da 60%, #e8ebef 100%)",
        "plate":
          "radial-gradient(120% 120% at 0% 0%, #1b1e24 0%, #0c0d10 60%)",
      },
      boxShadow: {
        plate: "0 10px 40px -10px rgba(0,0,0,.7)",
        glow: "0 0 0 1px rgba(194,200,210,.45), 0 8px 24px -8px rgba(194,200,210,.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spark": {
          "0%,100%": { opacity: ".3" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,.84,.44,1) both",
        spark: "spark 2.2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
