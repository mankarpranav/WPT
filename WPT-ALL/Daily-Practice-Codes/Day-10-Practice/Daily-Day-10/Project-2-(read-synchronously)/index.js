//reading file synchronously

//Firstly, imported fs built-in module
const fs = require("fs");

//reading using fs and then printing the content of the file
data = fs.readFileSync("./test.txt");
console.log(data.toString());


