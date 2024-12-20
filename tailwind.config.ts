import type { Config } from "tailwindcss";

export default {
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
      },
      keyframes: {
        'christmas-light-1': {
          '0%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f40',
            color: '#ff0000'
          },
          '50%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa',
            color: '#00ff00'
          }
        },
        'christmas-light-2': {
          '0%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa',
            color: '#00ff00'
          },
          '50%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f40',
            color: '#ff0000'
          }
        }
      },
      animation: {
        'christmas-light-1': 'christmas-light-1 2s ease-in-out infinite',
        'christmas-light-2': 'christmas-light-2 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;