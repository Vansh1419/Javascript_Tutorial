// document.createElement()
// append
// prepend
// remove

// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Student");
// newTodoItem.textContent = "Teach Student 1";
// // console.log(newTodoElement);
// // newTodoItem.append(newTodoItemText);
// // todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// before
// after
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Student 1";
// todoList.before(newTodoItem);
todoList.after(newTodoItem);