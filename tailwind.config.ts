import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './admin/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          surface: 'var(--surface)',
          text: 'var(--text)'
        }
      }
    }
  },
  plugins: []
};

export default config;
