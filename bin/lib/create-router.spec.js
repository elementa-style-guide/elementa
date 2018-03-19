const createRouter = require(`./route-imports`);

describe(`createRouter()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof createRouter).toBe(`function`);
  });
});
