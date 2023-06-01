
//allocationg buffer of size 200 bytes
var buff1 = Buffer.alloc(200);

//write data to the buffer, it returns number of characters
var l1 = buff1.write("This first buffer");
console.log("length: " + l1);                            //17

//to display data from the buffer
console.log(buff1.toString());              //This first buffer

//displays 
console.log(buff1.toString);              //[Function: toString]


var buf2 = Buffer.alloc(200);
var l2 = buf2.write("This is second buffer");

console.log(l2);                                //21
console.log(buf2);                             //binary data

//allocates buffer of size= length of the string
buf2 = new Buffer("testing string...");
console.log(buf2.toString());

//allocates buffer of size= length of the buf2
target = Buffer.alloc(buf2.length);

//create a copy of buf2 contents into target
buf2.copy(target);
console.log(target.toString());
