import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      supports: {
        'dvw': 'width: 100dvw',
        'dvh': 'height: 100dvh',
      },
      width: {
        'dscreen': '100dvw',
      },
      minWidth: {
        'dscreen': '100dvw',
      },
      maxWidth: {
        'dscreen': '100dvw',
      },
      height: {
        'dscreen': '100dvh'
      },
      minHeight: {
        'dscreen': '100dvh'
      },
      maxHeight: {
        'dscreen': '100dvh'
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
