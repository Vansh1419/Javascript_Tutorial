// lexical environment and scope chain
const lastName = "jain";//1
const printName = function () {//2
    const firstName = "vansh";//1f
    console.log(firstName);//2f
    console.log(lastName);//3f
}
printName();//3
/*
// Memory creation phase
window = {}
this = window
lastName = unitilized
printName = unitilized

// code execution phase
1. lastName = "jain"
2. printName = function is formed
3. call a function{
    // local memory execution context
    {
        arguments = []
        firstName = unitilized
    }
    // code execution
    {
        1f. firstName = "vansh"
        2f. print firstName(vansh)
        3f. print lastName(jain)// as lastName is not found in printName then it would seek it in its parent
    }
}
*/