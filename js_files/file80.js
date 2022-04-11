const obj1 = {
    key1: "value1",
    key2: "value2"
}
// __proto__

// official ecmascript documentation

// [[prototype]]
// __proto__ and [[prototype]] are same


const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2);
console.log(obj2.__proto__);
console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2.key3);
// If the key is not present in the object then we would search that key in its __proto__. Object.create help us to set obj1 as __proto__ of obj2.