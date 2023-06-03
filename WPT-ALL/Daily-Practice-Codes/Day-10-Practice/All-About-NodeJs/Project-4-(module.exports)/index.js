//does require load module only once to use?

/*

module.exports <-- is an object
which we will be returned and captured in constant
and then on that const we can call
function any no. of times as it becomes reusable code.

module.exports -- called as defaulted value

*/

const addition = require("./add");

console.log("inside index.js of Project-4");

const sum = addition(23, 23);
console.log(sum);

//This also works
console.log("Addition is : " + addition(23, 23));
