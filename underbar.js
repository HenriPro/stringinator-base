// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  // Your code goes here
  if (n === 1 ) {
    return array[0];
  }
  return array.slice(0,n)
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  if (n === 1 ) {
    return array[array.length-1];
  }
  return array.slice(Math.max(0,array.length-n));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (let index = fromIndex; index < array.length; index++ ) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  const length = obj["length"];
  if (length >= 0 && typeof length === "number") {
    return true;
  }
  return false;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if(isArrayLike(obj)){
    for (let i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }

};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let mapped = [];
  each(obj, (currentValue, keyOrIndex, obj) => {
    mapped.push(callback(currentValue, keyOrIndex, obj));
  });
  return mapped;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  let plunked = [];
  each(obj, (currentValue, keyOrIndex, iteratedObj) => {
    plunked.push(currentValue[key]);
  });
  return plunked;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  // Your code goes here
  let accumulator = initialValue;
  let initializing = accumulator === undefined;

  each(obj, (currentValue, keyOrIndex, iteratedObj) => {
    if (initializing) {
      initializing = false
      accumulator = currentValue;
    } else {
      accumulator = callback(accumulator, currentValue, keyOrIndex, iteratedObj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  let result;
  each(obj, (currentValue) => {
    if (currentValue === target) {
      result = true;
      return;
    };
  });
  if (result === undefined) {
    result = false;
  }
  return result;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  let result = true;
  each(obj, (currentValue) => {
    if (callback(currentValue)) {
      // do nothing
    } else {
      result = false;
    }
  });
  return result;
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  let result = false;
  each(obj, (currentValue) => {
    if (callback(currentValue)) {
      result = true;
    }
  });
  return result;


};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
    let filtered = [];
    each(obj, (ele, indexOrKey, iterratedObj) => {
      if (callback(ele, indexOrKey, iterratedObj)) {
        filtered.push(ele);
      }
    });
    return filtered;
};

// Return object without the elements / object values that were rejected by the callback.
const reject = function(obj, callback=identity) {
  let rejected = [];
  each(obj, (ele, indexOrKey, iterratedObj) => {
    if (!callback(ele, indexOrKey, iterratedObj)) {
      rejected.push(ele);
    }
  });
  return rejected;

};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  const set = new Set;
  each(obj, (ele) => {
    set.add(ele);
  });
  return [...set];
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
