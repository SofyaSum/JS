'use strict';

var a = +prompt ('Введите число от 1 до 15');
  
switch (a) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11: 
  case 12:  
  case 13:
  case 14:
  case 15:
    while (a <= 15) {
      console.log(a);
      a++;
    }
    break;                       
  default:
    alert('Неверный ввод');
}
