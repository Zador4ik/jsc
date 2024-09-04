let NomChecking = prompt("Введите число для проверки");
let NomChecking2 = prompt("Введите число для проверки");
let resulted = parseInt(NomChecking);
let resulted2 = parseInt(NomChecking2);
let math = resulted / resulted2;
alert(math === Math.round(math)); //Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let nomForCheck = prompt("Введите число для проверки");
let nomForCheck2 = prompt("Введите число для проверки");
let stringNom = String(nomForCheck);
let stringNom2 = String(nomForCheck2);
let nomSymbol = stringNom[0];
let nomSymbo2 = stringNom2[0];
alert(Number(nomSymbol) === Number(nomSymbo2)); //Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let str = prompt("Введите число")
alert(str.indexOf("0")); //Дана некоторая строка. Найдите позицию первого нуля в строк

let numStr = prompt("Введите число");
alert(numStr.length); //Дано число. Выведите количество цифр в этом числе.