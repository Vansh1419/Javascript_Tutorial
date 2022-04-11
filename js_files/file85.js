// more about prototype
// let numbers = [1, 2, 3];
// Here all function we get as suggestion are getting us from prototype ie numbers act as function

// internal creation of array
let numbers = new Array(1, 2, 3);
// console.log(Object.getPrototypeOf(numbers));
// console.log(Array.isArray(Array.prototype));// true
// console.log(numbers);

function hello(){
    console.log("hello log");
}
console.log(hello.prototype);
hello.prototype=[];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);
