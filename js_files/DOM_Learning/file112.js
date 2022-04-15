// DOM tree transversing
const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode)
// console.log(htmlElementNode.childNodes)// NodeList(3) [ head, #text, body ]
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
console.log(textElementNode);
// console.log(bodyElementNode);
// Parent node
console.log(headElementNode.parentNode);
// sibling relation ship
console.log(headElementNode.nextSibling);// #text
console.log(headElementNode.nextSibling.nextSibling);// body
console.log(headElementNode.previousSibling);// null


console.log(headElementNode.textContent);
console.log(headElementNode.nextElementSibling);// does not give text nodes directly gives next element node

const container = document.querySelector(".container")
console.log(container.childNodes)// NodeList(5) [text, h1, text, p, text]
console.log(container.children)// HTMLCollection(2) [h1, p]
// given h1 tag we have to go to its parent node and change color
const h1TagNode = document.querySelector("h1");//h1
h1TagNode.parentNode.style.color = "white";// h1's parent -> container
//   h1 parent   color change 
h1TagNode.parentNode.style.backgroundColor = "grey";// h1's parent -> container
h1TagNode.parentNode.parentNode.style.backgroundColor = "orange";// container's parent -> body
