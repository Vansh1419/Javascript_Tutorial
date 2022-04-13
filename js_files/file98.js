// function execution context
let foo = "foo";// 1
console.log(foo);// 2
function getFullName(firstName, lastName) { //3
    console.log(arguments);//1f
    let myVar = "var inside func";//2f
    console.log(myVar);//3f
    const fullName = firstName + " " + lastName;//4f
    return fullName;//5f
}
const personName = getFullName("vansh", "jain");//4
console.log(personName);//5
/*
// Memory creation phase
window = {}
this = window
foo = uninitilized
getFullName function stores
myVar = uninitilized
fullName = uninitilized

// Code execution phase
1. foo = "foo"
2. prints foo
3. function already stores
4. Whenever we call a function, new execution context is created called function execution context.
function execution context{

    local memory creation phase{

        array like object named arguments is formed.Here in this case they store vansh, jain.
        firstName = "vansh"
        lastName = "jain"
        myVar = unitilized
        fullName = unitilized
    }
    code execution phase{
        1f. prints arguments
        2f. myVar = "var inside func"
        3f. prints myVar(var inside func)
        4f. fullName = vansh jain
        5f. return vansh jain
    }
}
5. prints personName(vansh jain)
*/