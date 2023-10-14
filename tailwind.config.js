/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    colors:{
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#6BBB9C', 
      secondary: '#94C8D7',
      text: '#333333', 
      background: '#F0F0F0',    
      accent: '#A4D4B1',       
      accent2: '#B59E85',
      accent3: '#F6E4A2',
    },
    extend: {},
  },
  plugins: [],
}

