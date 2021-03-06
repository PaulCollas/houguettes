module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html',
    './page-locations.html',
    './single-locations.html',
    './page-sejour.html',
    './page-contact.html',
    './page-connexion.html',
    './page-compte.html',
    './single-activites.html',
    './page-apropos.html',],
  theme: {
    extend: {
      colors: {
        'blue': '#163E4B'
      },
      fontFamily: {
        'Acumin': ["Acumin Variable Concept"],
        'Tahu': ["rooney-web, serif"],
        'Roboto': ["'Space Mono', monospace"],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}


