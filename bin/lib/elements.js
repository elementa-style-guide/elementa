const glob = require(`glob`);
const path = require(`path`);

// TODO rename elementPaths
module.exports = function elements({ src, suffix = `elm` }) {
  return glob
    .sync(`**/*.${suffix}.vue`, { cwd: src })
    .map(x => path.resolve(src, x));
};
