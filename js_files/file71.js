// methods
// function inside objects
function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName: "vansh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName: "sambhav",
    age: 10,
    about: personInfo
}
const person3 = {
    firstName: "vasu",
    age: 20,
    about: personInfo
}
person1.about();//this -> person1 as it calls about()
person2.about();//this -> person2 as it calls about()
person3.about();//this -> person3 as it calls about()