// super keyword
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
// if we want to add more parameter for example if we want to add the speed of dog then we use keyword 'super'
class dog extends Animal {
    constructor(animalName, animalAge, animalSpeed) {
        super(animalName, animalAge);
        this.animalSpeed = animalSpeed;
    }
    run() {
        return `${this.animalName} is running at speed of ${this.animalSpeed}`;
    }
}
const tommy = new dog("tommy kutta", 3, 45);
console.log(tommy);
console.log(tommy.run());