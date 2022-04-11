// default parameters
// function addTwo(num1, num2) {
//     if (typeof num2=="undefined") {
//         num2=1;
//     }
//     return num1 + num2;
// }
function addTwo(num1, num2=1) {
    return num1 + num2;
}
console.log(addTwo(4));