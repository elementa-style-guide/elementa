#!/usr/bin/env node
const { spawn } = require(`child_process`);
const path = require(`path`);
const fs = require(`fs`);

const createControlsUtil = require(`./lib/create-controls`);
const createNavigationUtil = require(`./lib/create-navigation`);
const createRouterUtil = require(`./lib/create-router`);
const elementPathsUtil = require(`./lib/element-paths`);
const elementTreeUtil = require(`./lib/element-tree`);

process.env.ELEMENTA_PROJECT_CWD = process.cwd();

const config = require(`../config`);

config.paths.src = config.paths.src.replace(`<rootDir>`, config.paths.root);

const controls = createControlsUtil({ controls: config.controls, root: config.paths.root });
const elementPaths = elementPathsUtil({
  src: config.paths.src,
  suffix: config.elementSuffix,
});
const elementTree = elementTreeUtil({ elementPaths });
const router = createRouterUtil({ elementTree });
const navigation = createNavigationUtil({
  elementTree,
  schema: config.navigationSchema,
});

fs.writeFileSync(
  path.resolve(__dirname, `..`, `src`, `controls.js`),
  controls,
  { encoding: `utf8` },
);
// eslint-disable-next-line no-console
console.log(`controls.js created`);

fs.writeFileSync(
  path.resolve(__dirname, `..`, `src`, `router.js`),
  router,
  { encoding: `utf8` },
);
// eslint-disable-next-line no-console
console.log(`router.js created`);

fs.writeFileSync(
  path.resolve(__dirname, `..`, `src`, `navigation.json`),
  JSON.stringify(navigation),
  { encoding: `utf8` },
);
// eslint-disable-next-line no-console
console.log(`navigation.json created`);

spawn(
  `npm`,
  [`run`, `--prefix`, `${__dirname}/..`, `serve`],
  { stdio: `inherit` },
);

