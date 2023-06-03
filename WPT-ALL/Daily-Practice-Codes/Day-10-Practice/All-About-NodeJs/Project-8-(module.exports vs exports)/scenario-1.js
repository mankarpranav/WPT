//module.exports vs exports

const obj1 = {
  name: "pranav",
};

const obj2 = obj1;

obj2.name = "mankar";

console.log(obj1);
console.log(obj2);

/*

    both objects are pointing to same object reference
    and when one is updated, it reflects in other object also.
    
    PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-8-()> node .\scenario-1.js
    { name: 'mankar' }
    { name: 'mankar' } 

    When assigned to object literal, reference is broken which is Scenario-2. 
    exports is nothing but reference to module.object  
*/
