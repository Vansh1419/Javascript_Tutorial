// reduce 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);
console.log(sum);
// accumulator currentValue return
//     1            2         3
//     3            3         6
//     6            4        10
//    10            5        15 

const userCart = [
    { productId: 1, productName: "mobile1", price: 12000 },
    { productId: 2, productName: "mobile2", price: 11000 },
    { productId: 3, productName: "mobile3", price: 13000 },
];
const grandTotal = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price
}, 0);
console.log(grandTotal);