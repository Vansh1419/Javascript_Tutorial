// functon inside function
const app = () => {
    const myFunc = () => {
        console.log("hello guys");
    }
    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    console.log("inside app");
    myFunc();
    console.log(addTwo(2, 2));
}
app();