const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike(["0","1","3","4","5"])).toBe(true)
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      1 : "a",
      2 : "f",
      length : 2
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);

  });

  it('returns false for a non-array-like object', () => {
    const notArraylike = {
      1 : "a",
      2 : "f",
      length : -23
    };

    expect(_.isArrayLike(notArraylike)).toBe(false);

  });
});
