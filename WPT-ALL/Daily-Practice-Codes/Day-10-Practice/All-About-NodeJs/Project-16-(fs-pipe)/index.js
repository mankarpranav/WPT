//fs-pipe


var readableStream = fs.createReadStream("src.txt");
var writeableStream = fs.createWriteStream("dest.txt");
console.log("Writing started...");
readableStream.pipe(writeableStream);       //shorter code to previous code using 'pipe'
console.log("Writing finished...");        

//pipe returns destination stream which enable chaining. 
//however condition is destination stream has to be readble,duplex or transform stream.

//zlib provides compression functionality. allows to create zip file
//zlib -- advance concept must read!
