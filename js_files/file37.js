// difference between dot and bracket notation
const key = "email";
const person = {
    name: "Vansh",
    age: 19,
    "person hobbies": ["reading", "writing", "playing"]
};
console.log(person["person hobbies"]); // cannot do using dot operator

// person.key="vansh@gmail.com";
// console.log(person); 
// person["key"]="vansh@gmail.com";
// console.log(person); 
person[key] = "vansh@gmail.com";
console.log(person); 