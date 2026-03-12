/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#e6d3b7',
        ink: '#26163b',
        muted: '#6d5c76',
        line: '#cdbb9e',
        card: '#e6d3b7',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(24, 21, 18, 0.08)',
      },
      letterSpacing: {
        wideish: '0.08em',
      },
    },
  },
  plugins: [],
};
