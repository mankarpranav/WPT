// callback -->

// in js, functions are first class objects.
// a function  can be passed as an
// argument to a function
// a function can also be returned as
// values from other functions.

function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Pranav";
  callback(name);
}

higherOrderFunction(greet);

/*
    PS F:\CDAC-MARCH-23\CDAC-MODULE-5\NodeJs\Project-10-()> node index
Hello Pranav


Types of callbacks-
1.Synchronous callback
    sequential execution

2.Asynchronous callback
    parallel execution

----------------------------------------

function callback(){
    document.getElementById("demo").innerHTML = "Hello World";
}

document.getElementById("btn").addEventListener("click",callback);

---------------------------------------






*/
