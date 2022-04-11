// getter and setter
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
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
console.log(person1);
// console.log(person1.fullname());

// in methods we call but in properties we donot call
// for eg if want to call person1.fullname() as property like (person1.fullname) the we can add get before where we declare function

// console.log(person1.fullname);

// Method 1 to change info
// person1.setName("sambhav", "jain");

// method 2 to change info
// person1.firstName = "sambhav";
// person1.lastName = "jain";

// Here we want if we set our fullName the it would automatically sets out firstName and lastName.
person1.fullname = "sambhav jain";
console.log(person1);
