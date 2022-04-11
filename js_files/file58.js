// filter method
const numbers = [1, 3, 2, 6, 4, 8];
const isEven = function (number) {
    return number % 2 === 0;
}
const evenNumber = numbers.filter(isEven);//Adds only when isEven gives true value, filter function always return true and false
console.log(evenNumber);
