const createNavigation = require(`./create-navigation`);

describe(`createNavigation()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof createNavigation).toBe(`function`);
  });

  test(`It should create a flat navigation structure from an element tree and schema.`, () => {
    const schema = [
      {
        slug: ``,
        title: `Home`,
      },
      {
        slug: `components`,
        title: `Components`,
      },
    ];
    const elementTree = [
      {
        route: {
          name: `home`,
        },
        slug: ``,
        title: `Home`,
      },
      {
        parent: `components`,
        route: {
          name: `components-foo`,
        },
        slug: `foo`,
        title: `Foo`,
      },
      {
        route: {
          name: `bar`,
        },
        slug: `bar`,
        title: `Bar`,
      },
    ];
    const expectedResult = [
      {
        route: {
          name: `home`,
        },
        slug: ``,
        title: `Home`,
      },
      {
        children: [
          {
            route: {
              name: `components-foo`,
            },
            slug: `foo`,
            title: `Foo`,
          },
        ],
        slug: `components`,
        title: `Components`,
      },
      {
        route: {
          name: `bar`,
        },
        slug: `bar`,
        title: `Bar`,
      },
    ];

    expect(createNavigation({ elementTree, schema })).toEqual(expectedResult);
  });

  test(`It should create a nested navigation structure from an element tree and schema.`, () => {
    const schema = [
      {
        children: [
          {
            slug: `foo`,
            title: `Foo`,
          },
        ],
        slug: `components`,
        title: `Components`,
      },
    ];
    const elementTree = [
      {
        parent: `components.foo`,
        route: {
          name: `components-foo-bar`,
        },
        slug: `bar`,
        title: `Bar`,
      },
    ];
    const expectedResult = [
      {
        children: [
          {
            children: [
              {
                route: {
                  name: `components-foo-bar`,
                },
                slug: `bar`,
                title: `Bar`,
              },
            ],
            slug: `foo`,
            title: `Foo`,
          },
        ],
        slug: `components`,
        title: `Components`,
      },
    ];

    expect(createNavigation({ elementTree, schema })).toEqual(expectedResult);
  });
});

