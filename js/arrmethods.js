//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arr = [1, 5, 55, 64433, 6, 122];

const big10 = arr.filter(function(num) {
  return num > 0 && num < 10;
});

let bigSum = 0;

big10.forEach(element => {
  bigSum += element;
});

console.log(bigSum);

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
const strArr = ['https://youtube.com', 'http://google.com', 'https://website.com', 'aaaaaa'];

const result = strArr.filter(function(str) {
  return str.startsWith('http://');
});

console.log(result)

//Создайте функцию, которая принимает массив объектов с полями name и age и возвращает массив имен людей, возраст которых больше X лет.

function getNamesOfPeopleOlderThanX(people, x) {
    return people.filter(function(person) {
      return person.age > x;
    }).map(function(person) {
      return person.name;
    });
  };
  
  let people = [
    { name: "John", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 28 }
  ];
  
console.log(getNamesOfPeopleOlderThanX(people, 27));


// Удалите из массива все пустые строки.
let deleteArr = [1, '', 2, 3, '', 5];
deleteArr = deleteArr.filter(function(value){
  return value !== ""
});
console.log(myArray);