// lexical scope
function myApp() {
    const myVar = "value1";
    function myFunc1() {
        // const myVar = "value2";
        console.log("inside myFunc1", myVar);
    }
    const myFunc2 = () => {
        console.log("inside myFunc2");
    }
    const myFunc3 = function () {
        console.log("inside myFunc3");
    }
    console.log(myVar);
    myFunc1();
    console.log(myVar);
}
myApp();
/*
In lexical scope every line runs in such a way that it would find in its scope, if not found then it would go further beyond. For eg. As myVar is not available in myFunc1() then it would check for myVar in myApp() if it not found it might go further.
*/