let str = "some test string";
let firstStr = str[0];
let lastStr = str[str.length - 1]
console.log(firstStr, lastStr) //Получить первую и последнюю буквы строки

let strHigh1 = str.charAt(0).toUpperCase();
let strHigh2 = str.charAt(str.length - 1).toUpperCase()
console.log(strHigh1, strHigh2); //Сделать первую и последнюю буквы в верхнем регистре

let founder = str.indexOf('string');
console.log(founder); //Найти положение слова ‘string’ в строке

let founder2 = str.indexOf(' s');
console.log(founder2); //Найти положение второго пробела (“вручную” ничего не считать)

let index = 4;
let simvols1 = str.slice(index, index + 4);
console.log(simvols1) //Получить строку с 5-го символа длиной 4 буквы

let simvols2 = str.slice(index, 10);
console.log(simvols2) //Получить строку с 5-го по 9-й символы

let newString = str.slice(0, -6);;
console.log(newString); //Получить новую строку из исходной путем удаления последних 6-и символов

let z = "20";
let x = 16;
let numString = z + x;
console.log(numString); //Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

