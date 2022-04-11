// small warning
const person1 = {
    firstName: "vansh",
    age: 8,
    about: function () {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
// donot do this mistake
// person1.about();
const myFunc = person1.about;
myFunc();// gives undefined undefined as it not calls function, it just declares it.