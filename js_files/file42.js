// Objects inside array
// very useful in real world application

const users = [
    { userId: 1, firstName: "Vansh", gender: "male" },
    { userId: 2, firstName: "sambhav", gender: "male" },
    { userId: 3, firstName: "mohit", gender: "male" }
]
for (let user of users) {
    console.log(user);
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);
}