//fs-Stream
 
//stream is infact built in module inherits from event emitter class.
//other modules use stream internally for their functioning.
//default size of buffer that streams use
// has size of 64kb 

//http request is readble stream 
//http responce is writable stream

// Types of streams 

// 1.Readable stream from which data can be read.
// 2.writable stream to which we can write data.
// 3.duplex streams that are both readable and writable.
// eg., sockets as duplex stream . 

// 4.transform streams that can modify or 
// transform the data as it is written 
// and read.
// eg , file compression where you can write compressed data and read de-compressed data to and from a file as transform stream. 


const fs = require("fs");

//First way -->

const readableStream2 = fs.createReadStream("./file.txt",{
    encoding: "utf-8",
}); 

const writeableStream2 = fs.createWriteStream("./file2.txt");

readableStream2.on("data",(chunk)=>{        //inherits event emitter thus we used 
                                            //to perform operation on 'on' event
    console.log(chunk);
    writeableStream2.write(chunk);
});


//Second Way -->

//highWaterMark:

//lets set it to highWaterMark=2.
//it will transfer data in 2 bytes chunk as
//highWaterMark is set to 2 

const readableStream3 = fs.createReadStream("file.txt",{
    encoding: "utf-8",
    highWaterMark: 2,                   //setting highWaterMark
});

readableStream3.on("data",(chunk)=>{
    console.log(chunk);
    writeableStream2.write(chunk);
});


