'use strict';

var product = [
  { name: 'jeans',
    price: 12
  },
  { name: 'shirt',
    price: 7
  },
  { name: 'socks',
    price: 4
  },
  { name: 'coat',
    price: 18
  }
];

var basket = [];
var sum = 0;

function addToBasket(obj) {
  var tr = document.createElement('tr');
  var tdName = document.createElement('td');
  tdName.innerHTML = product[obj.id].name;
  tr.appendChild(tdName);
  var tdPrice = document.createElement('td');
  tdPrice.innerHTML = product[obj.id].price + " $";
  tr.appendChild(tdPrice);
  document.getElementById('cart-contain').appendChild(tr);
  basket.push(product[obj.id]);
  totalSum();
  return basket;
}

function removeCart() {
  basket = [];
  document.getElementById('cart-contain').innerHTML = "<tr><td>Наименование товара</td><td>Сумма</td></tr>";
  document.getElementById('total').innerHTML = "0 $";
}

function totalSum() {
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price;
  }
  document.getElementById('total').innerHTML = sum + " $";
}

for (let i = 0; i < basket.length; i++) {
  var tr = document.createElement('tr');
}

for (let i = 0; i < product.length; i++) {
  let div = document.createElement('div');
  div.className = "product";
  div.id = i;
  div.innerHTML += "<p>" + product[i].name + ' ' + product[i].price + " $</p>";
  div.innerHTML += '<button id="' + i + '" onclick="addToBasket(this)">Добавить в корзину</button>';
  document.getElementById("catalog").appendChild(div);
}

totalSum(basket);

console.log(product[2].name);
