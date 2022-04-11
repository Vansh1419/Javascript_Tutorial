// short syntax
const person1 = {
    firstName: "vansh",
    age: 8,
    about() {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
person1.about();