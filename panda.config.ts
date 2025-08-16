import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          glitch: {
            bg: { value: "#0d0d0d" },
            primary: { value: "#00f2ea" },
            secondary: { value: "#a855f7" },
            text: { value: "#e5e5e5" },
            disabled: { value: "#555" },
            dark: { value: "#050505" },
          },
        },
        fonts: {
          mono: {
            value: '"Fira Code", Consolas, "Courier New", Courier, monospace',
          },
        },
        animations: {
          glitchDuration: { value: "0.4s" },
          glitchCheckboxDuration: { value: "0.3s" },
        },
        sizes: {
          checkboxSize: { value: "1.5em" },
          checkboxMarkSize: { value: "60%" },
        },
        spacing: {
          checkboxGap: { value: "0.75rem" },
          checkboxWrapperGap: { value: "1.5rem" },
          checkboxWrapperPadding: { value: "2rem" },
        },
        radii: {
          checkboxWrapper: { value: "1rem" },
        },
      },
      keyframes: {
        glitchButton: {
          "0%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
          "20%": {
            transform: "translate(-0.3rem, 0.15rem)",
            clipPath: "inset(50% 0 20% 0)",
          },
          "40%": {
            transform: "translate(0.15rem, -0.1rem)",
            clipPath: "inset(20% 0 60% 0)",
          },
          "60%": {
            transform: "translate(-0.25rem, 0.1rem)",
            clipPath: "inset(80% 0 5% 0)",
          },
          "80%": {
            transform: "translate(0.25rem, -0.15rem)",
            clipPath: "inset(30% 0 45% 0)",
          },
          "100%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
        },
        glitchText: {
          "0%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
          "20%": {
            transform: "translate(-3px, 2px)",
            clipPath: "inset(50% 0 20% 0)",
          },
          "40%": {
            transform: "translate(2px, -1px)",
            clipPath: "inset(20% 0 60% 0)",
          },
          "60%": {
            transform: "translate(-2px, 1px)",
            clipPath: "inset(80% 0 5% 0)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
            clipPath: "inset(30% 0 45% 0)",
          },
          "100%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
        },
        pulseWave: {
          from: {
            transform: "scale(1)",
            opacity: "0.7",
          },
          to: {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
        glitchCheckbox: {
          "0%": {
            transform: "translate(-50%, -50%)",
            clipPath: "inset(0 0 0 0)",
          },
          "20%": {
            transform: "translate(calc(-50% - 3px), calc(-50% + 2px))",
            clipPath: "inset(50% 0 20% 0)",
          },
          "40%": {
            transform: "translate(calc(-50% + 2px), calc(-50% - 1px))",
            clipPath: "inset(20% 0 60% 0)",
          },
          "60%": {
            transform: "translate(calc(-50% - 2px), calc(-50% + 1px))",
            clipPath: "inset(80% 0 5% 0)",
          },
          "80%": {
            transform: "translate(calc(-50% + 2px), calc(-50% - 2px))",
            clipPath: "inset(30% 0 45% 0)",
          },
          "100%": {
            transform: "translate(-50%, -50%)",
            clipPath: "inset(0 0 0 0)",
          },
        },
        glitchLabel: {
          "0%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
          "20%": {
            transform: "translate(-0.2rem, 0.1rem)",
            clipPath: "inset(50% 0 20% 0)",
          },
          "40%": {
            transform: "translate(0.1rem, -0.1rem)",
            clipPath: "inset(20% 0 60% 0)",
          },
          "60%": {
            transform: "translate(-0.15rem, 0.1rem)",
            clipPath: "inset(80% 0 5% 0)",
          },
          "80%": {
            transform: "translate(0.15rem, -0.15rem)",
            clipPath: "inset(30% 0 45% 0)",
          },
          "100%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)",
          },
        },
        scanVertical: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "25%": {
            opacity: "0.5",
          },
          "75%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
        },
        dataPulse: {
          "0%, 100%": {
            transform: "scaleY(0.2)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scaleY(1)",
            opacity: "0.8",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
