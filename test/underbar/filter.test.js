const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    expect(_.filter([0,1,2,3,4], (ele) => ele % 2 !== 0)).toEqual([1,3,])
  });

  it('filters an object to only numeric values', () => {
    const person = {
      age : 34,
      name : "Tom",
      occupation : "coal minner"
    }
    expect(_.filter(person, (ele) => typeof ele === "number")).toEqual([34])
  });
});
