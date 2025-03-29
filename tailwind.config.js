/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008bd5", // Blue
        secondary: "#4b5563", // Gray
        accent: "#1e293b", // Dark slate
      },
      container: {
        center: true,
        padding: "1rem",
      },
      scrollSnapType: {
        'x-mandatory': 'x mandatory',
      },
    },
  },
  plugins: [
    // Add a plugin to hide scrollbar
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    }
  ],
}