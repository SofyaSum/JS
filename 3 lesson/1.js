'use strict';

var arr = [2];
var n = 3;
var len = 100;


while ( n < len) {
  for (let i = 0; i < arr.length; i++) {
    if (n > arr[i] & n % arr[i] == 0 ) {
      n++;
      i = -1;             
    }
  }
  arr.push(n);
  n++;
}

console.log(arr);

