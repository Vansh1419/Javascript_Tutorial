// intro to closures

// function can return function
// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello world");
//     }
//     return innerFunction();
// }
// outerFunction();


function printFullName(firstName, lastName) {
    function innerFunction() {
        console.log(firstName, lastName);
    }
    return innerFunction();
}
printFullName("vansh", "jain");
