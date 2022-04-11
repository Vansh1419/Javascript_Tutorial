// parameter destructuring
// objects
// extensive use in reactJs 
const person = {
    firstName: "vansh",
    gender: "male"
}
// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
function printDetails({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
}
printDetails(person);