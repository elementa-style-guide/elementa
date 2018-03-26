const { cloneDeep } = require(`lodash`);

module.exports = function createNavigation({ elementTree, schema }) {
  return Object.keys(elementTree).reduce((x, elementKey) => {
    const {
      key,
      parent,
      route,
      title,
    } = elementTree[elementKey];

    parent.split(`.`).reduce((y, parentKey, index, array) => {
      const parentItem = y[parentKey];

      if (!parentItem.children) {
        parentItem.children = {};
      }

      if (array.length === index + 1) {
        // eslint-disable-next-line no-param-reassign
        parentItem.children[key] = {
          route,
          title,
        };
      }

      return parentItem.children;
    }, x);

    return x;
  }, cloneDeep(schema));
};
