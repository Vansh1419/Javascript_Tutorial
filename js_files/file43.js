// nested destructuring
const users = [
    { userId: 1, firstName: "Vansh", gender: "male" },
    { userId: 2, firstName: "sambhav", gender: "male" },
    { userId: 3, firstName: "mohit", gender: "male" }
]
const [{ firstName: user1FirstName }, , { gender }] = users;
console.log(user1FirstName);
console.log(gender);