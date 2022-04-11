// intro to arrays 
// Arrays are reference type

// how to create arrays
// Ordered collection of items
let fruit = ["mango", "orange", "apple", 323, 44.5];
// Index:       0         1        2      3    4
// console.log(fruit);
// console.log(fruit[0]);

fruit[1] = "grapes"; // changing the array 
console.log(fruit);
console.log(typeof fruit);
console.log(Array.isArray(fruit));

let obj = {}; // object literals

console.log(typeof obj);
console.log(Array.isArray(obj));

// array indexing
