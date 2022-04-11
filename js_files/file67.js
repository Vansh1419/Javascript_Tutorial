// sets(it is iterable)
// stores data
// set also have its own methods
// no index-based access
// order is not guranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1, 2, 3, 3]);
// console.log(numbers);
// console.log(numbers[2]);

const myArray = [1, 2, 3, 4];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(myArray);
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);

if (numbers.has(1)) {
    console.log("1 is present");
}

// console.log(numbers);
for (let number of numbers) {
    console.log(number);
}

const myArray2 = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueElements = new Set(myArray2);
console.log(myArray2);
console.log(uniqueElements);
let length = 0;
for (let element of uniqueElements) {
    length++;
}
console.log(length);