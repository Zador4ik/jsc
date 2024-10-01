//Зная структуру html, с помощью изученных методов получить (в консоль):
//1. head
//2. body

let head1 = document.head;
let body2 = document.body;


let hii = document.body.children;

/// 3. все дочерние элементы body и вывести их в консоль

// первый div и все его дочерние узлы

let divFind = document.body.children[0];

let divFind1 = document.body.divFind.children[0, -1];


///// ------------------------------------------------------------------------- now working with file1.html


// Найти элемент, который находится перед и после списка ul
let beforeul = document.body.children[1].previousSibling;
let afterul = document.body.children[1].nextSibling;

// Посчитать количество элементов li в списке
let countLi = document.body.children[1].getElementsByTagName("li").length;