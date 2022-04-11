// important array methods
// forEach
const numbers = [4, 2, 5, 8];
function multiplyBy2(number, index) {
    console.log("index is", index, `and ${number} * 2 = number * 2`);
}
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);
// multiplyBy2(numbers[2],2);
// multiplyBy2(numbers[3],3);
// for (let i = 0; i < numbers.length; i++) {
//     multiplyBy2(numbers[i], i);
// }
numbers.forEach(multiplyBy2);
const users = [
    { firstName: "vansh", age: 19 },
    { firstName: "sambhav", age: 17 },
    { firstName: "ishika", age: 17 },
    { firstName: "radhika", age: 16 }
]
// users.forEach(function (user) {
//     console.log(user.firstName);
// });
users.forEach((user) => {
    console.log(user.firstName);
    console.log(user.age);
});