const glob = require(`glob`);
const path = require(`path`);

module.exports = function elementPaths({ src, suffix = `ele` }) {
  return glob
    .sync(`**/*.${suffix}.vue`, { cwd: src })
    .map(x => path.resolve(src, x));
};
