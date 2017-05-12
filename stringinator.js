const _ = require('./underbar');

const isDigit = function(str) {
  return !!str.match(/^\d$/);
}


const first = function(str, n) {
  return _.first(str,n);
};

const last = function(str, n) {
  return _.last(str,n);
};

const removeChar = function(str, target) {
  return _.reject(str,(ele) => {
    return ele === target;
  }).join("");
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, (ele) => ele === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
  return _.every(str, isDigit);
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.filter(str, isDigit).join("");

};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, (ele) => truncateString(ele, maxLength));
};

const countChars = function(str) {
  // Your code goes here
  const obj = {};
  _.each(str, (ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele]++;
    }
  });
  return obj;
};

const dedup = function(str) {
  return _.uniq(str).join("");
};

module.exports = {
  isDigit: isDigit,
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
