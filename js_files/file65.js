// splice method
// (start, delete, insert)
const myArray = ["items1", "items2", "items3"];

// delete
// const deletedItem = myArray.splice(1, 1);
// console.log("deleted item ", deletedItem);

// insert
// myArray.splice(1,0,"inserted item");

// insert and delete at same time
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("deleted items", deletedItem, "& myArray is ", myArray);