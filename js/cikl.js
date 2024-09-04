let str = "easycode";

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let charUp = char.toUpperCase();
    console.log(charUp);

}

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}

for(let item in list) {
    if(typeof list[item] === "string") {
       let output = list[item].toUpperCase();
       console.log(output);
    }
}


let arrNum = 12345;
let summ = 0;
let strNum = String(arrNum);

for (let index = 0; index < strNum.length; index++) {
    const element = strNum[index];
    let elementNum = parseInt(element);
    summ += elementNum;
}
console.log(summ);


let numArr = [1, 2, 3,];
let numArr2 = [,4, 5, 6];

console.log([String(numArr) + String(numArr2)]);


let strFor = "ок";

let strFor0 = Number(strFor);

if (typeof strFor0 === "number") {
    let zeroEx = strFor.indexOf("0");
let zeroFound = strFor.indexOf("0", zeroEx+2);
console.log(zeroFound);
} else {
    console.log("Не найдено число");
}




