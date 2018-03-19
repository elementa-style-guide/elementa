const glob = require(`glob`);

const elements = require(`./elements`);

jest.mock(`glob`, () => ({ sync: jest.fn() }));

describe(`elements()`, () => {
  test(`It should be a function.`, () => {
    expect(typeof elements).toBe(`function`);
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

    expect(elements({ src: `/root/src` })).toEqual(expectedResult);
  });
});
