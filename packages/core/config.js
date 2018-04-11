const { assign } = require(`lodash`);
const path = require(`path`);
const webpack = require(`webpack`);
const webpackMerge = require(`webpack-merge`);

let userConfig;

const THEME_PLACEHOLDER = `ELEMENTA_THEME`;
const THEME_DEFAULT_PATH = `./components/ElementaTheme.vue`;

try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  userConfig = require(`${process.env.ELEMENTA_PROJECT_CWD}/elementa.config.js`);
} catch (error) {
  if (error.code !== `MODULE_NOT_FOUND`) {
    throw error;
  }

  userConfig = {};
}

const theme = userConfig.theme
  ? path.resolve(process.env.ELEMENTA_PROJECT_CWD, userConfig.theme)
  : THEME_DEFAULT_PATH;

const elementaWebpackConfig = {
  output: {
    chunkFilename: `[name].[chunkhash].js`,
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(new RegExp(THEME_PLACEHOLDER), (resource) => {
      // eslint-disable-next-line no-param-reassign
      resource.request = resource.request.replace(new RegExp(THEME_PLACEHOLDER), theme);
    }),
  ],
};
const elementaControlsConfig = {
  input: path.join(__dirname, `src/components/ElementaControlInput.vue`),
  select: path.join(__dirname, `src/components/ElementaControlSelect.vue`),
};

const config = assign({}, {
  configureWebpack: {},
  controls: {},
  elementSuffix: `ele`,
  navigationSchema: [
    {
      slug: `components`,
      title: `Components`,
    },
  ],
  paths: {
    root: process.cwd(),
    src: `<rootDir>/src`,
  },
}, userConfig);

config.configureWebpack = webpackMerge(elementaWebpackConfig, userConfig.configureWebpack);
config.controls = assign({}, elementaControlsConfig, userConfig.controls);

module.exports = config;
