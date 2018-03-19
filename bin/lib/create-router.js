const fs = require(`fs`);
const pathUtil = require(`path`);

module.exports = function createRouter({ elementTree }) {
  const routesString = Object.keys(elementTree).reduce((prev, key) => {
    const { path, route } = elementTree[key];

    // eslint-disable-next-line no-param-reassign
    prev += `{component: () => import(\`${path}\`),name: \`${route.name}\`,path: \`/${route.path}\`},`;

    return prev;
  }, ``);
  const template = fs.readFileSync(pathUtil.join(__dirname, `..`, `router.js.tpl`), { encoding: `utf8` });

  return template.replace(`## routes-placeholder ##`, routesString);
};
