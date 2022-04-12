// Hoisting in expression function
console.log(myFunction);

var myFunction = function () {
    console.log("this is my function");
}
console.log(myFunction());
// Creation phase
// window = {}
// this = window
// myFunction = undefined