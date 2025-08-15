/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores do Figma
        'figma': {
          primary: '#7828c8',
          'primary-dark': '#6a1fa0',
          'primary-darker': '#5d1a8a',
          'secondary-foreground': '#ffffff',
          black: '#000000',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'tiny': ['12px', '16px'], // Exato do Figma
      },
      spacing: {
        '52': '13rem', // Para posicionamento exato do Figma
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'figma': '0 4px 12px rgba(120, 40, 200, 0.15)',
        'figma-hover': '0 2px 6px rgba(120, 40, 200, 0.1)',
      }
    },
  },
  plugins: [],
}
