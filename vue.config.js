// eslint-disable-next-line import/no-dynamic-require
const config = require(`${process.env.ELEMENTA_PROJECT_CWD}/elementa.config.js`);

// TODO use lodash
const configureWebpack = Object.assign(
  {},
  {
    output: {
      chunkFilename: `[name].[chunkhash].js`,
    },
  },
  config.configureWebpack || {},
);

module.exports = {
  configureWebpack,
  lintOnSave: false,
};
