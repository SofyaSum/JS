'use strict';

let product = [
  ['apple', 20],
  ['orange', 25],
  ['pineapple', 43],
  ['banana', 37]
];

function countBasketPrice(arr) {
  var price = 0;
  for (let i = 0; i < arr.length; i++) {
    price += arr[i][1];
  }
  return price;
}

let basketProduct = [];

basketProduct.push(product[1]);
basketProduct.push(product[3]);

console.log(countBasketPrice(basketProduct) + ' руб');

