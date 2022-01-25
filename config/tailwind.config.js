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
    extend: {
      fontFamily: {
        body: ['Space Mono', 'monospace'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cx: {
          "grain-yellow": "#f7c759",
          beaver: "#000000",
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
