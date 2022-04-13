// Make a function which is called only once otherwise throw error
function func() {
    let counter = 0;
    return function () {
        if (counter === 0) {
            console.log("called first time")
            counter++;
        }
        else {
            console.log("already called")
        }
    }
}
const myFunc = func();
myFunc();
myFunc();
const myFunc1 = func();
myFunc1();
myFunc1();

