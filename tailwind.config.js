/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8102E',
        dark: '#141311',
        lightDark: '#454545',
        lightGray: '#EDEEF2',
        gray: '#D9D9D9',
        cardBg: '#F8F8F8',
        black: '#000000',
        white: '#FFFFFF',
        link: '#007BFF',
        boderColor: '#E4E4E4',
        redColor: '#FF2020',
      },
    }
  },
  plugins: [

  ],
}