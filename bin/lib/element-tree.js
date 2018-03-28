const dashify = require(`dashify`);
const elementMetadata = require(`./element-metadata`);

module.exports = function elementTree({ elementPaths }) {
  return elementPaths.map((elementPath) => {
    const { parent = ``, slug, title } = elementMetadata({ elementPath });
    const parents = parent.split(`.`).filter(x => x);

    return {
      parent,
      path: elementPath,
      route: {
        name: [...parents, dashify(title)].join(`-`),
        path: [...parents, slug].join(`/`),
      },
      slug,
      title,
    };
  });
};
