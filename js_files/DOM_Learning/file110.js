// loops in elements(iterables)
// let us imagine we want all elements having classname nav-items is green
// let navItems = document.getElementsByTagName("a");
// using simple loop
// for (let i = 0; i < navItems.length; i++) {
//     navItems[i].style.backgroundColor = "white";
//     navItems[i].style.color = "black";
//     navItems[i].style.fontWeight = "bold";
// }
// using forof loop
// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }
// console.log(Array.isArray(navItems))
// we cannot use foe each loop but by transforming it into array we cam do so.
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems))
// using foreach loop
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// });

let navItems = document.querySelectorAll("a");
// using simple loop
// for (let i = 0; i < navItems.length; i++) {
//     navItems[i].style.backgroundColor = "white";
//     navItems[i].style.color = "black";
//     navItems[i].style.fontWeight = "bold";
// }

// using forof loop
// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

// using foreach loop
navItems.forEach(navItem => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "black";
    navItem.style.fontWeight = "bold";
});