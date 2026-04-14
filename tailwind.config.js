/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Clash Display"', '"DM Sans"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#00D4AA',
          dark: '#00B892',
          light: '#33DDBB',
        },
        surface: {
          light: '#F7F8FC',
          dark: '#0D1117',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00D4AA, 0 0 10px #00D4AA' },
          '100%': { boxShadow: '0 0 20px #00D4AA, 0 0 40px #00D4AA' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
