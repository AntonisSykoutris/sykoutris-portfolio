import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

const CustomStyle = plugin(function ({
  addUtilities
}: {
  addUtilities: Function;
}) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective-1000': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  });
});

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9fe9f6',
        'primary-content': '#0d7789',
        'primary-dark': '#70def2',
        'primary-light': '#cef4fa',

        secondary: '#f69fec',
        'secondary-content': '#890d7b',
        'secondary-dark': '#f270e3',
        'secondary-light': '#facef5',

        background: '#eaf3f5',
        foreground: '#fafcfd',
        border: '#d4e7ea',

        copy: '#193034',
        'copy-light': '#427f8a',
        'copy-lighter': '#64a8b4',

        success: '#9ff69f',
        warning: '#f6f69f',
        error: '#f69f9f',

        'success-content': '#0d890d',
        'warning-content': '#89890d',
        'error-content': '#890d0d'
      }
    }
  },
  plugins: [CustomStyle, addVariablesForColors]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}

export default config;
