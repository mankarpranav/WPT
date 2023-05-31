//Module Scope & IIFE

/*
    In nodejs each file is module, but isolated bydefault.
    Each Module in nodejs has its own scope.
    With IIFE each function gets its private scope.

    under the hood nodejs does this ->

    (function(){
        // modules code actually lives here ..
    })()

    before modules code is executed, nodejs will wrap it 
    with a function wrapper that provides module scope .
    It safes us from conflict.

*/

require("./chennai");
require("./mumbai");

console.log("inside index.js of Project-5");
