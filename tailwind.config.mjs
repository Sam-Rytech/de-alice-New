// tailwind.config.mjs
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      primary: "#ea0f0a",
      secondary: "#000000",
      accent: "#ea0f0a",
      border: "#ea0f0a",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-dmSans)", ...fontFamily.sans],
        secondary: ["var(--font-barlow)", ...fontFamily.sans],
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/hero-1.jpg')",
      },
    },
  },
};
