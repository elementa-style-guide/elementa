
// elementTree
// {
//   AppButton{ID}: {
//     parent: 'components.atoms',
//     path: /root/src/components/atoms/AppButton.vue,
//     route: {
//       name: 'cmp-atoms-button',
//       path: '/cmp/atoms/button',
//     },
//     title: 'Button',
//   }
// }
/*
const expectedResult = {
      components: {
        children: {
          foo: {
            route: {
              name: `components-foo`,
            },
            title: `Foo`,
          },
        },
        title: `Components`,
      },
    };
*/

module.exports = function createNavigation({ elementTree, schema }) {
  return Object.keys(elementTree).reduce((prev, elementKey) => {
    const {
      key,
      parent,
      route,
      title,
    } = elementTree[elementKey];

    parent.split(`.`).reduce((_, parentKey, index, array) => {
      const parentItem = _[parentKey];

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
    }, prev);

    return prev;
  }, Object.assign({}, schema)); // todo use lodash
};
