/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1.5': '1.5s',
        '2':'2s'
      },
      colors: {
        primary: {
          light: 'rgb(220 38 38)',  // สีแดงที่เบากว่า
          DEFAULT: 'rgb(185 28 28)',  // สีแดง (red-700)
          dark: 'rgb(140 28 28)',  // สีแดงที่เข้มกว่า
        },
        secondary: {
          light: 'rgb(75 85 99)',  // สีเทาที่เบากว่า
          DEFAULT: 'rgb(17 24 39)',  // สีเทา (gray-900)
          dark: 'rgb(0 0 0)',  // สีเทาที่เข้มกว่า
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

