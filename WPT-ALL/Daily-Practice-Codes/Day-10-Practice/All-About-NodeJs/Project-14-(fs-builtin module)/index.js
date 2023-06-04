//fs Built-in Module

//fs module internally uses buffer.
//readFileSync is synchronous file.

const { error } = require("node:console");
const fs = require("node:fs");

//read content of files
const data = fs.readFileSync("./file.txt");
console.log(data);

/*
PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-14-()> node index
<Buffer 74 68 69 73 20 69 73 20 64 65 6d 6f 20 66 69 6c 65 20 66 6f 72 20 66 73 20 6d 6f 64 75 6c 65 2e> */

const data2 = fs.readFileSync("./file.txt", "utf-8");
console.log("Human readable format --> " + data2);
/*
PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-14-()> node index
<Buffer 74 68 69 73 20 69 73 20 64 65 6d 6f 20 66 69 6c 65 20 66 6f 72 20 66 73 20 6d 6f 64 75 6c 65 2e>
Human readable format --> this is demo 
file for fs module. 
*/

fs.readFile("./file.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

/*
this is demo file for fs module.       
<Buffer 74 68 69 73 20 69 73 20 64 65 6d 6f 20 66 69 6c 65 20 66 6f 72 20 66 73 20 6d 6f 64 75 6c 65 2e>
 */

//will write to file
fs.writeFileSync("./write.txt", "writing to the file ...");

//will override content in file
fs.writeFile("./write.txt", "hello Pranav", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file will be overridden");
  }
});

//to append the content in the file at the start->
fs.writeFile("./write.txt", " Mankar! ", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file will be concatenated!");
  }
});
