const fs = require(`fs`);
const yamlJs = require(`yamljs`);

module.exports = function elementMetadata({ elementPath }) {
  const yaml = fs.readFileSync(elementPath, { encoding: `utf8` })
    .match(/\/\* elementa-metadata(.*?)\*\//s)[1];

  const { parent, slug: key, title } = yamlJs.parse(yaml);

  return { key, parent, title };
};
