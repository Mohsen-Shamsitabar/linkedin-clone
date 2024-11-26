import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1128px",
      },
    },
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-outline-bg": "var(--primary-outline-bg)",
        focus: "var(--focus)",
        highlight: "var(--highlight)",
        icon: "var(--icon)",
        divider: "var(--divider)",

        // === === === ===

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        ring: "var(--ring)",
        radius: "var(--radius)",
        border: "var(--border)",
        input: "var(--input)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        h1: ["3rem", "1.25"],
        h2: ["2rem", "1.25"],
        h3: ["1.875rem", "1.25"],

        subtitle1: ["0.875rem", "1.25"],
        subtitle2: ["0.75rem", "1.5"],

        body1: ["1.25rem", "1.5"],
        body2: ["1rem", "1.5"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  // plugins: [tailwindAnimate],
};
export default config;
