// block and function scope
// let and const are block scope
// var is function scope 
console.log(firstName);
{
    let firstName = "Mohit";
    // const firstName = "Mohit";
    // var firstName = "Mohit";
    console.log(firstName);
}
console.log(firstName);