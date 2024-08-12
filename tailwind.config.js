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
        "custom":"#FEFBEC",
        "technica":"#B5DDC2",
        "about":"#1E1E1E",
        "button":"#F2C6AB",
        "button-click":"#F0B590",
        customColor: '#F2C6AB',
        greenish: '#171817',
        customGreen: '#B5DDC2',
        beige: '#FEFBEC',
      },     
      screens:{
        "custom":"768px"
      },
      width:{
        'clamp-24vw-24vw-30vw':'clamp(24vw,24vw,30vw)',
        'clamp-85vw-85vw-85vw':'clamp(85vw,85vw,85vw)'
      },
      height:{
        'clamp-24vw-25vw-40vw':'clamp(24vw,25vw,40vw)',
        'clamp-40vw-55vw-60vw':'clamp(40vw,55vw,60vw)'
      },
      borderRadius:{
        'tiny':'1rem'
      }
    },
  },
  plugins: [],
};
