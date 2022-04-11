// new keyword
/*
function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function () {
    console.log(this) 
    console.log(this.firstName, this.age);
}
const user1 = new createUser("vansh", 7);

// new keyword do 3 word
// 1. makes empty object this = {}
// 2. return this
// 3. object.create(createUser.prototype);

// new keyword automatically set user1 default value(if not present then check) to prototype of function createUser.

// (__proto__ or [[Prototype]]) are different form prototype as prototype only gives us an empty object.__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object within a functon.
console.log(user1);
*/

// Now wee improvise file82.js
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
// Here we add userMethod object in prototype of createUser function
CreateUser.prototype.about = function () {
    return `name is ${this.firstName} and age is ${this.age}`
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "tarara ra";
};
const user2 = new CreateUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
console.log(user2);
console.log(user2.is18());
// It is convention that if the function is called using new keyword then its name's first letter should be capital.