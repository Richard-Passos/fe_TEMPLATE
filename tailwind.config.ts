/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/theme.{js,ts}',
    './src/rich.{jsx,tsx}'
  ],
  corePlugins: {
    preflight: false
  },
  darkMode: ['selector', '[data-mantine-color-scheme="dark"]'],
  theme: {
    colors: {
      current: 'currentColor',
      bright: 'var(--color-bright)',
      text: 'var(--color-text)',
      body: 'var(--color-body)',
      error: 'var(--color-error)',
      placeholder: 'var(--color-placeholder)',
      anchor: 'var(--color-anchor)',
      dimmed: 'var(--color-dimmed)',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      default: {
        DEFAULT: 'var(--color-default)',
        hover: 'var(--color-default-hover)',
        color: 'var(--color-default-color)',
        border: 'var(--color-default-border)'
      },
      primary: {
        contrast: 'var(--color-primary-contrast)',
        filled: {
          DEFAULT: 'var(--color-primary-filled)',
          hover: 'var(--color-primary-filled-hover)'
        },
        light: {
          DEFAULT: 'var(--color-primary-light)',
          hover: 'var(--color-primary-light-hover)',
          color: 'var(--color-primary-color)'
        },
        0: 'var(--color-primary-0)',
        1: 'var(--color-primary-1)',
        2: 'var(--color-primary-2)',
        3: 'var(--color-primary-3)',
        4: 'var(--color-primary-4)',
        5: 'var(--color-primary-5)',
        6: 'var(--color-primary-6)',
        7: 'var(--color-primary-7)',
        8: 'var(--color-primary-8)',
        9: 'var(--color-primary-9)'
      },
      dark: {
        text: 'var(--color-dark-text)',
        filled: {
          DEFAULT: 'var(--color-dark-filled)',
          hover: 'var(--color-dark-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-dark-outline)',
          hover: 'var(--color-dark-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-dark-light)',
          hover: 'var(--color-dark-light-hover)',
          color: 'var(--color-dark-color)'
        },
        0: 'var(--color-dark-0)',
        1: 'var(--color-dark-1)',
        2: 'var(--color-dark-2)',
        3: 'var(--color-dark-3)',
        4: 'var(--color-dark-4)',
        5: 'var(--color-dark-5)',
        6: 'var(--color-dark-6)',
        7: 'var(--color-dark-7)',
        8: 'var(--color-dark-8)',
        9: 'var(--color-dark-9)'
      },
      gray: {
        text: 'var(--color-gray-text)',
        filled: {
          DEFAULT: 'var(--color-gray-filled)',
          hover: 'var(--color-gray-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-gray-outline)',
          hover: 'var(--color-gray-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-gray-light)',
          hover: 'var(--color-gray-light-hover)',
          color: 'var(--color-gray-color)'
        },
        0: 'var(--color-gray-0)',
        1: 'var(--color-gray-1)',
        2: 'var(--color-gray-2)',
        3: 'var(--color-gray-3)',
        4: 'var(--color-gray-4)',
        5: 'var(--color-gray-5)',
        6: 'var(--color-gray-6)',
        7: 'var(--color-gray-7)',
        8: 'var(--color-gray-8)',
        9: 'var(--color-gray-9)'
      },
      red: {
        text: 'var(--color-red-text)',
        filled: {
          DEFAULT: 'var(--color-red-filled)',
          hover: 'var(--color-red-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-red-outline)',
          hover: 'var(--color-red-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-red-light)',
          hover: 'var(--color-red-light-hover)',
          color: 'var(--color-red-color)'
        },
        0: 'var(--color-red-0)',
        1: 'var(--color-red-1)',
        2: 'var(--color-red-2)',
        3: 'var(--color-red-3)',
        4: 'var(--color-red-4)',
        5: 'var(--color-red-5)',
        6: 'var(--color-red-6)',
        7: 'var(--color-red-7)',
        8: 'var(--color-red-8)',
        9: 'var(--color-red-9)'
      },
      pink: {
        text: 'var(--color-pink-text)',
        filled: {
          DEFAULT: 'var(--color-pink-filled)',
          hover: 'var(--color-pink-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-pink-outline)',
          hover: 'var(--color-pink-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-pink-light)',
          hover: 'var(--color-pink-light-hover)',
          color: 'var(--color-pink-color)'
        },
        0: 'var(--color-pink-0)',
        1: 'var(--color-pink-1)',
        2: 'var(--color-pink-2)',
        3: 'var(--color-pink-3)',
        4: 'var(--color-pink-4)',
        5: 'var(--color-pink-5)',
        6: 'var(--color-pink-6)',
        7: 'var(--color-pink-7)',
        8: 'var(--color-pink-8)',
        9: 'var(--color-pink-9)'
      },
      grape: {
        text: 'var(--color-grape-text)',
        filled: {
          DEFAULT: 'var(--color-grape-filled)',
          hover: 'var(--color-grape-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-grape-outline)',
          hover: 'var(--color-grape-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-grape-light)',
          hover: 'var(--color-grape-light-hover)',
          color: 'var(--color-grape-color)'
        },
        0: 'var(--color-grape-0)',
        1: 'var(--color-grape-1)',
        2: 'var(--color-grape-2)',
        3: 'var(--color-grape-3)',
        4: 'var(--color-grape-4)',
        5: 'var(--color-grape-5)',
        6: 'var(--color-grape-6)',
        7: 'var(--color-grape-7)',
        8: 'var(--color-grape-8)',
        9: 'var(--color-grape-9)'
      },
      violet: {
        text: 'var(--color-violet-text)',
        filled: {
          DEFAULT: 'var(--color-violet-filled)',
          hover: 'var(--color-violet-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-violet-outline)',
          hover: 'var(--color-violet-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-violet-light)',
          hover: 'var(--color-violet-light-hover)',
          color: 'var(--color-violet-color)'
        },
        0: 'var(--color-violet-0)',
        1: 'var(--color-violet-1)',
        2: 'var(--color-violet-2)',
        3: 'var(--color-violet-3)',
        4: 'var(--color-violet-4)',
        5: 'var(--color-violet-5)',
        6: 'var(--color-violet-6)',
        7: 'var(--color-violet-7)',
        8: 'var(--color-violet-8)',
        9: 'var(--color-violet-9)'
      },
      indigo: {
        text: 'var(--color-indigo-text)',
        filled: {
          DEFAULT: 'var(--color-indigo-filled)',
          hover: 'var(--color-indigo-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-indigo-outline)',
          hover: 'var(--color-indigo-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-indigo-light)',
          hover: 'var(--color-indigo-light-hover)',
          color: 'var(--color-indigo-color)'
        },
        0: 'var(--color-indigo-0)',
        1: 'var(--color-indigo-1)',
        2: 'var(--color-indigo-2)',
        3: 'var(--color-indigo-3)',
        4: 'var(--color-indigo-4)',
        5: 'var(--color-indigo-5)',
        6: 'var(--color-indigo-6)',
        7: 'var(--color-indigo-7)',
        8: 'var(--color-indigo-8)',
        9: 'var(--color-indigo-9)'
      },
      blue: {
        text: 'var(--color-blue-text)',
        filled: {
          DEFAULT: 'var(--color-blue-filled)',
          hover: 'var(--color-blue-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-blue-outline)',
          hover: 'var(--color-blue-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-blue-light)',
          hover: 'var(--color-blue-light-hover)',
          color: 'var(--color-blue-color)'
        },
        0: 'var(--color-blue-0)',
        1: 'var(--color-blue-1)',
        2: 'var(--color-blue-2)',
        3: 'var(--color-blue-3)',
        4: 'var(--color-blue-4)',
        5: 'var(--color-blue-5)',
        6: 'var(--color-blue-6)',
        7: 'var(--color-blue-7)',
        8: 'var(--color-blue-8)',
        9: 'var(--color-blue-9)'
      },
      cyan: {
        text: 'var(--color-cyan-text)',
        filled: {
          DEFAULT: 'var(--color-cyan-filled)',
          hover: 'var(--color-cyan-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-cyan-outline)',
          hover: 'var(--color-cyan-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-cyan-light)',
          hover: 'var(--color-cyan-light-hover)',
          color: 'var(--color-cyan-color)'
        },
        0: 'var(--color-cyan-0)',
        1: 'var(--color-cyan-1)',
        2: 'var(--color-cyan-2)',
        3: 'var(--color-cyan-3)',
        4: 'var(--color-cyan-4)',
        5: 'var(--color-cyan-5)',
        6: 'var(--color-cyan-6)',
        7: 'var(--color-cyan-7)',
        8: 'var(--color-cyan-8)',
        9: 'var(--color-cyan-9)'
      },
      teal: {
        text: 'var(--color-teal-text)',
        filled: {
          DEFAULT: 'var(--color-teal-filled)',
          hover: 'var(--color-teal-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-teal-outline)',
          hover: 'var(--color-teal-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-teal-light)',
          hover: 'var(--color-teal-light-hover)',
          color: 'var(--color-teal-color)'
        },
        0: 'var(--color-teal-0)',
        1: 'var(--color-teal-1)',
        2: 'var(--color-teal-2)',
        3: 'var(--color-teal-3)',
        4: 'var(--color-teal-4)',
        5: 'var(--color-teal-5)',
        6: 'var(--color-teal-6)',
        7: 'var(--color-teal-7)',
        8: 'var(--color-teal-8)',
        9: 'var(--color-teal-9)'
      },
      green: {
        text: 'var(--color-green-text)',
        filled: {
          DEFAULT: 'var(--color-green-filled)',
          hover: 'var(--color-green-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-green-outline)',
          hover: 'var(--color-green-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-green-light)',
          hover: 'var(--color-green-light-hover)',
          color: 'var(--color-green-color)'
        },
        0: 'var(--color-green-0)',
        1: 'var(--color-green-1)',
        2: 'var(--color-green-2)',
        3: 'var(--color-green-3)',
        4: 'var(--color-green-4)',
        5: 'var(--color-green-5)',
        6: 'var(--color-green-6)',
        7: 'var(--color-green-7)',
        8: 'var(--color-green-8)',
        9: 'var(--color-green-9)'
      },
      lime: {
        text: 'var(--color-lime-text)',
        filled: {
          DEFAULT: 'var(--color-lime-filled)',
          hover: 'var(--color-lime-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-lime-outline)',
          hover: 'var(--color-lime-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-lime-light)',
          hover: 'var(--color-lime-light-hover)',
          color: 'var(--color-lime-color)'
        },
        0: 'var(--color-lime-0)',
        1: 'var(--color-lime-1)',
        2: 'var(--color-lime-2)',
        3: 'var(--color-lime-3)',
        4: 'var(--color-lime-4)',
        5: 'var(--color-lime-5)',
        6: 'var(--color-lime-6)',
        7: 'var(--color-lime-7)',
        8: 'var(--color-lime-8)',
        9: 'var(--color-lime-9)'
      },
      yellow: {
        text: 'var(--color-yellow-text)',
        filled: {
          DEFAULT: 'var(--color-yellow-filled)',
          hover: 'var(--color-yellow-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-yellow-outline)',
          hover: 'var(--color-yellow-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-yellow-light)',
          hover: 'var(--color-yellow-light-hover)',
          color: 'var(--color-yellow-color)'
        },
        0: 'var(--color-yellow-0)',
        1: 'var(--color-yellow-1)',
        2: 'var(--color-yellow-2)',
        3: 'var(--color-yellow-3)',
        4: 'var(--color-yellow-4)',
        5: 'var(--color-yellow-5)',
        6: 'var(--color-yellow-6)',
        7: 'var(--color-yellow-7)',
        8: 'var(--color-yellow-8)',
        9: 'var(--color-yellow-9)'
      },
      orange: {
        text: 'var(--color-orange-text)',
        filled: {
          DEFAULT: 'var(--color-orange-filled)',
          hover: 'var(--color-orange-filled-hover)'
        },
        outline: {
          DEFAULT: 'var(--color-orange-outline)',
          hover: 'var(--color-orange-outline-hover)'
        },
        light: {
          DEFAULT: 'var(--color-orange-light)',
          hover: 'var(--color-orange-light-hover)',
          color: 'var(--color-orange-color)'
        },
        0: 'var(--color-orange-0)',
        1: 'var(--color-orange-1)',
        2: 'var(--color-orange-2)',
        3: 'var(--color-orange-3)',
        4: 'var(--color-orange-4)',
        5: 'var(--color-orange-5)',
        6: 'var(--color-orange-6)',
        7: 'var(--color-orange-7)',
        8: 'var(--color-orange-8)',
        9: 'var(--color-orange-9)'
      }
    },
    extend: {
      spacing: {
        px: '0.8px',
        '9/10': '90%',
        '2xs': 'var(--spacing-2xs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)'
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)'
      },
      lineHeight: {
        xs: 'var(--line-height-xs)',
        sm: 'var(--line-height-sm)',
        md: 'var(--line-height-md)',
        lg: 'var(--line-height-lg)',
        xl: 'var(--line-height-xl)'
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)'
      },
      dropShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)'
      },
      outlineWidth: {
        DEFAULT: 'var(--outline-width)'
      },
      outlineColor: {
        DEFAULT: 'var(--outline-color)'
      },
      outlineOffset: {
        DEFAULT: 'var(--outline-offset)'
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        inherit: 'inherit'
      },
      zIndex: {
        app: 'var(--z-index-app)',
        modal: 'var(--z-index-modal)',
        popover: 'var(--z-index-popover)',
        overlay: 'var(--z-index-overlay)',
        max: 'var(--z-index-max)'
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
        title: 'var(--font-family-headings)',
        display: 'var(--font-family-display)',
        monospace: 'var(--font-family-monospace)'
      }
    }
  }
};
