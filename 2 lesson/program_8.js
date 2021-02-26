'use strict'

function randomInteger(min, max) { 
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function power(val, pow) {
  if (val == 0) {
    return 0;
  } else if ( val == 1) {
    return 1;
  } else if (pow == 0) {
    return 1;
  } else if (pow == 1) {
    return val;
  } else if (pow > 1) {
    return val * power(val, pow - 1);
  } else {
    return 1 /  + power(val, -pow) + " или 1 / " + power(val, -pow);
  }
}

let a = randomInteger(-5, 5);
let b = randomInteger(-5, 5);

console.log(a + ' в степени ' + b);
console.log(power(a, b));
