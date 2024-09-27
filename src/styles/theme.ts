import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

import { fonts } from '@/constants';

const themeOverride = createTheme({
  scale: 1,
  fontSmoothing: true,
  focusRing: 'auto',
  white: 'hsl(0 0% 98%)',
  black: 'hsl(0 0% 4%)',
  colors: {
    primary: [
      'hsl(200, 100%, 94%)',
      'hsl(200, 100%, 86%)',
      'hsl(200, 100%, 70%)',
      'hsl(200, 100%, 50%)',
      'hsl(210, 100%, 45%)',
      'hsl(210, 100%, 40%)',
      'hsl(210, 100%, 35%)',
      'hsl(210, 100%, 25%)',
      'hsl(210, 100%, 20%)',
      'hsl(210, 100%, 17%)'
    ],
    dark: [
      'hsl(0, 0%, 80%)',
      'hsl(0, 0%, 75%)',
      'hsl(0, 0%, 60%)',
      'hsl(0, 0%, 40%)',
      'hsl(0, 0%, 15%)',
      'hsl(0, 0%, 10%)',
      'hsl(0, 0%, 9%)',
      'hsl(0, 0%, 8%)',
      'hsl(0, 0%, 7%)',
      'hsl(0, 0%, 6%)'
    ],
    gray: [
      'hsl(0, 0%, 95%)',
      'hsl(0, 0%, 90%)',
      'hsl(0, 0%, 85%)',
      'hsl(0, 0%, 80%)',
      'hsl(0, 0%, 75%)',
      'hsl(0, 0%, 70%)',
      'hsl(0, 0%, 55%)',
      'hsl(0, 0%, 30%)',
      'hsl(0, 0%, 20%)',
      'hsl(0, 0%, 15%)'
    ],
    red: [
      'hsl(0, 100%, 98%)',
      'hsl(0, 100%, 90%)',
      'hsl(0, 100%, 80%)',
      'hsl(0, 100%, 70%)',
      'hsl(0, 100%, 60%)',
      'hsl(0, 100%, 55%)',
      'hsl(0, 100%, 50%)',
      'hsl(0, 100%, 45%)',
      'hsl(0, 100%, 40%)',
      'hsl(0, 100%, 35%)'
    ],
    pink: [
      'hsl(330, 100%, 98%)',
      'hsl(330, 100%, 90%)',
      'hsl(330, 100%, 80%)',
      'hsl(330, 100%, 70%)',
      'hsl(330, 100%, 60%)',
      'hsl(330, 100%, 55%)',
      'hsl(330, 100%, 50%)',
      'hsl(330, 100%, 45%)',
      'hsl(330, 100%, 40%)',
      'hsl(330, 100%, 35%)'
    ],
    grape: [
      'hsl(280, 100%, 98%)',
      'hsl(280, 100%, 90%)',
      'hsl(280, 100%, 80%)',
      'hsl(280, 100%, 70%)',
      'hsl(280, 100%, 60%)',
      'hsl(280, 100%, 55%)',
      'hsl(280, 100%, 50%)',
      'hsl(280, 100%, 45%)',
      'hsl(280, 100%, 40%)',
      'hsl(280, 100%, 35%)'
    ],
    violet: [
      'hsl(240, 100%, 98%)',
      'hsl(240, 100%, 90%)',
      'hsl(240, 100%, 80%)',
      'hsl(240, 100%, 70%)',
      'hsl(240, 100%, 60%)',
      'hsl(240, 100%, 55%)',
      'hsl(240, 100%, 50%)',
      'hsl(240, 100%, 45%)',
      'hsl(240, 100%, 40%)',
      'hsl(240, 100%, 35%)'
    ],
    indigo: [
      'hsl(210, 100%, 98%)',
      'hsl(210, 100%, 90%)',
      'hsl(210, 100%, 80%)',
      'hsl(210, 100%, 70%)',
      'hsl(210, 100%, 60%)',
      'hsl(210, 100%, 55%)',
      'hsl(210, 100%, 50%)',
      'hsl(210, 100%, 45%)',
      'hsl(210, 100%, 40%)',
      'hsl(210, 100%, 35%)'
    ],
    blue: [
      'hsl(200, 100%, 94%)',
      'hsl(200, 100%, 86%)',
      'hsl(200, 100%, 70%)',
      'hsl(200, 100%, 50%)',
      'hsl(210, 100%, 45%)',
      'hsl(210, 100%, 40%)',
      'hsl(210, 100%, 35%)',
      'hsl(210, 100%, 25%)',
      'hsl(210, 100%, 20%)',
      'hsl(210, 100%, 17%)'
    ],
    cyan: [
      'hsl(180, 100%, 98%)',
      'hsl(180, 100%, 90%)',
      'hsl(180, 100%, 80%)',
      'hsl(180, 100%, 70%)',
      'hsl(180, 100%, 60%)',
      'hsl(180, 100%, 55%)',
      'hsl(180, 100%, 50%)',
      'hsl(180, 100%, 45%)',
      'hsl(180, 100%, 40%)',
      'hsl(180, 100%, 35%)'
    ],
    teal: [
      'hsl(160, 100%, 98%)',
      'hsl(160, 100%, 90%)',
      'hsl(160, 100%, 80%)',
      'hsl(160, 100%, 70%)',
      'hsl(160, 100%, 60%)',
      'hsl(160, 100%, 55%)',
      'hsl(160, 100%, 50%)',
      'hsl(160, 100%, 45%)',
      'hsl(160, 100%, 40%)',
      'hsl(160, 100%, 35%)'
    ],
    green: [
      'hsl(120, 100%, 98%)',
      'hsl(120, 100%, 90%)',
      'hsl(120, 100%, 80%)',
      'hsl(120, 100%, 70%)',
      'hsl(120, 100%, 60%)',
      'hsl(120, 100%, 55%)',
      'hsl(120, 100%, 50%)',
      'hsl(120, 100%, 45%)',
      'hsl(120, 100%, 40%)',
      'hsl(120, 100%, 35%)'
    ],
    lime: [
      'hsl(75, 100%, 98%)',
      'hsl(75, 100%, 90%)',
      'hsl(75, 100%, 80%)',
      'hsl(75, 100%, 70%)',
      'hsl(75, 100%, 60%)',
      'hsl(75, 100%, 55%)',
      'hsl(75, 100%, 50%)',
      'hsl(75, 100%, 45%)',
      'hsl(75, 100%, 40%)',
      'hsl(75, 100%, 35%)'
    ],
    yellow: [
      'hsl(50, 100%, 98%)',
      'hsl(50, 100%, 90%)',
      'hsl(50, 100%, 80%)',
      'hsl(50, 100%, 70%)',
      'hsl(50, 100%, 60%)',
      'hsl(50, 100%, 55%)',
      'hsl(50, 100%, 50%)',
      'hsl(50, 100%, 45%)',
      'hsl(50, 100%, 40%)',
      'hsl(50, 100%, 35%)'
    ],
    orange: [
      'hsl(30, 100%, 98%)',
      'hsl(30, 100%, 90%)',
      'hsl(30, 100%, 80%)',
      'hsl(30, 100%, 70%)',
      'hsl(30, 100%, 60%)',
      'hsl(30, 100%, 55%)',
      'hsl(30, 100%, 50%)',
      'hsl(30, 100%, 45%)',
      'hsl(30, 100%, 40%)',
      'hsl(30, 100%, 35%)'
    ]
  },
  primaryShade: {
    light: 5,
    dark: 5
  },
  primaryColor: 'primary',
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: fonts.display.style.fontFamily,
  fontFamilyMonospace: fonts.monospace.style.fontFamily,
  respectReducedMotion: true,
  cursorType: 'pointer',
  defaultGradient: {
    from: 'blue',
    to: 'cyan',
    deg: 45
  },
  defaultRadius: 'sm',
  activeClassName: 'active:scale-[.98]',
  focusClassName: 'focus-visible:outline',
  headings: {
    fontFamily: fonts.title.style.fontFamily,
    fontWeight: '700',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: 'calc(2.125rem * var(--mantine-scale))',
        lineHeight: '1.3'
      },
      h2: {
        fontSize: 'calc(1.625rem * var(--mantine-scale))',
        lineHeight: '1.35'
      },
      h3: {
        fontSize: 'calc(1.375rem * var(--mantine-scale))',
        lineHeight: '1.4'
      },
      h4: {
        fontSize: 'calc(1.125rem * var(--mantine-scale))',
        lineHeight: '1.45'
      },
      h5: {
        fontSize: 'calc(1rem * var(--mantine-scale))',
        lineHeight: '1.5'
      },
      h6: {
        fontSize: 'calc(0.875rem * var(--mantine-scale))',
        lineHeight: '1.5'
      }
    }
  },
  fontSizes: {
    xs: 'calc(0.75rem * var(--mantine-scale))',
    sm: 'calc(0.875rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.125rem * var(--mantine-scale))',
    xl: 'calc(1.25rem * var(--mantine-scale))'
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65'
  },
  radius: {
    xs: 'calc(0.125rem * var(--mantine-scale))',
    sm: 'calc(0.25rem * var(--mantine-scale))',
    md: 'calc(0.5rem * var(--mantine-scale))',
    lg: 'calc(1rem * var(--mantine-scale))',
    xl: 'calc(1.5rem * var(--mantine-scale))'
  },
  spacing: {
    xs: 'calc(0.625rem * var(--mantine-scale))',
    sm: 'calc(0.75rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.25rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
    '2xl': 'calc(4rem * var(--mantine-scale))'
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em'
  },
  shadows: {
    xs: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)',
    sm: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    md: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    lg: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
    xl: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))'
  },
  other: {},
  components: {}
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const defaultColorScheme = 'auto';

export default theme;
export { defaultColorScheme };
