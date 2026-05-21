// Q 1. Javascript statement that reverses a string supplied to it

//  const greeting = "Hello"

//  let str = "Hello"; let reversed = str.split("").reverse("").join("");

// console.log(reversed); // "olleH";



//   // Q 3. An if statements that checks a variable and prints out remarks



//  const score = 100;

//   if(score >= 70 & score <= 100) {
//  console.log("Excellent");
//  }


// const score =100

//    if(score >= 60 & score <= 69);
//    console.log("Very good");
        

//   const score = 100;

//  if(score >= 50  & score <= 59);
//   console.log("Good");


//   const score = 100;
 
// if(score >= 40 & score <= 49);
// console.log("Poor");

    
//   const score = 100;

//  if(score >= 0 & score <= 39);
//  console.log("Very poor");


// const score = 100

// if(score >= 0 & score <= 100);
// console.log("Invalide score");



// Q 2. SHORT NOTES ON DATA TYPES AND 3 METHODS EACH
//  A. STRINGS DATA TYPE
//  Strings are text in javascript.they are immutable and written in quotes "", '', or backticks ```.
//   3 COMMON METHODS;
//  1: toUpperCase()- converts string to uppercase. "hi". toUpperCase() = "Hi"
//  2: slice(start, end) - extracts part of the string. "Hello" .slice(0, 2) = "He"
//  3: includes(substring) - checks if substring exists. "Hello" .("lo") = true

//  B. NUMBER DATA TYPE
//  Numbers represent both integers and decimals in javascript. There's no seperate float type.
//   3 COMMON METHODS
//   1: toFixed(n) - rounds to n decimal places. 3.14159.toFixed(2) = "3.14"
//   2: parselnt(sting) - converts string to integer.parselnt("42") = 42
//   3: isNAN(value) - checks if value is Not a Number. isNaN("abc") = true



// AND
// OR
// NOT

// EQUAL to
// And truth table                           
// Input                                     Output
// True && True                              True
// True && False                             False
// False && True                             False
// False && False

// Logical OR Operator (||) pipe 

// or truth table
// Input                         Output
// True || True                  True
// True || False                 True
// False || True                 True
// False || False                False


// For AND OPERATOR &&( The two statement must be true for it to print true)
// if(a > 3) {
//   console.log("True statement");
// }

// if(a > 3 && a == 5 && a < 10){
//   console.log("True statement");
// }

// // FOR OR OPERATOr(once of the the statement is true its must print true except if all the statements are false)
// let a = 5;

// if(a > 3 || a == 14 || a < 10) {
//     console.log("True statement");
// }

// Logical AND Operator (&&) ampersand
// Logical OR  Operator(||) pipe
// Logical NOT Operator(|) exclamation mark

// FOR NOT OPERATOR( makes a false statement true bcu of the exclamation mark)

// if(!(a > 3)) {
//     console.log("True statement");
// }

// Equal to comparison operator(==)

// let a = 5;

// let b = "5";

// if(a == b) {
//     console.log("True statement")
// }
// // Strictly equal to comparison operator(===)

// let a = "5";

// let b = "5";

// if(a === b) {
//     console.log("True statement");
// }
// Not equal to comparison operator(!=)
// Strictly not equal to comparison operator(!==)

//  let a = 5;

// let b = "5";

// if(a !== b) {
//     console.log("True statement");
// }

// Greater than comparison operator
// Greater than or equal to comparison operator

// let a = 5;

// if(a >= 5) {
//     console.log("True statement");
// }


// Less than comparison operator
// Less than or equal to comparison operator

// let a = 5;

// if(a <= 5) {
//     console.log("True statement");
// }

// primitive data types in javascript
// - String
// - Number
// - Boolean
// - Null
// - Underfined
// - Symbol (ES6)

// let username = "Jeremaiah"; // String
// let age =  30; // Number
// let isStudent = true; // Booleans
// let address = null; // Null
// let phoneNumber; // Undefined
// let uniqueId = Symbol("id"); // Symbol

// console.log(typeof username); // Output: string
// console.log(typeof age); // Output: number
// console.log(typeof isStudent); // Output: boolean
// console.log(typeof address); // Output object(null is considered an object in javascript)
// console.log(typeof phoneNumber); // Output: undefined
// console.log(typeof uniqueId); // Output: symbol

// console.log(username.length); // Output: Amara

// console.log(username.slice(0, 2)); // Output: Amara

// console.log(username.toLowerCase()); // Output: Je

// console.log(username.toLocaleLowerCase()); // Output: Amara

// console.log(username.toLocaleUpperCase()); // Output: Amara

// console.log(30 * 2);

// console.log(30 / 2);

// console.log(30 ** 2);

// console.log(30 % 2);

// let r = 5;

// let areaOfCircle = Math.PI * r * r;

// console.log(areaOfCircle); 

// FUNCTION IS A PIECE OF CALLABLE STATEMENTS

// function sayHelloto() {
//     console.log("Jello. WORLD");
// }

// sayHelloto();

// function sayHelloto(fullname) {
//     console.log("Hello, " + fullname + "!");
// }

// sayHelloto("Amjoyfull");
// sayHelloto("Amgreat");
// sayHelloto("Amblessed");
// sayHelloto();


