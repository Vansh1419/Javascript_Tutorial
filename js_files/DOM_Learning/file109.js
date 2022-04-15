// get multiple elements by getElementById 
// get multiple elements by querrySelector

const navItems=document.getElementsByClassName("nav-item");
console.log(navItems)// gives a html collection which is array type
console.log(navItems[0])
const navItems1=document.querySelectorAll("nav-item");
console.log(navItems1)// gives a nodelist which is array like object
console.log(navItems1[0])