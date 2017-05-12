const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    expect(_.reject([0,1,2,3,4], (ele) => ele % 2 !== 0)).toEqual([0,2,4])
  });

  it('rejects null values from an object', () => {
    expect(_.reject({ a: 4, b : null, c : 0, d : false, e : undefined}, (ele) => ele === null)).toEqual([4, 0, false, undefined]);

  });
});
