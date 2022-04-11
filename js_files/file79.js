// solution using object.create
const userMethods = {
    about: function () {
        return `name is ${this.firstName} and age is ${this.age}`
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return "tarara ra";
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}
const user2 = createUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
console.log(user2);
console.log(user2.__proto__);
console.log(user2.is18());
console.log(user2.about());