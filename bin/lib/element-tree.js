const path = require(`path`);

const elementMetadata = require(`./element-metadata`);

module.exports = function elementTree({ elementPaths }) {
  return elementPaths.reduce((prev, elementPath, index) => {
    const { name } = path.parse(path.parse(elementPath).name);
    const { key, parent, title } = elementMetadata({ elementPath });

    // eslint-disable-next-line no-param-reassign
    prev[`${name}${index + 1}`] = {
      key,
      parent,
      path: elementPath,
      route: {
        name: `${parent.replace(/\./g, `-`)}-${key}`,
        path: `${parent.replace(/\./g, `/`)}/${key}`,
      },
      title,
    };

    return prev;
  }, {});
};
