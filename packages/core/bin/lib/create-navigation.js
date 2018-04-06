const { cloneDeep } = require(`lodash`);

function addToRoot({ element, schema }) {
  let schemaItem = schema.find(({ slug }) => slug === element.slug);

  if (!schemaItem) {
    schemaItem = {};
    schema.push(schemaItem);
  }

  Object.assign(schemaItem, {
    route: element.route,
    slug: element.slug,
    title: element.title,
  });
}

function addToParent({ element, schema }) {
  element.parent.split(`.`).reduce((prev, parentKey, index, array) => {
    const parentItem = prev.find(({ slug }) => slug === parentKey);

    if (!parentItem.children) {
      parentItem.children = [];
    }

    if (array.length === index + 1) {
      parentItem.children.push({
        route: element.route,
        slug: element.slug,
        title: element.title,
      });
    }

    return parentItem.children;
  }, schema);
}

module.exports = function createNavigation({ elementTree, schema }) {
  return elementTree.reduce((prev, element) => {
    if (element.parent) addToParent({ element, schema: prev });
    else addToRoot({ element, schema: prev });

    return prev;
  }, cloneDeep(schema));
};
