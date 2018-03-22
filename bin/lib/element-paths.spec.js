const glob = require(`glob`);

const elementPaths = require(`./element-paths`);

jest.mock(`glob`, () => ({ sync: jest.fn() }));

describe(`elementPaths()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof elementPaths).toBe(`function`);
  });

  test(`It should return an array of absolute Elementa element file paths.`, () => {
    glob.sync.mockReturnValue([
      `an/elementa/file.elem.vue`,
      `another/elementa/file.elem.vue`,
      `foo/bar/baz.elem.vue`,
    ]);
    const expectedResult = [
      `/root/src/an/elementa/file.elem.vue`,
      `/root/src/another/elementa/file.elem.vue`,
      `/root/src/foo/bar/baz.elem.vue`,
    ];

    expect(elementPaths({ src: `/root/src` })).toEqual(expectedResult);
  });
});
