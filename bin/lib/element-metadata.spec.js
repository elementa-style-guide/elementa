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
      /* elementa-navigation: [baz.qux|foo-bar|Foo Bar] */
      </script>
    `);

    const elementPath = `/foo/bar.elm.vue`;
    const expectedResult = {
      key: `foo-bar`,
      parent: `baz.qux`,
      title: `Foo Bar`,
    };

    expect(elementMetadata({ elementPath })).toEqual(expectedResult);
  });
});
