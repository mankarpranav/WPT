/*

Character Encoding
4     --> 100     --> 00000100
number    binary      UTF

binary data - 0s and 1s that computers 
                can understand
    
Character sets - Predefined lists of characters representes by numbers

Character encoding - dictates how to represent a number in a character set as binary data

*/

//Streams -->

/*

stream is a sequence of a data that is 
being  moved from one point to another
over time.

process stream of data in chuncks as they
arrive instead of waiting for the entire 
data to be available before processing.

eq., youtube video
transfering file content from file a to file b.

eq., rollcaster 
 
*/

//Buffers

// Binary DataTransfer,character sets and encoding < = > Buffers?
// nodejs internally uses buffer privately.

const buffer = new Buffer.from("Anuja");

console.log("binary-hex representation:  " + buffer);
console.log("binary representation:" + buffer.toJSON());
console.log("data in array format + " + buffer.toString());

buffer.write("coderepeat");
console.log(buffer);
