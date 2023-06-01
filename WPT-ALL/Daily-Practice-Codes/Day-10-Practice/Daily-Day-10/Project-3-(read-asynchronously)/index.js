
//reading file synchronously
//reading file asynchrounously
//we have file1.txt & file2.txt for reading

const fs = require("fs");

//reading file synchronously

var syncf1 = fs.readFileSync("file1.txt");
var syncf2 = fs.readFileSync("file2.txt");

console.log(syncf1.toString());
console.log(syncf2.toString());

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

//reading file asynchronously

fs.readFile("file1.txt",function(err,data){

    if(err){
        console.log("Error Occured ..!!");
    }else{
        console.log(data.toString());
    }

});

fs.readFile("file2.txt",function(err,Daata){

    if(err){
        console.log("Error occured..!!");
    }
    else{
        console.log(Daata.toString());
    }

});


