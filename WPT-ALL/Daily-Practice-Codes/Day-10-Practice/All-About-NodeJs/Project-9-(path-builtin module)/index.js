//path module --> built-in module which can be use to work with dir and file paths
//also provided various methods such as -
//resolve(),join(),basename(),extname(),parse(),isabsolute()

const path = require("node:path");
//const path = require("path");               //above and this statement both are same

console.log();
console.log("filepath ---> " + __filename);
console.log("Dirpath ---> " + __dirname);
console.log();

console.log();
console.log("file path basename ---> " + path.basename(__filename));
console.log("dir path basename ---> " + path.basename(__dirname));
console.log();

console.log();
console.log("file path extname ---> " + path.extname(__filename));
console.log("dir path extname ---> " + path.extname(__dirname));
console.log();

console.log();
console.log("File parse ---> " + path.parse(__filename));
console.log("Dir parse ---> " + path.parse(__dirname));
console.log("format -->" + path.format(path.parse(__dirname)));
console.log();

console.log();
console.log("is absoulte path ? " + path.isAbsolute(__filename));
console.log();

console.log(path.join("abc", "pqr", "xyz"));
console.log(path.join("abc", "\\pqr", "xyz"));
console.log(path.join("/abc", "//sqr", "../pqr")); //../means jump to one step above
console.log(path.join("__dirname", "data.json"));

//resolve -> resolves path into absolute path
console.log(path.resolve("folder1", "folder2")); //op: F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)\folder1\folder2
//here if not mentioned forward slashed then it will give full aboslute path

//if / given then it will give absolute path from that location
console.log(path.resolve("/abc", "zyz", "pqr"));
//op-> F:\abc\zyz\pqr

console.log(path.resolve("/abc", "//pqr", "str"));
//here it will consider from // for absolute path before that will be ignored
//op-> F:\pqr\str

console.log(path.resolve("/abc", "//pqr", "../str"));
// will go one step up and cause ../
//op-> F:\str

console.log(path.resolve("__dirname", "data.json"));
//op-> F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)\__dirname\data.json


//-------------------------------------------------------------------------------------


// PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)> node index

// filepath ---> F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)\index.js
// Dirpath ---> F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)

// file path basename ---> index.js
// dir path basename ---> Project-9-(path inbuilt module)

// file path extname ---> .js
// dir path extname --->

// File parse ---> [object Object]
// Dir parse ---> [object Object]
// format -->F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)

// is absoulte path ? true

// abc\pqr\xyz
// abc\zyz\pqr
// abc\pqr\xyz
// \abc\pqr
// __dirname\data.json
// PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-9-(path inbuilt module)>
