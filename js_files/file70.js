// optional chaining (?.)
const user = {
    firstName: "vansh",
    // address: { houseNumber: '150' }
}
console.log(user.firstName);
console.log(user.address?.houseNumber);
// console.log(user.address.houseNumber);// gives error ie. Cannot read properties of undefined (reading 'houseNumber')