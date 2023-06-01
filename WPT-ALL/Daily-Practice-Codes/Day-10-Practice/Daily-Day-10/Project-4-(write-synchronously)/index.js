// Writing to file synchronously using writeFileSync() 

const fs = require("fs");

fs.writeFileSync("sample.txt","I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!");

var data = fs.readFileSync("sample.txt");

console.log(data.toString());