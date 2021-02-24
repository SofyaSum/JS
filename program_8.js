'use strict'

function randomInteger(min, max) { 
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

let a = randomInteger(1, 5);
let b = randomInteger(1, 5);

console.log(a + ' в степени ' + b);
console.log(power(a, b));