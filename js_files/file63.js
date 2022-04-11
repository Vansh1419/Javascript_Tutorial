// some method
const numbers = [3, 5, 8, 9];
//kya ek bhi number esa hai jo even ho toh return true
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);

const userCart = [
    { productId: 1, productName: "mobile1", price: 12000 },
    { productId: 2, productName: "mobile2", price: 11000 },
    { productId: 3, productName: "mobile3", price: 130000 },
];
const check = userCart.some((product) => product.price > 100000);
console.log(check);