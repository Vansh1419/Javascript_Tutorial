// use prototype
// const userMethods = {
//     about: function () {
//         return `name is ${this.firstName} and age is ${this.age}`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return "tarara ra";
//     }
// }
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}
// Here we add userMethod object in prototype of createUser function
createUser.prototype.about = function () {
    return `name is ${this.firstName} and age is ${this.age}`
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return "tarara ra";
};
const user2 = createUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
console.log(user2);
console.log(user2.__proto__);
console.log(user2.is18());
console.log(user2.about());
console.log(Array.isArray(createUser.prototype));// It is a object not array