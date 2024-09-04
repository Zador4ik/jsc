const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);

const result = 108 + 223 - 2 * 5;
console.log(result)

const value = 27.5;
const valueHigh = Math.round(value);
console.log(valueHigh);

const valueDown = Math.floor(value);
console.log(valueDown);

const valueCeil = Math.ceil(value);
console.log(valueCeil);

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const botsSum = repairBots + defenceBots;
const message = `${companyName} has ${botsSum} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

let weight = '88.3';
let height = '1.75';

weight = Number(weight);
height = Number(height);

const bmi = weight / (height * height);
const fixedBmi = bmi.toFixed(1);
console.log(fixedBmi);

let nomNegative = 1;
console.log(nomNegative > 0);

let askNom = prompt("Введите число для проверки")
console.log(askNom > 0); //Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль с PROMPT.

let firstWordAsk = prompt("Введите первое слово");
let secondWordAsk = prompt("Введите второе слово");
let firstWordAskedLetter = firstWordAsk[0];
let secondWordAskedLetter = secondWordAsk[0];
let chooseWordAsked = firstWordAskedLetter == secondWordAskedLetter;
console.log(chooseWordAsked); // Даны два слова. Проверьте, что первые буквы этих слов совпадают. PROMPT.

let NomChecking = prompt("Введите число для проверки");
let resulted = parseInt(NomChecking);
let math = resulted / 2;
console.log(math === Math.round(math)); //Дано число. Проверьте, четное оно или нет. Prompt

let nomForCheck = prompt("Введите число для проверки");
let nomForCheck2 = prompt("Введите число для проверки");
let stringNom = String(nomForCheck);
let stringNom2 = String(nomForCheck2);
let nomSymbol = stringNom[0];
let nomSymbo2 = stringNom2[stringNom2.length - 1];
console.log(Number(nomSymbol) + Number(nomSymbo2)); // Дано число. Выведите в консоль сумму первой и последней цифры этого числа. PROMPT.

let firstWord = "Wow";
let secondWord = "Interesting";
let firstWordLetter = firstWord[0];
let secondWordLetter = secondWord[0];
let chooseWord = firstWordLetter == secondWordLetter;
console.log(chooseWord);
