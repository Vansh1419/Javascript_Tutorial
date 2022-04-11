// undefined

let firstName;
console.log(typeof firstName);

// var firstName;
// console.log(typeof firstName);


// const firstName; // const cannot be left undefined 
// console.log(typeof firstName);

firstName = "vansh";
console.log(typeof firstName);


// null
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);// gives object and it is bug

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
let myNum1 = BigInt(71232743286932473763949349);
console.log(typeof myNum1, myNum1);
let myNum2 = BigInt(23);
console.log(typeof myNum2, myNum2);
let myNum3 = 12n;
console.log(typeof myNum3, myNum3);

// We can only do operations like add subtract etc if and only both numbers are BigInt or Int.
// BigInt (+ - / * ** ) BigInt (valid)
// Int (+ - / * ** ) Int (valid)
// BigInt (+ - / * ** ) Int (invalid)
// Int (+ - / * ** ) BigInt (invalid)