"use strict"
// this keyword
// console.log(this);
// this === window
function myFunc() {
    console.log(this);
}
// myFunc();// gives undefined on using strict mode
window.myFunc();
