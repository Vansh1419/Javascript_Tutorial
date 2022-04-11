// Primitive vs Reference datatypes
let num1 = 6;
let num2 = num1;
console.log("The value of num1 is ", num1);
console.log("The value of num2 is ", num2);
num1++;
console.log("After incrementing num1");
console.log("The value of num1 is ", num1);
console.log("The value of num2 is ", num2);

// Reference types
// arrays
let arr1 = ["item1", "item2"];
let arr2 = arr1;
console.log("The value of arr1", arr1);
console.log("The value of arr2", arr2);
arr1.push(3);
console.log("After pushing element to an array");
console.log("The value of arr1", arr1);
console.log("The value of arr2", arr2);