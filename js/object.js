let obj1 = {

};    


obj1.product = "Iphone";
obj1.price = 1000;
obj1.currency = "dollar";
let details = Object.create(obj1);

console.log(obj1);

let str = "Окей";

if(str.length > 1) {
    console.log(str[str.length - 2]);
}

let time = "2025-12-31";
let obj2 = {

};

obj2.year = time.slice(0, 4);
obj2.month = time.slice(5, 7);
obj2.day = time.slice(8, 10);

console.log(obj2);