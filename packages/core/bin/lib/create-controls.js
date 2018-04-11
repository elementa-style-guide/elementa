const fs = require(`fs`);
const path = require(`path`);

module.exports = function createControls({ controls, root }) {
  const controlsString = Object.keys(controls).reduce((prev, name) => {
    const modulePath = controls[name];
    const isModuleName = path.parse(modulePath).dir === ``;
    const fullPath = isModuleName ? name : path.resolve(root, modulePath);

    // eslint-disable-next-line no-param-reassign
    prev += `import ${name}Control from '${fullPath}';`;
    // eslint-disable-next-line no-param-reassign
    prev += `Vue.component(\`${name}Control\`, ${name}Control);`;

    return prev;
  }, ``);
  const template = fs.readFileSync(path.join(__dirname, `..`, `controls.js.tpl`), { encoding: `utf8` });

  return template.replace(`## controls-placeholder ##`, controlsString);
};
