const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/components/*.html.erb",
    "./app/components/**/*.html.erb",
    "./app/components/**/**/*.html.erb",
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*'
  ],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      horror: ['Creepster']
    },
    extend: {
      spacing: {
        '120': '30rem',
        '128': '32rem'
      },
      minHeight: {
        "80": "80vh"
      },
      colors: {
        cx: {
          "grain-yellow": "#f7c759",
          beaver: "#9f8170",
          crayola: "#ffb728",
          "lavender-blush": "#ffe8f2",
          pumpkin: "#ff683a",
          purple: "#7209b7"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}