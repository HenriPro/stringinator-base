const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      let nums = [1,2,3,4];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true for empty array', () => {
      expect(_.every([])).toBe(true);
    });

    it('single number odd', () => {
      expect(_.every([3], (ele) => {
        return ele % 2 === 1;
      })).toBe(true);
    });

    it('returns false -- trivial', () => {
      expect(_.every([false])).toBe(false);
    });

    it('returns false -- failure: single number odd', () => {
      expect(_.every([2], (ele) => {
        return ele % 2 === 1;
      })).toBe(false);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([3,5,9]), (ele) => {
        return ele % 2 === 1;
      }).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([2,3,5,9], (ele) => {
        return ele % 2 === 1;
      })).toBe(false);
    });

  });
});
