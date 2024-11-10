import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        growY: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(3)' },
        },
        fadeIn: {
          '0%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50px)' },
          '100%': { transform: 'translateX(0)' },
        },
        
      },
      animation: {
        'grow-y': 'growY 1s ease forwards',
        'fade-in': 'fadeIn 2s ease forwards 0.01s',
        'slide-in': 'slideIn 1s ease backwards 0.09s',
      },
    },
  },
  plugins: [],
};
export default config;
