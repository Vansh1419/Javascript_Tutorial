// global execution scope
console.log(this);// ->1
console.log(window);// ->2
console.log(firstName);// ->3
var firstName = "vansh";// ->4
console.log(firstName);
/*
Global execution context has different phases
1. Creation phase
a. Before execution of 4 varible firstName = undefined(in case of var) is created.
        firstName = undefined
b. this = window (object provided by browser)

2. Code Execution phase

JavaScript is a syncronous and single threaded
*/ 