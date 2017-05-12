const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([0,0,9,0,9,5,3])).toEqual([0,9,5,3]);
  });
});
