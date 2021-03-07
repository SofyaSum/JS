'use strict';

var product = {
  596989 :{
    name: 'jeans',
    price: 12
  },
  435986 :{
    name: 'shirt',
    price: 7
  },
  939650 :{
    name: 'socks',
    price: 4
  },
}

var basket = [];

function addToBasket(object, quantity) {
  let newObj = {};

  newObj.name = product[object].name;
  newObj.price = product[object].price;
  newObj.amount = quantity;

  basket.push(newObj);
  return basket;
}

function totalSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].price * array[i].amount;
  }
  return sum;
}

addToBasket(939650, 4);
addToBasket(596989, 1);
addToBasket(435986, 3);

console.log('Total $' + totalSum(basket));
