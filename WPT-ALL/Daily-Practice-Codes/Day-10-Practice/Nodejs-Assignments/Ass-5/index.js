// 5) Create a file mydata.txt, myfile.data read contents of both files parallelly and display number of
// words in each file .(use asynchronous api).

const fs = require("fs");
var count = 0;
var mydataCount;
var myfileCount;

function totalWords(data) {
  const d = data.split(" ");
  return (count = d.length);
}

fs.readFile("mydata.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Error Occured..." + err);
  } else {
    mydataCount = totalWords(data);
    console.log("Total Word Count in mydata.txt: " + mydataCount);
  }
});

fs.readFile("myfile.data", "utf8", function (err, data) {
  if (err) {
    console.log("Error Occured..." + err);
  } else {
    myfileCount = totalWords(data);
    console.log("Total Word Count in myfile.txt: " + myfileCount);
  }
});

// console.log("Total Word Count in mydata.txt: " + mydataCount);              //if printed here prints underfined cause of callback functions
// console.log("Total Word Count in myfile.txt: " + myfileCount);
