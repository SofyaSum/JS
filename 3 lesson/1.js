'use strict';

var arr = [2];
var n = 3;
var len = 100;


while ( n < len) {
  for (var i = 0; i < arr.length; i++) {    //делим число на все простые числа
    if (n > arr[i] & n % arr[i] == 0 ) {    //если делится, то выходим из цикла
      n++;
      break;            
    } 
  }
  if (i == arr.length) {          //если не разделилось ни на одно число,
      arr.push(n);                //то добавляем в массив
      n++;
    }
}

console.log(arr);

