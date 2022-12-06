const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [375, 768, 1024],
  },
};
