// call, apply and bind method
function info(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "vansh",
    age: 6
}
const user2 = {
    firstName: "mohit",
    age: 10,
}

// call
// info.call();// Here no this is available gives output as undefined undeifned
// info.call(user2, "guitar", "mozat");// Here user2 act as this ehich borrow about function from user1

// Apply
info.apply(user2, ["guitar", "mozat"]);

// bind
const func = info.bind(user1, "guitar1", "mozat1");
func();