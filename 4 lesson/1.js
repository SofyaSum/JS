'use strict';

var number = +prompt('Введите число от 0 до 999');

function numberToObject(num) {
  if (number > 999) {
    console.log('Число превышает крайнее значение 999');
    return {};
  }
  else {
    let object = {
    'единицы': 0,
    'десятки': 0,
    'сотни': 0
    };
    for (let prop in object) {
      object[prop] = num % 10;
      num = Math.floor( num / 10);
    }
    return object;
  }
}

while (isNaN(number) || number < 0 /* || number > 999 */) {
  number = +prompt('Введите число от 0 до 999');
}

console.log(numberToObject(number));
