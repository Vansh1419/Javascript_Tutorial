// create functions to create multiple objects
const user = {
    firstName: "vansh",
    lastName: "jain",
    email: "vanshjain1421@gmail.com",
    age: 2,
    address: "house Number, colony",
    about: function () {
        return `name is ${this.firstName} and age is ${this.age}`
    },
    is18: function () {
        return this.age >= 18;
    }
}

// function(that function create object)
// add key value pair
// object ko return krega

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `name is ${this.firstName} and age is ${this.age}`
    };
    user.is18 = function () {
        return this.age >= 18;
    };
    return user;
}
const user2 = createUser("sambhav", "jain", "sambhavjain@gmail.com", 4, "ghar mein");
console.log(user2);
console.log(user2.is18());
console.log(user2.about());