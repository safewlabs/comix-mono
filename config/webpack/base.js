const { webpackConfig, merge } = require("@rails/webpacker");
const customConfig = {
  resolve: {
    extensions: [
      ".css",
      ".scss",
      ".sass",
      ".module.sass",
      ".module.scss",
      ".module.css",
      ".png",
      ".svg",
      ".jpg",
      ".jpeg",
      ".gif",
    ],
  },
};

module.exports = merge(webpackConfig, customConfig);
