//readStream and writeStream

//use data streaming if the file is larger than RAM size

const fs = require("fs");

//create readstream
var streamRead = fs.createReadStream("sourceFile.txt");

//create writestream
var streamWrite = fs.createWriteStream("destinationFile.txt");

//adds pipe in bewtween source readstream and destination writestream
//pipes the data into streamWrite (i.e., writes)
streamRead.pipe(streamWrite);

