import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./lib/**/*.{js,jsx,ts,tsx}', "./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          glitch: {
            bg: { value: '#0d0d0d' },
            primary: { value: '#00f2ea' },
            secondary: { value: '#a855f7' },
            text: { value: '#e5e5e5' },
            disabled: { value: '#555' },
            dark: { value: '#050505' }
          }
        },
        fonts: {
          mono: { value: '"Fira Code", Consolas, "Courier New", Courier, monospace' }
        },
        animations: {
          glitchDuration: { value: '0.4s' }
        }
      },
      keyframes: {
        glitchText: {
          '0%': { 
            transform: 'translate(0)', 
            clipPath: 'inset(0 0 0 0)' 
          },
          '20%': { 
            transform: 'translate(-3px, 2px)', 
            clipPath: 'inset(50% 0 20% 0)' 
          },
          '40%': { 
            transform: 'translate(2px, -1px)', 
            clipPath: 'inset(20% 0 60% 0)' 
          },
          '60%': { 
            transform: 'translate(-2px, 1px)', 
            clipPath: 'inset(80% 0 5% 0)' 
          },
          '80%': { 
            transform: 'translate(2px, -2px)', 
            clipPath: 'inset(30% 0 45% 0)' 
          },
          '100%': { 
            transform: 'translate(0)', 
            clipPath: 'inset(0 0 0 0)' 
          }
        },
        pulseWave: {
          'from': {
            transform: 'scale(1)',
            opacity: '0.7'
          },
          'to': {
            transform: 'scale(2.5)',
            opacity: '0'
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'react'
});
