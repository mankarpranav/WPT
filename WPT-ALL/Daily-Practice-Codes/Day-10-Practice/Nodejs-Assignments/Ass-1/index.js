//PROBLEM STATEMENT ->
//
// Create a user defined local module calc.js that exposes the following functions: add(a,b),
// subtract(a,b), multiply(a,b), divide(a,b), square(a), sum(a,b,c...)
// Create a client application that invokes each of these methods

const calc = require("./calc");

console.log("inside index.js of Ass-1");

console.log("Addition of 2 & 5 is : " + add(2, 5));
console.log("Substraction of 2 & 5 is : " + substract(2, 5));
console.log("Multiplication of 2 & 5 is : " + mul(2, 5));
console.log("Division of 2 & 5 is : " + div(2, 5));
console.log("Square of 2 is : " + square(2));
console.log(
  "Passing any no of arguments and sum is : " +
    sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);
