const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let x = 0; x < array.length; x++) {
    sum += array[x];
  }
  return sum;
};

const multiply = function(array) {
  let multiply = array[0];
  for (let x = 1; x < array.length; x++) {
    multiply *= array[x];
  }
  return multiply;
};

const power = function(a, b) {
  let power = a;
	for (let x = 0; x < (b - 1); x++) {
    power *= a;
  }
  return power;
};

const factorial = function(a) {
  let factorial = a;

  if (a === 0) {
    return 1;
  } else {
    for (let x = (a - 1); x > 0; x--) {
      factorial *= x;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
