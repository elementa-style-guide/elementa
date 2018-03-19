const fs = require(`fs`);

module.exports = function elementMetadata({ elementPath }) {
  const [parent, key, title] = fs.readFileSync(elementPath, { encoding: `utf8` })
    .match(/\/\* elementa-navigation: \[(.*?)] \*\//)[1].split(`|`);

  return { key, parent, title };
};
