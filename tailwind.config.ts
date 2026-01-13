/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
