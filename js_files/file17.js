// nested if else
let winningNum = 19;
let user = +prompt("Guess a number");
if (user === winningNum) {
    console.log(winningNum);
} else {
    if (user > winningNum) {
        console.log("your guess is big");
    }
    else {
        console.log("your guess is small");
    }
}