// Class keyword

// class are fake
/*
Here class CreateUser is doing the same thing as done fu the function CreateUser
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    return this;
}
CreateUser.prototype.about = function () {
    return `name is ${this.firstName} and age is ${this.age}`
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "tarara ra";
};*/
class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("CreateUser is called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `name is ${this.firstName} and age is ${this.age}`
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "tarara ra";
    }
}
const user2 = new CreateUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
// class cannot be called without new keyword.
console.log(user2);
console.log(Object.getPrototypeOf(user2));
console.log(user2.is18());