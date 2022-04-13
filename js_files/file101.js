// Analysis of closure
function printFullName(firstName, lastName) {//1
    function printName() {//1f1
        console.log(firstName, lastName);//1f2
    }
    return printName;//2f1
}
const ans = printFullName("vansh", "jain");//2
ans();//3
/*
// Memory creation phase
window = {}
this = window
printFullName function is present
ans = unitilized
 
// code execution phase
1. function printFullName is already stored in the memory
2. function execution context{
    // local memory creation phase
    {
        arguments = [vansh, jain]
        firstName = "vansh"
        lastName = "jain"
        printName function is present
    }
    // code execution phase
    {
        1f1. printName function is alraedy present
        2f1. return printName() function means now ans has printName, firstName, lastName.
    }
}
3. function execution context{
    // local memory creation phase
    {
        arguments = {}
    }
    // code execution phase
    {
        // when a function is returned form a function then it takes the local memory of that 
        // function
        1f2. prints vansh jain

    }
}
*/