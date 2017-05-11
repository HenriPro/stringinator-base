const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Jake', age: 13},
      { name: 'Tim', age: 23},
      { name: 'Mike', age: -21}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([13, 23, -21]);
  });

  it('returns an array of undefined, given an array of objects with no matching key', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'gender');
    expect(result).toEqual([undefined, undefined, undefined]);
  });
});
