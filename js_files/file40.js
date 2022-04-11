// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray=[..."abc"];
// console.log(newArray);

// spread operator in case of objects
const obj1 = {
    key1: "value1",
    key2: "value2",
}; // after property of key is overwrited by latest value of that key
const obj2 = {
    key3: "value3",
    key4: "value4",
};
console.log(obj1);
console.log(obj2);
// const newObj = {
//     ...obj1,
//     ...obj2,
//     key5: "value5",
//     key6: "value6",
// }
// const newObj = { ..."abc" };
const newObj = { ...["item1", "item2"] };
console.log(newObj);
