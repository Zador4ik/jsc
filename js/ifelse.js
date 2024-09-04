let okk = "hidden";

if(okk == "hidden"){
    okk = "visible";
} else {
    okk = "hidden";
}

let numm = -5;

if(numm == 0) {
    numm = 1;
}

if(numm < 0) {
    numm = "less than zero";    
}

if(numm > 0) {
    numm *= 10;
}
console.log(numm);


let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if(car.age > 5) {
    console.log("Need repair");
    car.needRepair = true;
    console.log(car);
} else {
    car.needRepair = false;
}

let product = {
    namee: "Яблоко",
    price: "10$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена
priceProduct = parseInt(product.price);

if(priceProduct > min || priceProduct == min || priceProduct < max || priceProduct == max) {
    console.log(product.namee);
} else {
    console.log("Товаров не найдено");
}