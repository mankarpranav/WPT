//Event -> (built in module)

// event module allows us to work
// with events in Node.js

// event is an action or an occurence that has happened in our application that we can respond to.

// using the events module, we can dispatch
// out own events and respond to
// those custome events in a non-blocking manner.
// event allows us to write code in non-blocking manner.

// scenario-1

// events module returns class called.
// EventEmitter which encapsulate functionality
// to emit events and respond to events.

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-pizza", () => {
  console.log("Order received baking pizza");
});
emitter.emit("order-pizza");

console.log();
console.log();
console.log();

// scenario-2

const EventEmitter2 = require("events");

const emitter2 = new EventEmitter2();

emitter2.on("order-pizza", (type) => {
  console.log(`Order received! baking ${type} pizza`);
});
emitter2.emit("order-pizza", "chacolate");

/*
    s\Project-11-()> node index
    
        Order received baking pizza

        Order received! baking chacolate pizza

*/
