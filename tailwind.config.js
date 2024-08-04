/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '9xl': '9rem',
        '12xl': '12rem',
      },
      fontFamily: {
        'tiffany': ['ITC Tiffany Std Demi', 'sans-serif'],
<<<<<<< HEAD
        'poppins': ['Poppins', 'sans-serif'],

=======
>>>>>>> 46ff1c46f3ee2ea3e4a3cd9622c61ff0a0563fde
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
<<<<<<< HEAD
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
=======
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 7s linear infinite ',
      },
      colors: {
        customColor: '#F2C6AB',
      },
      width: {
        'custom-width': '1561.55px',
      },
      height: {
        'custom-height': '269.12px',
      },
      inset: {
        'custom-top': '4402.91px',
        'custom-left': '-61px',
      },
      gap: {
        'custom-gap': '0px',
      },
      borderWidth: {
        'custom-border': '2px 0px 0px 0px',
      },
>>>>>>> 46ff1c46f3ee2ea3e4a3cd9622c61ff0a0563fde
    },
  },
  plugins: [],
};
