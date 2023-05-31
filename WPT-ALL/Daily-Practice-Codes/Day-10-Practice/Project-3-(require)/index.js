//Writing local modules and executing by require() method

/*

In NodeJS, require() is a built-in function to include external modules that exist in separate files. 

require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.

*/

require("./add.js");
require("./mul.js");
require("./sub.js");
require("./div.js");

console.log("inside index.js of Project-3");

// const a = addition(1, 2);
// console.log(a);

//can also see flow of execution using run and debug(ctrl+shift+D) <-- good to know
