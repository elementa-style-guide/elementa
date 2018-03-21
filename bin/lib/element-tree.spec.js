const elementMetadata = require(`./element-metadata`);
const elementTree = require(`./element-tree`);

jest.mock(`./element-metadata`, () => jest.fn());

describe(`elementTree()`, () => {
  beforeEach(() => {
    elementMetadata.mockReturnValue({
      key: `foo`,
      parent: `components.foo`,
      title: `Foo`,
    });
  });

  test(`It should be a function.`, () => {
    expect(typeof elementTree).toBe(`function`);
  });

  test(`It should return an object with keyed element tree items.`, () => {
    const elementPaths = [
      `/root/src/Foo.ele.vue`,
      `/root/src/Bar.ele.vue`,
    ];
    const expectedResult = {
      Foo1: expect.anything(),
      Bar2: expect.anything(),
    };

    expect(elementTree({ elementPaths })).toEqual(expectedResult);
  });

  describe(`Tree item object`, () => {
    test(`It should have a key property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `foo`;

      expect(elementTree({ elementPaths }).Foo1.key).toEqual(expectedResult);
    });

    test(`It should have a parent property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `components.foo`;

      expect(elementTree({ elementPaths }).Foo1.parent).toEqual(expectedResult);
    });

    test(`It should have a path property.`, () => {
      const elementPaths = [`/root/src/Foo.ele.vue`];
      const expectedResult = `/root/src/Foo.ele.vue`;

      expect(elementTree({ elementPaths }).Foo1.path).toEqual(expectedResult);
    });

    test(`It should have a route property.`, () => {
      const elementPaths = [`/root/src/Foo.ele.vue`];

      expect(elementTree({ elementPaths }).Foo1.route).toBeDefined();
    });

    test(`It should have a title property.`, () => {
      const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
      const expectedResult = `Foo`;

      expect(elementTree({ elementPaths }).Foo1.title).toBe(expectedResult);
    });

    describe(`Route object`, () => {
      test(`It should have a name property.`, () => {
        const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
        const expectedResult = `components-foo-foo`;

        expect(elementTree({ elementPaths }).Foo1.route.name).toEqual(expectedResult);
      });

      test(`It should have a path property.`, () => {
        const elementPaths = [`/does/not/matter/is/mocked/Foo.ele.vue`];
        const expectedResult = `components/foo/foo`;

        expect(elementTree({ elementPaths }).Foo1.route.path).toEqual(expectedResult);
      });
    });
  });
});
