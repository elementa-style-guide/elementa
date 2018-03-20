const webpackMerge = require(`webpack-merge`);
const { defaultsDeep } = require(`lodash`);

let userConfig;

try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  userConfig = require(`${process.env.ELEMENTA_PROJECT_CWD}/elementa.config.js`);
} catch (error) {
  if (error.code !== `MODULE_NOT_FOUND`) {
    throw error;
  }

  userConfig = {};
}

const elementaWebpackConfig = {
  output: {
    chunkFilename: `[name].[chunkhash].js`,
  },
};

const config = {
  configureWebpack: {},
  elementSuffix: `elm`,
  navigationSchema: {
    components: {
      title: `Components`,
    },
  },
  paths: {
    root: process.cwd(),
    src: `<rootDir>/src`,
  },
};

defaultsDeep(config, userConfig);
config.configureWebpack = webpackMerge(elementaWebpackConfig, userConfig.configureWebpack);

module.exports = config;
