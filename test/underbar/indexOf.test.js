const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf(["a","b","c","d"], "a")).toBe(0)
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf(["a","b","c","d"],"d")).toBe(3)
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf(["a","b","c","d"],"z")).toBe(-1)
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf(["a","b","c","d","a"], "a")).toBe(0)
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    expect(_.indexOf(["a","b","c","d","a"], "a", 3)).toBe(4)

  });

});
