// array destructring

const myArray = ["value1", "value2", "value3", "value4", "value5"];

// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log("value of my myVar1",myVar1);
// console.log("value of my myVar2",myVar2);

// let myNewArray=myArray.slice(3);

let [myVar1, , myVar2, ...myNewArray] = myArray;
console.log("value of my myVar1", myVar1);
console.log("value of my myVar2", myVar2);
console.log("value of my myNewArray", myNewArray);