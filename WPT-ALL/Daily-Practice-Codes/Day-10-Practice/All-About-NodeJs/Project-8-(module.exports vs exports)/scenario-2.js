//module.exports vs exports

const obj1 = {
  name: "pranav",
};

let obj2 = obj1;

obj2 = {
  name: "mankar",
};

console.log("obj1: " + obj1);
console.log("obj2: " + obj2);

console.log(obj1);
console.log(obj2);

/*

PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-8-()> node .\scenario-2.js
obj1: [object Object]
obj2: [object Object]
{ name: 'pranav' }   
{ name: 'mankar' } 

Thus, always use module.exports over just exports.

*/
