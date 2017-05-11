const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const nums = [0,1,2,3];
    const sumOfNums = _.reduce(nums, (a, b) => {
      return a + b;
    },3);
    expect(sumOfNums).toBe(9);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [0,1,2,3];
    const sumOfNums = _.reduce(nums, (a, b) => {
      return a + b;
    });
    expect(sumOfNums).toBe(6);
  });

});
