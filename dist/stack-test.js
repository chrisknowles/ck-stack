'use strict';

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var push = function push(state) {
  return function (val) {
    return state.push(val);
  };
};

var pop = function pop(state) {
  return function () {
    return state.pop();
  };
};

var isEmpty = function isEmpty(state) {
  return function () {
    return state.length < 1;
  };
};

var clear = function clear(state) {
  return function () {
    return state.splice(0);
  };
};

var current = function current(state) {
  return function () {
    return state[state.length - 1];
  };
};

var getValues = function getValues(state) {
  return function () {
    return [].concat(toConsumableArray(state));
  };
};

function main(state) {
  return {
    push: push(state),
    pop: pop(state),
    isEmpty: isEmpty(state),
    clear: clear(state),
    current: current(state),
    getValues: getValues(state)
  };
}

function stack$1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return main(state || []);
}

stack$1.stackTest = function () {
  var state = [];
  var s = stack$1(state);
  return Object.assign({}, s, { state: state });
};

module.exports = stack$1;
