/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-2px 2px 0px rgba(0, 0, 0, 1)',
    },
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
},
  plugins: [],
};
