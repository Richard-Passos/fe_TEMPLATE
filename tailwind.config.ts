import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/app/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/styles/theme.{js,ts}',
    './src/utils/*.{jsx,tsx}'
  ],
  darkMode: [],
  corePlugins: {
    preflight: false
  },
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      bright: 'var(--mantine-color-bright)',
      text: 'var(--mantine-color-text)',
      body: 'var(--mantine-color-body)',
      error: 'var(--mantine-color-error)',
      placeholder: 'var(--mantine-color-placeholder)',
      anchor: 'var(--mantine-color-anchor)',
      dimmed: 'var(--mantine-color-dimmed)',
      border: 'var(--mantine-color-default-border)',
      black: 'var(--mantine-color-black)',
      white: 'var(--mantine-color-white)',
      default: {
        DEFAULT: 'var(--mantine-color-default)',
        hover: 'var(--mantine-color-default-hover)',
        color: 'var(--mantine-color-default-color)',
        border: 'var(--mantine-color-default-border)'
      },
      primary: {
        contrast: 'var(--mantine-primary-color-contrast)',
        text: 'var(--mantine-primary-color-text)',
        filled: {
          DEFAULT: 'var(--mantine-primary-color-filled)',
          hover: 'var(--mantine-primary-color-filled-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-primary-color-light)',
          hover: 'var(--mantine-primary-color-light-hover)',
          color: 'var(--mantine-primary-color-light-color)'
        },
        outline: {
          DEFAULT: 'var(--mantine-primary-color-light)',
          hover: 'var(--mantine-primary-color-light-hover)'
        },
        0: 'var(--mantine-primary-color-0)',
        1: 'var(--mantine-primary-color-1)',
        2: 'var(--mantine-primary-color-2)',
        3: 'var(--mantine-primary-color-3)',
        4: 'var(--mantine-primary-color-4)',
        5: 'var(--mantine-primary-color-5)',
        6: 'var(--mantine-primary-color-6)',
        7: 'var(--mantine-primary-color-7)',
        8: 'var(--mantine-primary-color-8)',
        9: 'var(--mantine-primary-color-9)'
      },
      dark: {
        text: 'var(--mantine-color-dark-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-dark-filled)',
          hover: 'var(--mantine-color-dark-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-dark-outline)',
          hover: 'var(--mantine-color-dark-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-dark-light)',
          hover: 'var(--mantine-color-dark-light-hover)',
          color: 'var(--mantine-color-dark-light-color)'
        },
        0: 'var(--mantine-color-dark-0)',
        1: 'var(--mantine-color-dark-1)',
        2: 'var(--mantine-color-dark-2)',
        3: 'var(--mantine-color-dark-3)',
        4: 'var(--mantine-color-dark-4)',
        5: 'var(--mantine-color-dark-5)',
        6: 'var(--mantine-color-dark-6)',
        7: 'var(--mantine-color-dark-7)',
        8: 'var(--mantine-color-dark-8)',
        9: 'var(--mantine-color-dark-9)'
      },
      gray: {
        text: 'var(--mantine-color-gray-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-gray-filled)',
          hover: 'var(--mantine-color-gray-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-gray-outline)',
          hover: 'var(--mantine-color-gray-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-gray-light)',
          hover: 'var(--mantine-color-gray-light-hover)',
          color: 'var(--mantine-color-gray-light-color)'
        },
        0: 'var(--mantine-color-gray-0)',
        1: 'var(--mantine-color-gray-1)',
        2: 'var(--mantine-color-gray-2)',
        3: 'var(--mantine-color-gray-3)',
        4: 'var(--mantine-color-gray-4)',
        5: 'var(--mantine-color-gray-5)',
        6: 'var(--mantine-color-gray-6)',
        7: 'var(--mantine-color-gray-7)',
        8: 'var(--mantine-color-gray-8)',
        9: 'var(--mantine-color-gray-9)'
      },
      red: {
        text: 'var(--mantine-color-red-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-red-filled)',
          hover: 'var(--mantine-color-red-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-red-outline)',
          hover: 'var(--mantine-color-red-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-red-light)',
          hover: 'var(--mantine-color-red-light-hover)',
          color: 'var(--mantine-color-red-light-color)'
        },
        0: 'var(--mantine-color-red-0)',
        1: 'var(--mantine-color-red-1)',
        2: 'var(--mantine-color-red-2)',
        3: 'var(--mantine-color-red-3)',
        4: 'var(--mantine-color-red-4)',
        5: 'var(--mantine-color-red-5)',
        6: 'var(--mantine-color-red-6)',
        7: 'var(--mantine-color-red-7)',
        8: 'var(--mantine-color-red-8)',
        9: 'var(--mantine-color-red-9)'
      },
      pink: {
        text: 'var(--mantine-color-pink-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-pink-filled)',
          hover: 'var(--mantine-color-pink-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-pink-outline)',
          hover: 'var(--mantine-color-pink-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-pink-light)',
          hover: 'var(--mantine-color-pink-light-hover)',
          color: 'var(--mantine-color-pink-light-color)'
        },
        0: 'var(--mantine-color-pink-0)',
        1: 'var(--mantine-color-pink-1)',
        2: 'var(--mantine-color-pink-2)',
        3: 'var(--mantine-color-pink-3)',
        4: 'var(--mantine-color-pink-4)',
        5: 'var(--mantine-color-pink-5)',
        6: 'var(--mantine-color-pink-6)',
        7: 'var(--mantine-color-pink-7)',
        8: 'var(--mantine-color-pink-8)',
        9: 'var(--mantine-color-pink-9)'
      },
      grape: {
        text: 'var(--mantine-color-grape-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-grape-filled)',
          hover: 'var(--mantine-color-grape-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-grape-outline)',
          hover: 'var(--mantine-color-grape-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-grape-light)',
          hover: 'var(--mantine-color-grape-light-hover)',
          color: 'var(--mantine-color-grape-light-color)'
        },
        0: 'var(--mantine-color-grape-0)',
        1: 'var(--mantine-color-grape-1)',
        2: 'var(--mantine-color-grape-2)',
        3: 'var(--mantine-color-grape-3)',
        4: 'var(--mantine-color-grape-4)',
        5: 'var(--mantine-color-grape-5)',
        6: 'var(--mantine-color-grape-6)',
        7: 'var(--mantine-color-grape-7)',
        8: 'var(--mantine-color-grape-8)',
        9: 'var(--mantine-color-grape-9)'
      },
      violet: {
        text: 'var(--mantine-color-violet-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-violet-filled)',
          hover: 'var(--mantine-color-violet-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-violet-outline)',
          hover: 'var(--mantine-color-violet-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-violet-light)',
          hover: 'var(--mantine-color-violet-light-hover)',
          color: 'var(--mantine-color-violet-light-color)'
        },
        0: 'var(--mantine-color-violet-0)',
        1: 'var(--mantine-color-violet-1)',
        2: 'var(--mantine-color-violet-2)',
        3: 'var(--mantine-color-violet-3)',
        4: 'var(--mantine-color-violet-4)',
        5: 'var(--mantine-color-violet-5)',
        6: 'var(--mantine-color-violet-6)',
        7: 'var(--mantine-color-violet-7)',
        8: 'var(--mantine-color-violet-8)',
        9: 'var(--mantine-color-violet-9)'
      },
      indigo: {
        text: 'var(--mantine-color-indigo-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-indigo-filled)',
          hover: 'var(--mantine-color-indigo-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-indigo-outline)',
          hover: 'var(--mantine-color-indigo-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-indigo-light)',
          hover: 'var(--mantine-color-indigo-light-hover)',
          color: 'var(--mantine-color-indigo-light-color)'
        },
        0: 'var(--mantine-color-indigo-0)',
        1: 'var(--mantine-color-indigo-1)',
        2: 'var(--mantine-color-indigo-2)',
        3: 'var(--mantine-color-indigo-3)',
        4: 'var(--mantine-color-indigo-4)',
        5: 'var(--mantine-color-indigo-5)',
        6: 'var(--mantine-color-indigo-6)',
        7: 'var(--mantine-color-indigo-7)',
        8: 'var(--mantine-color-indigo-8)',
        9: 'var(--mantine-color-indigo-9)'
      },
      blue: {
        text: 'var(--mantine-color-blue-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-blue-filled)',
          hover: 'var(--mantine-color-blue-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-blue-outline)',
          hover: 'var(--mantine-color-blue-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-blue-light)',
          hover: 'var(--mantine-color-blue-light-hover)',
          color: 'var(--mantine-color-blue-light-color)'
        },
        0: 'var(--mantine-color-blue-0)',
        1: 'var(--mantine-color-blue-1)',
        2: 'var(--mantine-color-blue-2)',
        3: 'var(--mantine-color-blue-3)',
        4: 'var(--mantine-color-blue-4)',
        5: 'var(--mantine-color-blue-5)',
        6: 'var(--mantine-color-blue-6)',
        7: 'var(--mantine-color-blue-7)',
        8: 'var(--mantine-color-blue-8)',
        9: 'var(--mantine-color-blue-9)'
      },
      cyan: {
        text: 'var(--mantine-color-cyan-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-cyan-filled)',
          hover: 'var(--mantine-color-cyan-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-cyan-outline)',
          hover: 'var(--mantine-color-cyan-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-cyan-light)',
          hover: 'var(--mantine-color-cyan-light-hover)',
          color: 'var(--mantine-color-cyan-light-color)'
        },
        0: 'var(--mantine-color-cyan-0)',
        1: 'var(--mantine-color-cyan-1)',
        2: 'var(--mantine-color-cyan-2)',
        3: 'var(--mantine-color-cyan-3)',
        4: 'var(--mantine-color-cyan-4)',
        5: 'var(--mantine-color-cyan-5)',
        6: 'var(--mantine-color-cyan-6)',
        7: 'var(--mantine-color-cyan-7)',
        8: 'var(--mantine-color-cyan-8)',
        9: 'var(--mantine-color-cyan-9)'
      },
      teal: {
        text: 'var(--mantine-color-teal-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-teal-filled)',
          hover: 'var(--mantine-color-teal-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-teal-outline)',
          hover: 'var(--mantine-color-teal-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-teal-light)',
          hover: 'var(--mantine-color-teal-light-hover)',
          color: 'var(--mantine-color-teal-light-color)'
        },
        0: 'var(--mantine-color-teal-0)',
        1: 'var(--mantine-color-teal-1)',
        2: 'var(--mantine-color-teal-2)',
        3: 'var(--mantine-color-teal-3)',
        4: 'var(--mantine-color-teal-4)',
        5: 'var(--mantine-color-teal-5)',
        6: 'var(--mantine-color-teal-6)',
        7: 'var(--mantine-color-teal-7)',
        8: 'var(--mantine-color-teal-8)',
        9: 'var(--mantine-color-teal-9)'
      },
      green: {
        text: 'var(--mantine-color-green-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-green-filled)',
          hover: 'var(--mantine-color-green-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-green-outline)',
          hover: 'var(--mantine-color-green-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-green-light)',
          hover: 'var(--mantine-color-green-light-hover)',
          color: 'var(--mantine-color-green-light-color)'
        },
        0: 'var(--mantine-color-green-0)',
        1: 'var(--mantine-color-green-1)',
        2: 'var(--mantine-color-green-2)',
        3: 'var(--mantine-color-green-3)',
        4: 'var(--mantine-color-green-4)',
        5: 'var(--mantine-color-green-5)',
        6: 'var(--mantine-color-green-6)',
        7: 'var(--mantine-color-green-7)',
        8: 'var(--mantine-color-green-8)',
        9: 'var(--mantine-color-green-9)'
      },
      lime: {
        text: 'var(--mantine-color-lime-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-lime-filled)',
          hover: 'var(--mantine-color-lime-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-lime-outline)',
          hover: 'var(--mantine-color-lime-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-lime-light)',
          hover: 'var(--mantine-color-lime-light-hover)',
          color: 'var(--mantine-color-lime-light-color)'
        },
        0: 'var(--mantine-color-lime-0)',
        1: 'var(--mantine-color-lime-1)',
        2: 'var(--mantine-color-lime-2)',
        3: 'var(--mantine-color-lime-3)',
        4: 'var(--mantine-color-lime-4)',
        5: 'var(--mantine-color-lime-5)',
        6: 'var(--mantine-color-lime-6)',
        7: 'var(--mantine-color-lime-7)',
        8: 'var(--mantine-color-lime-8)',
        9: 'var(--mantine-color-lime-9)'
      },
      yellow: {
        text: 'var(--mantine-color-yellow-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-yellow-filled)',
          hover: 'var(--mantine-color-yellow-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-yellow-outline)',
          hover: 'var(--mantine-color-yellow-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-yellow-light)',
          hover: 'var(--mantine-color-yellow-light-hover)',
          color: 'var(--mantine-color-yellow-light-color)'
        },
        0: 'var(--mantine-color-yellow-0)',
        1: 'var(--mantine-color-yellow-1)',
        2: 'var(--mantine-color-yellow-2)',
        3: 'var(--mantine-color-yellow-3)',
        4: 'var(--mantine-color-yellow-4)',
        5: 'var(--mantine-color-yellow-5)',
        6: 'var(--mantine-color-yellow-6)',
        7: 'var(--mantine-color-yellow-7)',
        8: 'var(--mantine-color-yellow-8)',
        9: 'var(--mantine-color-yellow-9)'
      },
      orange: {
        text: 'var(--mantine-color-orange-text)',
        filled: {
          DEFAULT: 'var(--mantine-color-orange-filled)',
          hover: 'var(--mantine-color-orange-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--mantine-color-orange-outline)',
          hover: 'var(--mantine-color-orange-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--mantine-color-orange-light)',
          hover: 'var(--mantine-color-orange-light-hover)',
          color: 'var(--mantine-color-orange-light-color)'
        },
        0: 'var(--mantine-color-orange-0)',
        1: 'var(--mantine-color-orange-1)',
        2: 'var(--mantine-color-orange-2)',
        3: 'var(--mantine-color-orange-3)',
        4: 'var(--mantine-color-orange-4)',
        5: 'var(--mantine-color-orange-5)',
        6: 'var(--mantine-color-orange-6)',
        7: 'var(--mantine-color-orange-7)',
        8: 'var(--mantine-color-orange-8)',
        9: 'var(--mantine-color-orange-9)'
      }
    },
    extend: {
      spacing: {
        px: '0.8px',
        '9/10': '90%',
        '2xs': 'var(--mantine-spacing-2xs)',
        xs: 'var(--mantine-spacing-xs)',
        sm: 'var(--mantine-spacing-sm)',
        md: 'var(--mantine-spacing-md)',
        lg: 'var(--mantine-spacing-lg)',
        xl: 'var(--mantine-spacing-xl)',
        '2xl': 'var(--mantine-spacing-2xl)'
      },
      fontSize: {
        xs: 'var(--mantine-font-size-xs)',
        sm: 'var(--mantine-font-size-sm)',
        md: 'var(--mantine-font-size-md)',
        lg: 'var(--mantine-font-size-lg)',
        xl: 'var(--mantine-font-size-xl)'
      },
      lineHeight: {
        xs: 'var(--mantine-line-height-xs)',
        sm: 'var(--mantine-line-height-sm)',
        md: 'var(--mantine-line-height-md)',
        lg: 'var(--mantine-line-height-lg)',
        xl: 'var(--mantine-line-height-xl)'
      },
      boxShadow: {
        DEFAULT: 'var(--mantine-shadow-md)',
        xs: 'var(--mantine-shadow-xs)',
        sm: 'var(--mantine-shadow-sm)',
        md: 'var(--mantine-shadow-md)',
        lg: 'var(--mantine-shadow-lg)',
        xl: 'var(--mantine-shadow-xl)'
      },
      dropShadow: {
        DEFAULT: 'var(--mantine-shadow-md)',
        xs: 'var(--mantine-shadow-xs)',
        sm: 'var(--mantine-shadow-sm)',
        md: 'var(--mantine-shadow-md)',
        lg: 'var(--mantine-shadow-lg)',
        xl: 'var(--mantine-shadow-xl)'
      },
      outlineWidth: {
        DEFAULT: '2px'
      },
      outlineColor: {
        DEFAULT: 'var(--mantine-primary-color-filled)'
      },
      outlineOffset: {
        DEFAULT: '2px'
      },
      borderRadius: {
        DEFAULT: 'var(--mantine-radius-default)',
        xs: 'var(--mantine-radius-xs)',
        sm: 'var(--mantine-radius-sm)',
        md: 'var(--mantine-radius-md)',
        lg: 'var(--mantine-radius-lg)',
        xl: 'var(--mantine-radius-xl)',
        inherit: 'inherit'
      },
      zIndex: {
        app: 'var(--mantine-z-index-app)',
        modal: 'var(--mantine-z-index-modal)',
        popover: 'var(--mantine-z-index-popover)',
        overlay: 'var(--mantine-z-index-overlay)',
        max: 'var(--mantine-z-index-max)'
      },
      minHeight: {
        bounds: 'var(--max-h)'
      },
      minWidth: {
        bounds: 'var(--max-w)'
      },
      maxHeight: {
        bounds: 'var(--max-h)'
      },
      maxWidth: {
        bounds: 'var(--max-w)'
      },
      fontFamily: {
        title: 'var(--mantine-font-family-headings)',
        display: 'var(--mantine-font-family)',
        monospace: 'var(--mantine-font-family-monospace)'
      },
      data: {
        closed: 'state=closed',
        open: 'state=open'
      },
      keyframes: {
        'scroll-indicator': {
          to: {
            transform: 'translateY(100%)'
          }
        }
      },
      animation: {
        'scroll-indicator':
          'scroll-indicator var(--mantine-duration, 2s) cubic-bezier(0.87, 0, 0.13, 1) infinite'
      },
      transitionTimingFunction: {
        backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
  },
  plugins: [
    require('tailwindcss-3d'),
    plugin(({ addVariant }) => {
      addVariant('dark', [
        '&[data-theme="dark"]',
        '[data-theme="dark"] > &:not([data-theme="light"])',
        '[data-theme="dark"] > :not([data-theme="light"]) &'
      ]);
      addVariant('light', [
        '&[data-theme="light"]',
        '[data-theme="light"] > &:not([data-theme="dark"])',
        '[data-theme="light"] > :not([data-theme="dark"]) &'
      ]);
    })
  ]
};

export default config;
