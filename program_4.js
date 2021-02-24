'use strict';

let a = +prompt ('Введите число от 1 до 15');
  
switch (a) {
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
    alert('Вы ввели число 2');
    break;
  case 3:
    alert('Вы ввели число 3');
    break; 
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
    alert('Вы ввели число ' + a);
    break;                       
  default:
    alert('Неверный ввод');
}