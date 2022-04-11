// arrow function and this
const person1 = {
    firstName: "vansh",
    age: 8,
    about: () => {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
person1.about();
// Arrow function takes this form its surrounding. we cannot change this of arrow function. Here this is window.