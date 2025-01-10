/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#1E3A8A',      // Primary color ROYALBLUE
        'vibrant-green': '#43A047',  // Accent color
        'cool-gray': '#ECEFF1',      // Neutral color
        'dark-blue': '#1E2A3A',      // Darker tone for trust
        'charcoal-gray': '#2C3E50',  // Darker tone for stability
      },
    },
  },
  plugins: [],
}
