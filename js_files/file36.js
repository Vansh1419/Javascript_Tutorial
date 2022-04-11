// Objects
// Objects are reference type
// arrays are good but not sufficient for real world data
// Objects store key value pair objects donot have index

// how to create objects
const person = {
    name: "Vansh",
    age: 19,
    hobbies: ["reading", "writing", "playing"]
};
console.log(typeof person, person);

// how to access data from objects
console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);


// how to add key value pair to objects
// person.gender="Male";
person["gender"] = "Male";

console.log(typeof person, person);

