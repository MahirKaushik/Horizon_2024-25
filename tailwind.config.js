/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //    'poppins': ['Poppins'],
      // },
   
      fontSize: {
        '9xl': '9rem',
        '12xl': '12rem',
      },
      fontFamily: {
        'tiffany': ['ITC Tiffany Std Demi', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        itc:['ITC','sans-serif']

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee' : 'marquee 10s linear infinite ',
      },
    
      colors: {
        customColor: '#F2C6AB',
        greenish: '#171817',
        customGreen: '#B5DDC2',
        beige: '#FEFBEC',
      },     
    },
  },
  plugins: [],
};
