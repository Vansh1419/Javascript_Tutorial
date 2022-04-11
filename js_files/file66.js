// iterables
// jinpe hum for of loop laga sakte hein
// strings, arrays are iterable
const firstName="vansh";
for (let char of firstName) {
    console.log(char);
}
const items=["item1","item2","item3"];
for (let item of items) {
    console.log(item);
}
// const users={key1:"value1",key2:"value2",key3:"value3"};// objects are not iterable
// for (let key of users) {
//     console.log(key);
// }

// array like object
// jinke pas length propety hoti hai
// aur jinko hum index se acess kar sakte hein
// foe eg. strings