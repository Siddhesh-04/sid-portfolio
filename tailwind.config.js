/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-teal': '#14b8a6',
        'neon-purple': '#8b5cf6',
        'neon-coral': '#ff6b6b',
        'neon-yellow': '#ffd93d',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'robot-float': 'robot-float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
      },
      keyframes: {
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'robot-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(20, 184, 166, 0.5), 0 0 10px rgba(20, 184, 166, 0.3), 0 0 15px rgba(20, 184, 166, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(20, 184, 166, 0.8), 0 0 20px rgba(20, 184, 166, 0.5), 0 0 30px rgba(20, 184, 166, 0.3)',
          },
        },
        'circuit-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '15%, 49%': {
            transform: 'translate(-2px, 0)',
          },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '21%, 62%': {
            transform: 'translate(2px, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}