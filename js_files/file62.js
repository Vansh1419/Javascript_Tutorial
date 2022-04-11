// every method
const numbers = [2, 4, 6, 8, 10];
function isEven(number) {
    return number % 2 === 0;
}
const ans = numbers.every(isEven);
// callback function ---> true / false (boolean)
// every method ---> true / false (boolean)
console.log(ans);

const userCart = [
    { productId: 1, productName: "mobile1", price: 12000 },
    { productId: 2, productName: "mobile2", price: 11000 },
    { productId: 3, productName: "mobile3", price: 13000 },
];
const check = userCart.every((everyProduct) => everyProduct.price < 30000);
console.log(check);