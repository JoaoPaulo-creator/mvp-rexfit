/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      '16': 'repeat(16, minman(0, 1fr))',
      'footer': '200px minmax(900px, 1fr) 100px'
    },
  },
  plugins: [],
}