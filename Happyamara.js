// Q 1. Javascript statement that reverses a string supplied to it

let str = "Hello";

let reversed =str.split("").reverse().join("");

console.log(reversed); // "olleH";


// Q 2. SHORT NOTES ON DATA TYPES AND 3 METHODS EACH
//  A. STRINGS DATA TYPE
//  Strings are text in javascript.they are immutable and written in quotes "", '', or backticks ```.
//   3 COMMON METHODS;
//  1: toUpperCase()- converts string to uppercase. "hi". toUpperCase() = "Hi"
//  2: slice(start, end) - extracts part of the string. "Hello" .slice(0, 2) = "He"
//  3: includes(substring) - checks if substring exists. "Hello" .("lo") = true

//   B. NUMBER DATA TYPE
//  Numbers represent both integers and decimals in javascript. There's no seperate float type.
//   3 COMMON METHODS
//   1: toFixed(n) - rounds to n decimal places. 3.14159.toFixed(2) = "3.14"
//   2: parselnt(sting) - converts string to integer.parselnt("42") = 42
//   3: isNAN(value) - checks if value is Not a Number. isNaN("abc") = true

//   Q 3. An if statements that checks a variable and prints out remarks

let score = 85;

if(score >= 70 && score <= 100) {
    console.log("Excellent");
} else{
    console.log("Not Excellent");
}

let score = 65;

if(score >= 60 && score <= 69) {
    console.log("Very good");
} else {
    console.log("Not in range 60-69");
}

let score = 54;

if(score >= 50 && score <= 59) {
    console.log("Good");
} else {
    console.log("Not in range 50-59");
}

let score = 45;

if(score >= 40 && score <= 49) {
    console.log("Poor");
} else {
    console.log("Not in range 40-49");
}

let score = 25;

if(score >= 0 && score <= 39) {
    console.log("Very poor");
} else {
    console.log("Not in range 0-39");
}

let score = 105;

if(score < 0 || score > 100) {
    console.log("Invalid score");
} else {
    console.log("Score is valid");
}

