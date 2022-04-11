// sort method
const numbers = [5, 9, 1200, 400, 3000];
numbers.sort((a, b) => {
    return a - b;//For assending order
    // return b-a;//For descending order
}); //Mutate original array. In javascript it will first change them into strings like ["5","9","1200","400","3000"] and the sort using ASCII table
console.log(numbers);
// Advantage of sort is that it will organise our string in dictionary format where capital letter stores first ie. 'Z' store first than 'a'
// for numbers

// 1200,400
// a-b ----> 800(positive)----> b,a

// 400,1200
// a-b ---->-800(negative)---->a,b

// Price lowToHigh & highToLow
const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 500 },
    { productId: 3, productName: "p3", price: 600 },
    { productId: 4, productName: "p4", price: 6500 },
    { productId: 5, productName: "p5", price: 3600 },
]
// lowToHigh
const newProducts1 = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(newProducts1);
// lowToHigh
const newProducts2 = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(newProducts2);