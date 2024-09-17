// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'background': {
          DEFAULT: '#2f2f2f', // Shade 500 as default
          100: '#1a1a1a',
          200: '#1f1f1f',
          300: '#242424',
          400: '#2a2a2a',
          500: '#2f2f2f',
          600: '#343434',
          700: '#3a3a3a',
          800: '#404040',
          900: '#464646',
        },
        'primary': {
          DEFAULT: '#1a1a1a', // Shade 500 as default
          100: '#2e2e2e',
          200: '#292929',
          300: '#242424',
          400: '#1f1f1f',
          500: '#1a1a1a',
          600: '#141414',
          700: '#0e0e0e',
          800: '#090909',
          900: '#050505',
        },
        'secondary': {
          DEFAULT: '#272727', // Shade 500 as default
          100: '#3b3b3b',
          200: '#363636',
          300: '#313131',
          400: '#2c2c2c',
          500: '#272727',
          600: '#222222',
          700: '#1d1d1d',
          800: '#181818',
          900: '#131313',
        },
        'accent': {
          DEFAULT: '#e94560', // Shade 500 as default
          100: '#ffccd1',
          200: '#ff99a3',
          300: '#ff6675',
          400: '#ff3347',
          500: '#e94560',
          600: '#b1304a',
          700: '#872538',
          800: '#5e1926',
          900: '#350f14',
        },
        'text-primary': '#ffffff', 
        'text-secondary': '#b0b0b0', 
      },
    },
  },
  plugins: [],
}
