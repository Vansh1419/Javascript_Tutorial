// class practice
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
const animal1 = new Animal("lion", 20);
console.log(animal1);
// If we want to make another class having property of previous class
class dog extends Animal {

}// Now dog have all the property of Animal
const animal2 = new dog("GERMAN SHEPHAD", 2);
// we can say that dog class is subclass an Animal is parent class
console.log(animal2);
console.log(animal2.eat());