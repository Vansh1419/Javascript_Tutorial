// same method in base class
class Animal {
    constructor(animalName, animalAge) {
        this.animalName = animalName;
        this.animalAge = animalAge;
        return this;
    }
    eat() {
        return `${this.animalName} is eating`;
    }
}
// if we want to edit some method in the derived class the just do that it doesnot effect the parent class. for eg if we want to edit the eat() then we can do it easily in dog function as when we call tommy.eat() then it would first check in dog class iff not present the it would go for Animal class.
class dog extends Animal {
    constructor(animalName, animalAge, animalSpeed) {
        super(animalName, animalAge);
        this.animalSpeed = animalSpeed;
    }
    run() {
        return `${this.animalName} is running at speed of ${this.animalSpeed}`;
    }
    eat() {
        return `Modified eat(): ${this.animalName} is eating`
    }
}
const tommy = new dog("tommy kutta", 3, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());