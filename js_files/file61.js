// find method
const myArray = ["hello", "cat", "dog", "lion"];
function isLength(string) {
    return string.length === 3;
}

// console.log(isLength("door"));
const ans = myArray.find(isLength);// Only talks about first occurance
console.log(ans);

const users = [
    { userId: 1, userName: "vansh" },
    { userId: 2, userName: "sambhav" },
    { userId: 3, userName: "ishika" },
    { userId: 4, userName: "radhika" },
    { userId: 5, userName: "vrinda" },
]
const myUser = users.find((user) => {
    return user.userId === 3;
});
console.log(myUser, myUser.userName);