/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0e17',
          800: '#0d1321',
          700: '#131a2e',
          600: '#1a2340',
          500: '#243056',
        },
        neon: {
          green: '#00ff88',
          cyan: '#00e5ff',
          blue: '#4d7cff',
          purple: '#a855f7',
        },
        slate: {
          850: '#141c2f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'typing': 'typing 2s steps(30) forwards',
        'scan-line': 'scan-line 8s linear infinite',
        'circuit-flow': 'circuit-flow 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 136, 0.3), 0 0 10px rgba(0, 255, 136, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'circuit-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
