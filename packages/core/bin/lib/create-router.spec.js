const createRouter = require(`./create-router`);

describe(`createRouter()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof createRouter).toBe(`function`);
  });
});
