// Are let and const are hoisted?

// console.log(firstName);
// console.log(typeof firstName);// gives undefined

let firstName = "vansh";
// it is necessary to initilize const but not necessery for let to be 
// initilized. if we not ititilize in let then the variable automatically 
// stores undefined.

console.log(firstName);

// Creation phase
// window = {}
// this = window
// firstName = uninitialized(in case of let and const)

// code execution phase
// 2. Error (Cannot access 'firstName' before initialization)
// 4. firstName = "vansh";
// 5. print vansh

/* TDZ -> Temporal Dead Zone
firstName is first not initilized and then it is initilized with vansh.
    But before it is initilized, it is in TDZ.
*/ 