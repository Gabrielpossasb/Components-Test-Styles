/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowModal: '5px 5px 6px #b87171',
        outFull: '2px 2px 6px 2px #b87171',
        outFullLight: '2px 2px 6px 6px #d87575',
        soft: '2px 2px 4px 2px #b87171',
      },
      animation: {
        openModal: 'openModal 2.5s ease forwards',
      },
      keyframes: {
        openModal: {
          '0%': { height: '8px', width: '8px'},
          '15%': { height: '8px', width: '192px'},
          '30%': { height: '160px', width: '192px'},
          '95%': { height: '160px', width: '192px', opacity: 100},
          '100%': { height: '160px', width: '192px', opacity: 0}
        },
      }

    },
  },
  plugins: [],
}
