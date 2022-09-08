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
      body: ['Poppins', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#7209b7",
        },
      },
    ],
  },
}