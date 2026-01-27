/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA1B4", // Pink - Buttons/Highlights
        secondary: "#1E262E", // Dark Blue - Footer/Headings
        accent: "#FFF7EF", // Peach - Backgrounds
        text: "#54595F", // Gray - Body text
        "text-light": "#FFFFFF",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}
