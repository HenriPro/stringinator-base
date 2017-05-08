const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(["a", 3, 5])).toBe(5);
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(["a", 3, 5],2)).toEqual([3, 5]);

  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(["a", 3, 5],5)).toEqual(["a", 3, 5]);

  });
});
