// What happen to function declaration?
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction() {
    console.log("this is my function");
}

var firstName = "vansh";
var lastName = "jain";
var fullName = firstName + " " + lastName;
console.log(fullName);
// global execution context adds to stack memory
// 1. Creation phase/ Global memory
// window = {}
// this = windows
// firstName = undefined
// lastName = undefined
// fullName = undefined
// myFunction

// Code Execution Phase
// 1. <->
// 2. <->
// 3. myFunction -> print complete function
// 4. fullName -> undefined
// 11. firstName -> vansh
// 12. lastName -> jain
// 13. fullName -> vansh jain