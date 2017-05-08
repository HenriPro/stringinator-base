const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(["a",3,5])).toBe("a");
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(["a",3,5],2)).toEqual(["a",3]);

  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(["a",3,5],5)).toEqual(["a",3,5]);

  });
});
