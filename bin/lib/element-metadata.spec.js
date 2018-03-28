const fs = require(`fs`);

const elementMetadata = require(`./element-metadata`);

jest.mock(`fs`, () => ({ readFileSync: jest.fn() }));

describe(`elementMetadata()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof elementMetadata).toBe(`function`);
  });

  test(`It should parse and return element metadata.`, () => {
    fs.readFileSync.mockReturnValue(`
      <template><div></div></template>
      <script>
      /* elementa-metadata
      parent: baz.qux
      slug: foo-bar
      title: Foo Bar
      */
      </script>
    `);

    const elementPath = `/foo/bar.ele.vue`;
    const expectedResult = {
      parent: `baz.qux`,
      slug: `foo-bar`,
      title: `Foo Bar`,
    };

    expect(elementMetadata({ elementPath })).toEqual(expectedResult);
  });

  test(`It should parse and return element metadata with missing properties.`, () => {
    fs.readFileSync.mockReturnValue(`
      <template><div></div></template>
      <script>
      /* elementa-metadata
      title: Foo Bar
      */
      </script>
    `);

    const elementPath = `/foo/bar.ele.vue`;
    const expectedResult = {
      slug: ``,
      title: `Foo Bar`,
    };

    expect(elementMetadata({ elementPath })).toEqual(expectedResult);
  });
});
