// Q 1. Javascript statement that reverses a string supplied to it

//  const greeting = "Hello"

//  let str = "Hello"; let reversed = str.split("").reverse("").join("");

// console.log(reversed); // "olleH";


// Q 2. SHORT NOTES ON DATA TYPES AND 3 METHODS EACH
//  A. STRINGS DATA TYPE
//  Strings are text in javascript.they are immutable and written in quotes "", '', or backticks ```.
//   3 COMMON METHODS;
//  1: toUpperCase()- converts string to uppercase. "hi". toUpperCase() = "Hi"
//  2: slice(start, end) - extracts part of the string. "Hello" .slice(0, 2) = "He"
//  3: includes(substring) - checks if substring exists. "Hello" .("lo") = true

//       Data Types 
//       Strings: stores Text, immutable

//       let name = "Amara";

//       console.log(name.toUppercase()); // "AMARA"
//       console.log(name.slice(0, 3)); // "Ama"
//       console.log(name.includes("ra")); // true

//  B. NUMBER DATA TYPE
//  Numbers represent both integers and decimals in javascript. There's no seperate float type.
//   3 COMMON METHODS
//   1: toFixed(n) - rounds to n decimal places. 3.14159.toFixed(2) = "3.14"
//   2: parselnt(sting) - converts string to integer.parselnt("42") = 42
//   3: isNAN(value) - checks if value is Not a Number. isNaN("abc") = true

//             // Number: stores numeric values 

//             let pi = 4.14159;

//             console.log(pi.toFixed(2)); // "4.14"
//             console.log(parseInt("42")); // 42
//             console.log(isNaN("abc")); // true


//   Q 3. An if statements that checks a variable and prints out remarks


// const studentScore = 0;

// if(studentScore >= 70 && studentScore <= 100) {
//     console.log("Excellent");
// } else if(studentScore >= 60 && studentScore <= 69) {
//     console.log("Very good");
// } else if(studentScore >= 50 && studentScore <= 59) {
//     console.log("Good");
// } else if(studentScore >= 40 && studentScore <= 49) {
//     console.log("Poor");
// } else if(studentScore >= 0 && studentScore <= 39) {
//     console.log("Very poor");
// } else if(studentScore < 0 && studentScore > 100) {
//     console.log("Score is valid");
// } else {
//     console.log("Invalid score");
// }

// const ourArray = [[1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]];

// let myData = ourArray[1][2];

// console.log(myData);
function greeting() {
    console.log("Hello, how are you doing?". + "What is your name?");
}

