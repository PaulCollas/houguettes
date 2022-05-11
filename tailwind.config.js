module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html',
    './page-locations.html',
    './single-locations.html',],
  theme: {
    extend: {
      colors: {
        'blue': '#163E4B'
      },
      fontFamily: {
        'Acumin': ["Acumin Variable Concept"],
        'Tahu': ["Tahu"],
        'Roboto': ["'Space Mono', monospace"],
      }
    },
  },
  plugins: [],
}