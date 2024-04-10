/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'primary': '#3652AD',
        'secondary': '#6CFBCE',
        'secondary-light': '#E6F4E2',
        'third': '#20C198',
        'secondary-dark': '#68B5B0',
        'dark-green': '#4A99A4',
        'section': '#DDECF0',
        'section-alpha': '#F2F2F2',
        'button': '#82D7D2',
        'footer': '#296763',
        'gray': '#F0F1F8',
        'error': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}