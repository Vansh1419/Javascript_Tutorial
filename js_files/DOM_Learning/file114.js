// Add HTML element using JavaScript

// innerHTML to add html element
const todoList = document.querySelector(".todo-list")
// console.log(todoList.innerHTML)
// todoList.innerHTML= "<li>New ToDo </li>";
todoList.innerHTML += "<li>New ToDo </li>"
todoList.innerHTML += "<li>New ToDo 1 </li>"

// ehwn you want to add new html use it but donot use it to add element