const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
  it('maps every number in a object to an array of numbers squared', () => {
    const obj = { a : 1, b : 2, c : 3, d : 4, e : 5};
    const mappedArr = _.map(obj, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
});
