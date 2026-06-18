Q 1. Javascript statement that reverses a string supplied to it

 const greeting = "Hello"

 let str = "Hello"; let reversed = str.split("").reverse("").join("");

console.log(reversed); // "olleH";


Or To Reverse a String




Q 2. SHORT NOTES ON DATA TYPES AND 3 METHODS EACH
 A. STRINGS DATA TYPE
 Strings are text in javascript.they are immutable and written in quotes "", '', or backticks ```.
  3 COMMON METHODS;
 1: toUpperCase()- converts string to uppercase. "hi". toUpperCase() = "Hi"
 2: slice(start, end) - extracts part of the string. "Hello" .slice(0, 2) = "He"
 3: includes(substring) - checks if substring exists. "Hello" .("lo") = true

      Data Types 
      Strings: stores Text, immutable

      let name = "Amara";

      console.log(name.toUppercase()); // "AMARA"
      console.log(name.slice(0, 3)); // "Ama"
      console.log(name.includes("ra")); // true

 B. NUMBER DATA TYPE
 Numbers represent both integers and decimals in javascript. There's no seperate float type.
  3 COMMON METHODS
  1: toFixed(n) - rounds to n decimal places. 3.14159.toFixed(2) = "3.14"
  2: parselnt(sting) - converts string to integer.parselnt("42") = 42
  3: isNAN(value) - checks if value is Not a Number. isNaN("abc") = true

            // Number: stores numeric values 

            let pi = 4.14159;

            console.log(pi.toFixed(2)); // "4.14"
            console.log(parseInt("42")); // 42
            console.log(isNaN("abc")); // true



//   Q 3. An if statements that checks a variable and prints out remarks



//   const score = 100;

//    if(score >= 70 & score <= 100) {
//   console.log("Excellent");
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

// IF AND ELSE STATEMENT

// const score1 = 70;

// const score2 = 100;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }
// else{
//     console.log("Excellent");
// }

// const score1 = 60;

// const score2 = 69;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }
// else{
//     console.log("Very good");
// }

// const score1 = 50;

// const score2 = 59;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }
// else{
//     console.log("Good");
// }

// const score1 = 40;

// const score2 = 49;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }
// else{
//     console.log("Poor");
// }

// const score1 = 0;

// const score2 = 39;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }
// else{
//     console.log("Very poor");
// }

// const score1 = 0;

// const score2 = 100;

// if(score1 > score2){
//     console.log("score 1 is greater");
// }else{
//     console.log("Invalid score");
// }



let score = 65;

if(score >= 60 && score <= 69) {
    console.log("Very good");
} else {
    console.log("Not in range 60-69");
}
