//exporting function from here using
//module.exports

/*
    module.exports is an object in a Node.js file that holds the exported values and functions from that module. Declaring a module.exports object in a file specifies the values to be exported from that file. When exported, another module can import this values with the require global method.
*/

const addition = (a, b) => {
  return a + b;
};

module.exports = addition;
