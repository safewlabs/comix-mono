module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-flexbugs-fixes'),
      require('tailwindcss')('./app/javascript/src/tailwind.js'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      })
    ]
  }

