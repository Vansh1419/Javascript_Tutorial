// callback functions
function myFunc2(name) {
    console.log("inside myFunc2");
    console.log(`your name is ${name}`);
}
function myFunc(callback) {
    console.log("hello there i am a function calling another function callback()");
    callback();
}
myFunc(myFunc2);