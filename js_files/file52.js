// rest parameters
// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }
// myFunc(2, 3, 4, 5, 6, 7, 8, 9);

function addAll(...numbers) {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(addAll(1, 2, 3, 4));