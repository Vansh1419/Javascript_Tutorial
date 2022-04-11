// static method and properties
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return `this is person class`;
    }
    static desc = "static property";// Static property
    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullname(fullName) {
        const [firstName, lastName] = fullName.split(" ");// Here it checks the fullName and splits where it found " ". In this case, it stores fullName as ["sambhav","jain"] and then use destructuring.
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("vansh", "jain", 19);
console.log(person1.firstName);
// console.log(person1.classInfo);//gives undefined
console.log(Person.classInfo());
// static methods can be called directly on the class. there is no need to make objects to call them
console.log(Person.desc);