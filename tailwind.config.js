/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue
        secondary: "#4b5563", // Gray
        accent: "#1e293b", // Dark slate
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}