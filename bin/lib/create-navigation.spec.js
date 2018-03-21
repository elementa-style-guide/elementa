const createNavigation = require(`./create-navigation`);

describe(`createNavigation()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof createNavigation).toBe(`function`);
  });

  test(`It should create a flat navigation structure from an element tree and schema.`, () => {
    const schema = {
      components: {
        title: `Components`,
      },
    };
    const elementTree = {
      Foo1: {
        key: `foo`,
        parent: `components`,
        route: {
          name: `components-foo`,
        },
        title: `Foo`,
      },
    };
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

    expect(createNavigation({ elementTree, schema })).toEqual(expectedResult);
  });

  test(`It should create a nested navigation structure from an element tree and schema.`, () => {
    const schema = {
      components: {
        title: `Components`,
        children: {
          foo: {
            title: `Foo`,
          },
        },
      },
    };
    const elementTree = {
      Bar1: {
        key: `bar`,
        parent: `components.foo`,
        route: {
          name: `components-foo-bar`,
        },
        title: `Bar`,
      },
    };
    const expectedResult = {
      components: {
        children: {
          foo: {
            children: {
              bar: {
                route: {
                  name: `components-foo-bar`,
                },
                title: `Bar`,
              },
            },
            title: `Foo`,
          },
        },
        title: `Components`,
      },
    };

    expect(createNavigation({ elementTree, schema })).toEqual(expectedResult);
  });

  test(`It should throw an error if a parent key doesn't exist.`);
});

