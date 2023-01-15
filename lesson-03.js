"use stric"
function devide() {
	console.log('----------------------------------------');
}

//Task1
//let products = [];
let products = ['apple', 'orange'];

console.log("Array: " + products);
if (products.length>0) {
    console.log("Last element array: " + products[products.length-1]);}
    else {
    console.log("Array is empty");
}

devide();
//Task2

let styles = ['Jass', 'Blues'];
console.log("Array:" + styles);

styles.push('Rock-n-Roll');
console.log("Array:" + styles);

styles.splice (styles.length-2,styles.length-2,"Classic");
console.log("Array:" + styles);

removed = styles.shift();
console.log("Removed: " + removed);
console.log("Array:" + styles);

styles.unshift('Rap', 'Reggi');
console.log("Array:" + styles);

devide();
//Task3

function find (arr, value){
let finder = false;

for (let i = 0; i < arr.length; i++){
    if (arr[i] == value ){
        console.log (`Index of value "${value}" is ` + i);
        finder = true;
        }
 }
if (!finder) {
        console.log (`Index of value "${value}" is -1 `);
         }
 }

let arr = ['Apple',' Orange','Cherry','Apple',' Orange','Cherry'];
find(arr,"Cherry");

devide();
//Task4
//4.Створіть функцію filterRange(array, a, b), яка приймає масив чисел array
//і повертає новий масив, який містить тільки числа з array в діапазоні від a до b.

function filterRange(array, a, b){
let index1, index2;

for (let i = 0; i < array.length; i++){
    if (array[i] <= a ){
        index1 = i;
        }
    if (array[i] <= b ){
        index2 = i;
         }
     }
console.log(array.slice(index1,index2+1));
}

let array = [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15];
filterRange(array, 4, 12);

devide();


//Task5

function camelize(str) {

arr = str.split("-");
let newstr = arr[0];
for (let i = 1; i < arr.length; i++){
    word = arr[i];
    newstr = newstr + word[0].toUpperCase() + word.slice(1);
}
console.log(newstr);
}

let str = "my-short-string";
camelize(str);