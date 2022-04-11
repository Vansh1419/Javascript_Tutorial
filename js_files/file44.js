// Functions
// function singHappyBirthday() {
//     console.log("happy birthday to you")
// }
// singHappyBirthday();

// function addTwo(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));

// function isEven(num1) {
//     if (num1 % 2 === 0) {
//         return true;
//     }
//     return false;
// }
// console.log(isEven(0));

// function firstCharacter(anyString) {
//     return anyString[0];
// }
// console.log(firstCharacter("vansh"));

function searchInArray(anyArray, num) {
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] === num) {
            return i;
        }
    }
    return -1;
}
console.log(searchInArray([1, 2, 5, 6, 4], 5));