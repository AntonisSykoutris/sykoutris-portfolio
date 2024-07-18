/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
      colors: {
        primary: "#29c27f",
        "primary-content": "#04975e",
        "primary-dark": "#0c563b",
        "primary-light": "#0fba74",

        secondary: "#ffffff",
        "secondary-content": "#e6e6e6",
        "secondary-dark": "#b8b8b8",
        "secondary-light": "#eeeeee",

        background: "#292929",
        foreground: "#fbfbfb",
        border: "#dedde2",

        copy: "#252329",
        "copy-light": "#645e6e",
        "copy-lighter": "#8a8495",

        success: "#3aed3a",
        warning: "#eded3a",
        error: "#ed3a3a",

        "success-content": "#032503",
        "warning-content": "#252503",
        "error-content": "#ffffff"
    },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
