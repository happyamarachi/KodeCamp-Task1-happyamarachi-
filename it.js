// const namesOfPeopleInClass =[
//     "Joy",
//     "Peace",
//     "Grace",
//     "Faith",
//     "Peter",

// ];

// for(let i = 0; 1 < namesOfPeopleInClass.length; i++); {
//     console.log(namesOfPeopleInClass(i));
// }


// function churchmeeting(){
//    console.log("church meeting");
//    console.log("church meeting is on sunday");
//    console.log("church meeting is on time");
//    console.log("church meeting is for everyone");
// }

// churchmeeting();

// function Godisgood(){
//     console.log("God is good");
//     console.log("God is good all the time");
//     console.log("All the time God is good");
//     console.log("God is good to me");
//     console.log("God is good to you");
//     console.log("God is faithfull");
//     console.log("God is merciful");
//     console.log("God is love");
//     console.log("God is great");
//     console.log("Jesus is coming soon");
// }

// Godisgood();

// function HappyBirthday(username, age){
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log("Happy birthday dear ${patrick}!");
//     console.log("Happy birthday to you");
//     console.log("I wish you all the best");
//     console.log("You are ${30} years old");
// }

// HappyBirthday("Patrick", 30);
// HappyBirthday("Joy", 25);
// HappyBirthday("Grace", 28);

// function multiplyTwoNumbers(num1, num2){
//     return num1 * num2;
// }

// console.log(multiplyTwoNumbers(5, 10));

// function subtract(x, y){
//     return x - y;
// }

// console.log(subtract(10, 5));

// function divide(x, y){
//     return x / y;
// }
// console.log(divide(10, 6));

// For Even Functions
// function isodd(number){
//     if(number % 3 === 0){
//         return true;  
// }
//     else{
//         return false;
//     }
// }
// console.log(isodd(40));

// function isvalidEmail(email){
//     return email.includes("@") ? true: false;
//     }

//     console.log(isvalidEmail("ahanna@gmail.com"));

//  function greetings(hello){
//     console.log("Hello, how are you doing today?");
//     console.log("I hope you are doing well");
//     console.log("Have a nice day");
//     console.log("God bless you");
//     console.log("Take care of yourself");
//     console.log("Stay safe");
//     console.log("Be happy");
//     console.log("Enjoy your day");
//     console.log("Smile always");
//     console.log("Spread love and kindness");
//  } 

//     greetings();


// function hello(){
//     console.log("hello how are you diong?");
//     console.log("did you go out today?");
//     console.log("I miss you today,take good care of yourself okay,love you!!");
// }

// hello("john");

//      CALLBACKFUNCTIONS

// const hello = (name) => (console.log(`Hello ${"bro"}`));
//     console.log(`You are ${25} years old`);

// hello("bro, 25"); 

// setTimeout( () => console.log("Hello, how are you doing?"), 2000);
// setTimeout( () => console.log("Did you go out today?"), 4000);
// setTimeout( () => console.log("I miss you today, take good care of yourself okay, love you!!"), 6000);

// setTimeout(() => console.log("Come here! are you okay?"), 8000);

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const cubes = numbers.map(element => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2  === 0);
// const total = numbers.reduce((accumulator,element) => accumulator + element );

// console.log(total);

// PROMISES IN JAVASCRIPT
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.

// const isEvenPromise = (num) => {
//     return new promise((accept, reject) {
//         if(num % 2 === 0) {
//             accept(num + "is  even");
//         } else {
//             reject(num + "is odd");
//         }
//     });
// }



// async function waitAndDoSomething() {
//     Then-able
//     trypromise.then((result) =>{
//         console.log("fulfilled result:", result);
//     }).catch((reason) => {
//         console.log("reject reason:", reason);
//       });
// }

