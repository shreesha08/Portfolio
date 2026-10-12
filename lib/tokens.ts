// The brand's design tokens — the single source of truth for colours,
// fonts and every other theme value. tailwind.config.ts reads this file;
// change a token here and every utility class follows.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: { theme?: any } = {
  theme: {
    extend: {
      colors: {
        page: '#FFFFFF',
        band: '#F2F2F2', // alternating grey section background
        ink: '#2B2B2B',
        muted: '#555555',
        faint: '#8A8A8A',
        border: '#D9D9D9',
        card: '#FFFFFF',
        pill: '#EDEDED',
      },
      fontFamily: {
        // CSS variables are set by next/font in app/layout.tsx.
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
};

export const theme = config.theme ?? {};
export const colors = theme.extend?.colors ?? theme.colors ?? {};
export const fontFamily = theme.extend?.fontFamily ?? theme.fontFamily ?? {};

export default config;
