'use strict';

        /**
         * Функция складывает числа
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        function getSum(a, b) {
            return a + b;
        }

        /**
         * Функция вычитает из a число b
         * @param {number} a 
         * @param {number} b
         * @returns {number}
         */
        function getDifferent(a, b) {
            return a - b;
        }

        /**
         * Функция делит число а на число b
         * @param {number} a 
         * @param {number} b
         * @returns {number}
         */
        function getDivision(a, b) {
            return a / b;
        }

        /**
         * Функция перемножает числа а и b
         * @param {number} a 
         * @param {number} b
         * @returns {number}
         */
        function getMultiply(a, b) {
            return a * b;
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

        let sum = getSum(a, b);
        let differ = getDifferent(a, b);
        let divis = getDivision(a, b);
        let mult = getMultiply(a, b);

        console.log('a = ' + a);
        console.log('b = ' + b);

        console.log(a + ' + ' + b + ' = ' + sum);
        console.log(a + ' - ' + b + ' = ' + differ);
        console.log(a + ' / ' + b + ' = ' + divis);
        console.log(a + ' * ' + b + ' = ' + mult);