//Writing asynchronously to file
//Writing to the file actually overwrites the previous data

const fs = require("fs");

fs.writeFile("sample.txt", "welcome to nodejs programming ...", function (err) {
  if (err) {
    console.log("Error occured: " + err);
  } else {
    fs.readFile("sample.txt", function (err, data) {
      if (err) {
        console.log("Error Occured..." + err);
      } else {
        console.log(data.toString());
      }
    });
  }
});
