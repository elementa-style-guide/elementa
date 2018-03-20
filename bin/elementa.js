#!/usr/bin/env node
const { spawn } = require(`child_process`);
const glob = require(`glob`);
const path = require(`path`);
const fs = require(`fs`);

const createNavigationUtil = require(`./lib/create-navigation`);
const createRouterUtil = require(`./lib/create-router`);
const elementTreeUtil = require(`./lib/element-tree`);

// eslint-disable-next-line import/no-dynamic-require
const config = require(`${process.cwd()}/elementa.config.js`);

config.paths.src = config.paths.src.replace(`<rootDir>`, config.paths.root);

const elementPaths = glob
  .sync(`**/*.${config.elementSuffix}.vue`, { cwd: config.paths.src })
  .map(x => path.resolve(config.paths.src, x));

const elementTree = elementTreeUtil({ elementPaths });
const router = createRouterUtil({ elementTree });
const navigation = createNavigationUtil({
  elementTree,
  schema: config.navigationSchema,
});

fs.writeFileSync(
  path.resolve(__dirname, `..`, `src`, `router.js`),
  router,
  { encoding: `utf8` },
);
console.log(`router.json created`);

fs.writeFileSync(
  path.resolve(__dirname, `..`, `src`, `navigation.json`),
  JSON.stringify(navigation),
  { encoding: `utf8` },
);
console.log(`navigation.json created`);

process.env.ELEMENTA_PROJECT_CWD = process.cwd();

spawn(
  `npm`,
  [`run`, `--prefix`, `${__dirname}/..`, `serve`],
  { stdio: `inherit` },
);

