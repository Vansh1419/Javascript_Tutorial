// hasOwnProperty
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
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
for (let key in user2) {
    if (user2.hasOwnProperty(key)) {
        console.log(key);
    }
}