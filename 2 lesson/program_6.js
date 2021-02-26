'use strict';

/**
 * Функция получает 2 числа и выполняет арифметическую операцию
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation может быть "+", "-", "/", "*"
 * @throws {Error} если передана не предусмотренная операция
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return getSum(arg1, arg2);
        case "-":
            return getDifferent(arg1, arg2);
        case "/":
            return getDivision(arg1, arg2);
        case "*":
            return getMultiply(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

/**
 * Функция складывает числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getSum(a, b) {
    return (a + b);
}

/**
 * Функция вычитает из a число b
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
function getDifferent(a, b) {
    return (a - b);
}

/**
 * Функция делит число а на число b
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
function getDivision(a, b) {
    return (a / b);
}

/**
 * Функция перемножает числа а и b
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
function getMultiply(a, b) {
    return (a * b);
}

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

let a = randomInteger(-10, 10);
let b = randomInteger(-10, 10);

console.log('Первое число ' + a);
console.log('Второе число ' + b);

console.log("Сумма " + mathOperation(a, b, "+"));
console.log("Разность " + mathOperation(a, b, "-"));
console.log("Частное " + mathOperation(a, b, "/"));
console.log("Произведение " + mathOperation(a, b, "*"));
console.log(mathOperation(a, b, "plus"));
