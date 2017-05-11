const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [0,12,34];
    expect(_.contains(nums,12)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [0,12,34];
    expect(_.contains(nums,43)).toBe(false)
  });

  it('returns true if the target value is among the values of an object', () => {
    const stats = {
      strength : 12,
      fenense : 32,
      quilting : 3
    };

    expect(_.contains(stats,3)).toBe(true)
  });

  it('returns false if the target value is not among the values of an object', () => {
    const stats = {
      strength : 12,
      fenense : 32,
      quilting : 3
    };

    expect(_.contains(stats,42)).toBe(false);
  });
});
