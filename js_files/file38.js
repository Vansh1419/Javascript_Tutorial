// how to itrate objects

const person = {
    name: "Vansh",
    age: 19,
    "person hobbies": ["reading", "writing", "playing"]
};

// for in loop
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// Object.keys
console.log(Object.keys(person));// gives array
for(let key of Object.keys(person)){
    console.log(person[key]);
}
