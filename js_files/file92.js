// compilation
// code execution

// why compilation


// How javascript code executes

// What is global execution context?
// What is local execution context?
// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "vansh";
/*
In javaScript code first compile and then executed
Compilation phase Has 3 steps:
1. Tokenizing/Lexing: In this steps our code is broken into small parts named as tokens
2. Parsing: Understand the token, forms abstract syntax tree (ASI) which makes 
executable file.
3. Code generation

According to ECMA official documentation, there is no talk about compilation but
early error checking and determination of scope of variables is done.

Code Execution: In JavaScript code erecuted inside eecution context.it is of two types:
1. Global execution context
2. Local execution context
*/ 