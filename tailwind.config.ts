/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
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
        'error-content': '#890d0d',
        stroke: {
          1: '#26242C'
        },
        n: {
          1: '#FFFFFF',
          2: '#CAC6DD',
          3: '#ADA8C3',
          4: '#757185',
          5: '#3F3A52',
          6: '#252134',
          7: '#15131D',
          8: '#0E0C15',
          9: '#474060',
          10: '#43435C',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275'
        }
      },
      fontFamily: {
        sans: ['var(--font-sora)', ...fontFamily.sans],
        code: 'var(--font-code)',
        grotesk: 'var(--font-grotesk)'
      },
      letterSpacing: {
        tagline: '.15em'
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem'
      },
      opacity: {
        15: '.15'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'linear'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      borderWidth: {
        DEFAULT: '0.0625rem'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient':
          'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)'
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
