/** Array.of() */
const digits = Array.of(1,2,3,4,5,6,7);
console.log(digits);  //[1,2,3,4,5,6,7]


/** Array.find() */
const array = [1,2,3,4,5];

let found = array.find(e => e > 3); //array 원소중 3보다 큰 첫번째 원소를 반환
console.log(found);  // 4


/** Array.find() */
const greeting = ["hello", "hi", "byebye", "goodbye", "hi"];

let foundIndex = greeting.findIndex(e => e === "hi"); 
console.log(foundIndex);  // 1


/** Array.some & Array.every() */
const array2 = [1,2,3,4,5,6,1,2,3,1];
let arraySome = array2.some(e => e > 7);
console.log(arraySome);   //true

let arrayEvery = array2.every(e => e > 2);
console.log(arrayEvery);   //false

