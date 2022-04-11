
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1===array2);

let array1 = ["item1", "item2"];
// how to clone array
// how to concatenate two arrays
 
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);

// // new way
// let array2 = [...array1];// spread operator

// console.log(array1 === array2);
// array1.push("item4");
// console.log(array1);
// console.log(array2);
// let array2 = [].concat(array1, ["item_n", "item_m"]);
// let array2 = array1.slice(0).concat(["item_n", "item_m"]);
let array2 =[...array1,"item_n","item_m"];
console.log(array1 === array2);
array1.push("item4");
console.log(array1);
console.log(array2);

