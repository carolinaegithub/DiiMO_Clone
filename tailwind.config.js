/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['Avenir']
      },
      colors: {
        primary: {
          200: '#99C998',
          300: '#5DAD5C',
          400: '#75B574',
          500: '#58A255',
          600: '#41823F', 
          700: '#468244',
          800: '#346133',
          900: '#224021',
        },
        secondary: {
          500: '#ffd966'
        }
      },
      screens: 
      {
        'rsm': '570px',
        'alv': '1024px',
        'smc': '1240px',
        'al': '1382px',
        'em': '1370px',
        'sc': '1480px'
      }
    },
  },
  plugins: []
}