'use strict'

/*
1 - Выделяем память для 4ёх переменных a, b, c, d
2 - Присваиваем a = 1, b = 1
3 - В 'c' и 'd' значения undefined
*/
let a = 1, b = 1, c, d;

/*
1 - Прибавляем и записываем 1 в переменную а (а = 2)
2 - Копируем значение а(2) в переменную с (с = 2)
*/
c = ++a;
alert(c); // ответ: 2

/*
1 - Копируем b(1) в переменную d (d = 1)
2 - Увеличиваем b(1) на 1 ( b = 2)
*/
d = b++;
alert(d); //ответ: 1

/*
1 - а увеличиваем на 1 (а = 3)
2 - К 2 прибавляем переменную а(3)
3 - Перезаписываем в переменную с(2) значение 
выражения (с = 5)
*/
c = 2 + ++a;
alert(c); //ответ: 5

/*
1 - К 2 прибавляем значение переменной b(2)
2 - Увеличиваем переменную b на 1 (b = 3)
3 - В переменную d(1) перезаписываем значение
выражения (d = 4)
*/
d = 2 + b++;
alert(d); //ответ: 4

/*
Операции с а = 1 => 
		   ++а => a(2)
		   ++a => a(3)

Операции с b = 1 =>
           b++ => b(2)
           b++ => b(3)
*/
alert(a); //3
alert(b); //3