const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const array = [2,3,5,7];
    let count = 0;
    _.each(array, function(element, index, array) {
      count++;
      expect(element).toEqual(array[index]);
    });
    expect(count).toBe(4);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arrayLike = {
      0:2,
      1:3,
      2:5,
      3:7,
      length:4
      };

    let count = 0;
    _.each(arrayLike, function(element, index, array) {
      count++;
      expect(element).toEqual(arrayLike[index]);
    });
    expect(count).toBe(4);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const testObj = {
      name : "Henri",
      age : "23",
      state : "CA"
    }
    let count = 0;
    _.each(testObj, function(element, key, obj) {
      count++;
      expect(element).toEqual(obj[key]);
      console.log(key, "sfsdsfd");
    });
    expect(count).toBe(3);

  });
});
