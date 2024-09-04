let num = [1,2,3];

function multiply() {
    let strr = String(num);
    for(i = 0; i > strr.length; i++) {
        let element = strr[i];
        let replaced = strr.replace(",", "*");
        console.log(replaced);
    }
}

multiply();

let numa = prompt("Введите число");

if(numa < 10 & numa > 0) {
    function ask() {
        let imagined = Math.random(1, );
        if(imagined == numa) {
            console.log("Вы угадали число ${imagined}");

        } else if(imagined !== numa) {
            console.log("Вы не угадали число ${imagined}, ваше число ${numa}");
        }
    }
    ask();
}

let arrr = [1,2,3];

let second = String(arrr).replace("[]", " ")
console.log(String(arrr) +=second);

function doubleArr() {
    let second = String(arrr).replace("[]", " ")
    console.log(String(arrr) +=second);
}

doubleArr();

let strFor = "SomeTestString";

function space() {
    let divided = strFor.split(" ");
    console.log(divided);
}

space();

let strt = prompt("Введите строку");

function reverseString() {
  if(typeof(strt) == "string") {
    let strSave = "";
    for(let i = strt.length; i >=0; i--) {
        strSave += strt[i];
    } console.log(strSave);
  } else {
    console.log("Стройка не найдена")
  }
}

reverseString();


let numm = prompt("Введите число");
let numStr = Number(numm);

function getArray() {
    if(numStr > 0 & numStr < 10 ) {
        for(; numStr < 10; numStr++) {
            console.log(numStr);
        }
    } else {
        console.log("Число не подходит");
    }
}

getArray();


function nechet(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    let oddNumbers = [];
    for (let ele of arr) {
        if (ele % 2) {
            oddNumbers.push(ele);
        }
    }
    console.log(oddNumbers);
}

nechet();

function factorial(chis = prompt("Введите число")) {
    let chis1 = Number(chis);
    if(typeof chis1 == 'number' && !isNaN(chis1)) {
     let save = 1;
     for (let i = 1; i < chis1; i++) {
         save *= i;
        }
     return save;
    } else {
        alert("Не являеться числом");
    }
}

factorial();


function checking(userD = {
    name: "Denis",
    age: "29",
    gender: "male"
}) {
    if(userD.name === "Deni" & userD.age == "29" & userD.gender == "male") {
    console.log("Все данные верны!");
   } else {
    userD.name = "Ivan";
    userD.age = "20";
    userD.gender = "male";
   }
   console.log(userD);
}

checking();