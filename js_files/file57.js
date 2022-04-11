// map method
const numbers = [3, 4, 6, 1, 8];
// const square = function (nummber) {
//     return nummber ** 2;
// }
// const sqaureNumber = numbers.map(square); //map always form new array
// console.log(sqaureNumber);// In map function it is important to return otherwise it will make array of undefined

const sqaureNumber = numbers.map((number, index) => {
    return `index: ${index} , ${number ** 2}`;
});
console.log(sqaureNumber);

const users = [
    { firstName: "vansh", age: 19 },
    { firstName: "sambhav", age: 17 },
    { firstName: "ishika", age: 17 },
    { firstName: "radhika", age: 16 }
]
const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);