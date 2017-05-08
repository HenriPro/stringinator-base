const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(4)).toBe(4);
  });

  it('returns the same array if given an array', () => {
    const array = [0,1,2,3]
    expect(_.identity(array)).toBe(array);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      a:123,
      b:42
    }
    expect(_.identity(obj)).toBe(obj);


  });
});
