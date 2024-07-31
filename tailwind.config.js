/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        itc:['ITC','sans-serif']
      },
      colors:{
        "custom":"#FEFBEC",
        "technica":"#B5DDC2",
        "about":"#1E1E1E",
        "button":"#F2C6AB"
      },
      screens:{
        "custom":"640px"
      },
      width:{
        'clamp-24vw-24vw-30vw': 'clamp(24vw, 24vw, 30vw)'
      },
      height:{
        'clamp-24vw-25vw-40vw': 'clamp(24vw, 25vw, 40vw)'
      },
    },
  },
  plugins: [],
};
