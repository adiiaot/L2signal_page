/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'rgb(var(--surface-rgb) / <alpha-value>)',
          raised: 'rgb(var(--surface-raised-rgb) / <alpha-value>)',
          overlay: 'rgb(var(--surface-overlay-rgb) / <alpha-value>)',
          border: 'var(--border)',
        },
        accent: {
          gold: 'rgb(var(--accent-gold-rgb) / <alpha-value>)',
          'gold-hover': 'rgb(var(--accent-gold-hover-rgb) / <alpha-value>)',
          green: 'rgb(var(--accent-green-rgb) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
          muted: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
        },
        status: {
          win: 'rgb(var(--status-win-rgb) / <alpha-value>)',
          loss: 'rgb(var(--status-loss-rgb) / <alpha-value>)',
          warn: 'rgb(var(--status-warn-rgb) / <alpha-value>)',
          info: 'rgb(var(--status-info-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        card: '14px',
        btn: '10px',
        input: '8px',
        pill: '9999px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'card-glow': 'var(--shadow-card-glow)',
      },
    },
  },
  plugins: [],
}
