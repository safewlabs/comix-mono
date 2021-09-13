module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-flexbugs-fixes'),
      require('tailwindcss')('./app/packs/src/tailwind.config.js'),
      require('autoprefixer'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      })
    ]
  }

