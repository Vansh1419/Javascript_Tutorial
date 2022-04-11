// What is prototype?
// In javascript, the function can be treated as both function and object
function hello() {
    console.log("hello world");
}

// const hello = ["value1", "value2"];

// const hello = {
//     key1: "value1",
//     key2: "value2"
// }
// console.log(hello.name);
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty); 
// console.log(hello.prototype); // {}

// Only function provide prototype property
if (hello.prototype) {
    console.log("prototype exist");
}
else {
    console.log("prototype donot exist");
}
hello.prototype.abc = "abcd";
console.log(hello.prototype);
console.log(hello.prototype.abc);