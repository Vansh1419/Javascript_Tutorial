// Maps
// maps are iterable

// store key value pair (like objects)
// duplicate key are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like arrray, number, string

// object literals
// key -> string (99%)
// key -> symbol
// const person = {
//     firstName: "vansh",
//     age: 7
// }
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair

const person = new Map();
person.set('firstName', 'vansh');
person.set('age', 7);// using maps we can set our key as any datatype
person.set(1, 'one');
person.set([1, 2, 3], 'oneTwoThree');

// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.keys());

// for (let key of person.keys()) {
//     console.log(person.get(key), typeof key);
// }

for (let [key, value] of person) {
    console.log(key, value);
    console.log(Array.isArray(key));
}

// const person2=new Map([['firstName', 'Vansh Jain'],['age', 8]]);
// console.log(person2);

const person1 = {
    id: 1,
    firstName: "vansh1"
}// add more info using maps somewhere else
const newPerson1 = new Map();
newPerson1.set(person1, { age: 8, gender: "male" });
// console.log(newPerson1);
// If we only want person1 id, age, gender
console.log(person1.id);
console.log(newPerson1.get(person1).age);
