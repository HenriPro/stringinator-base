const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([1,2], (ele) => ele % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    expect(_.some([2,6], (ele) => ele % 2 === 1)).toBe(false);

  });

});
