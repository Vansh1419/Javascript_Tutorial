// Store methods in different groups
const userMethods = {
    about: function () {
        return `name is ${this.firstName} and age is ${this.age}`
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}
const user2 = createUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
console.log(user2);
console.log(user2.is18());
console.log(user2.about());