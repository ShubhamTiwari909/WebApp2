/** @type {import('tailwindcss').Config} */
tailwind.config = {
  theme: {
    extend: {
      flex: {
        '2': '2.5 2 0%',
      },
      height: {
        'mid-screen-1': '68vh',
        'mid-screen-2': '100vh',
        'full-screen': '100%',
        '120': '30rem',
        '144': '36rem',
      },
      width: {
        '144': '37rem',
      },
      fontFamily: { 
        'dm-sans': ['DM Sans', 'sans-serif' ]
      },
      backgroundImage: {
        "dark-blue":"linear-gradient(252deg, #60d9f7 102%, #58baf6 59%, red 35%, #4d8cf4 8%)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
