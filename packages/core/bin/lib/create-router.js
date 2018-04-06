const fs = require(`fs`);
const pathUtil = require(`path`);

module.exports = function createRouter({ elementTree }) {
  const routesString = elementTree.reduce((prev, element) => {
    const { path, route } = element;

    // eslint-disable-next-line no-param-reassign
    prev += `{component: () => import(/* webpackChunkName: "${route.name}" */ \`${path}\`),name: \`${route.name}\`,path: \`/${route.path}\`},`;

    return prev;
  }, ``);
  const template = fs.readFileSync(pathUtil.join(__dirname, `..`, `router.js.tpl`), { encoding: `utf8` });

  return template.replace(`## routes-placeholder ##`, routesString);
};
