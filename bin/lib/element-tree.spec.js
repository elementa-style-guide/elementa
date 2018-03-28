const elementMetadata = require(`./element-metadata`);
const elementTree = require(`./element-tree`);

jest.mock(`./element-metadata`, () => jest.fn());

describe(`elementTree()`, () => {
  beforeEach(() => {
    elementMetadata.mockReturnValue({
      parent: `components.foo`,
      slug: `foo`,
      title: `Foo Bar`,
    });
  });

  test(`It should be a function.`, () => {
    expect(typeof elementTree).toBe(`function`);
  });

  test(`It should return an array with element tree items.`, () => {
    const elementPaths = [
      `/root/src/Foo.ele.vue`,
      `/root/src/Bar.ele.vue`,
    ];
    const expectedResult = [
      expect.anything(),
      expect.anything(),
    ];

    expect(elementTree({ elementPaths })).toEqual(expectedResult);
  });

  test(`It should work without a parent.`, () => {
    elementMetadata.mockReturnValue({
      slug: `foo`,
      title: `Foo`,
    });

    const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
    const expectedResult = {
      name: `foo`,
      path: `foo`,
    };

    expect(elementTree({ elementPaths })[0].route).toEqual(expectedResult);
  });

  describe(`Tree item object`, () => {
    test(`It should have a slug property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `foo`;

      expect(elementTree({ elementPaths })[0].slug).toEqual(expectedResult);
    });

    test(`It should have a parent property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `components.foo`;

      expect(elementTree({ elementPaths })[0].parent).toEqual(expectedResult);
    });

    test(`It should have a path property.`, () => {
      const elementPaths = [`/root/src/Foo.ele.vue`];
      const expectedResult = `/root/src/Foo.ele.vue`;

      expect(elementTree({ elementPaths })[0].path).toEqual(expectedResult);
    });

    test(`It should have a route property.`, () => {
      const elementPaths = [`/root/src/Foo.ele.vue`];

      expect(elementTree({ elementPaths })[0].route).toBeDefined();
    });

    test(`It should have a title property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `Foo Bar`;

      expect(elementTree({ elementPaths })[0].title).toBe(expectedResult);
    });

    describe(`Route object`, () => {
      test(`It should have a name property.`, () => {
        const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
        const expectedResult = `components-foo-foo-bar`;

        expect(elementTree({ elementPaths })[0].route.name).toEqual(expectedResult);
      });

      test(`It should have a path property.`, () => {
        const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
        const expectedResult = `components/foo/foo`;

        expect(elementTree({ elementPaths })[0].route.path).toEqual(expectedResult);
      });
    });
  });
});
