import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F3D91",
          50: "#EAF0FB",
          100: "#CBDAF4",
          400: "#3563B3",
          600: "#0F3D91",
          700: "#0C3175",
          900: "#081F4A",
        },
        gold: {
          DEFAULT: "#EAB308",
          50: "#FEF9E7",
          400: "#F4CB3A",
          600: "#EAB308",
          700: "#B9890A",
        },
        ink: "#0B1220",
        mist: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15,61,145,0.25)",
        soft: "0 8px 30px rgba(11,18,32,0.08)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(15,61,145,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,61,145,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
