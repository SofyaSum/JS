'use strict';

/**
 * Функция генерирует случайное целое число в диапазоне
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInteger(min, max) { 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let a =  randomInteger(-9, 9);
let b =  randomInteger(-9, 9);

console.log('Первое число  ' + a);
console.log('Второе число  ' + b);
        
if (a >= 0 && b >= 0) {
    console.log('Разность этих чисел  ' + (a - b));
} else if (a < 0 && b < 0) {
    console.log('Произведение этих чисел  '+ (a * b));
} else {
    console.log('Сумма этих чисел  ' + (a + b));
}
