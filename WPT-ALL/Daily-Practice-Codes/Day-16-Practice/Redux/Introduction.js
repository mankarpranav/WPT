//REDUX

/*

redux is a predictable state container 
for javascript apps.

it is for javascript apps.
it is a state container.
it is predictable.


redux for javascript applications
redux is not tied to react.
can be used with react, angular, vue or even vanilla
js.


A) REDUX IS FOR JAVASCRIPT APPLICATIONS -->

REDUX IS A STATE CONTAINER
Redux stores the state of your application.
State of an app is the state shared by all the 
individual components of that app


B) REDUX IS PREDICTABLE -->

-----------------------------------

WHAT IS REDUX?

REDUX IS A PREDICATBLE STATE CONTAINER FOR 
JAVASCRIPT APPS.
 


// REACT -- FRONT END LIBRARY
// REDUX -- STATE MANAGEMENT LIBRARY

React -redux is the official redux ui binding library 
for react.

React <------> React-Redux <-------> Redux (Redux Toolkit)

react-redux offers couple of functions
using which we can add react with redux.

SUMMARY:

1.React is a library used to build user interface.

2.Redux is a library for managing state in a predictable
way in javascript.

3.Redux toolkit is a library for efficient redux 
development.

4.Redux-redux is librayr that provides bindings to use 
react and redux(toolkit) together in an application.

------------------------------------------------------

# Important concepts --> 

Cake Shop Scenario          Redux       Purpose

Shop                    Store           Holds the state
                                        of your application

Cake Ordered            Action          Describes what
                                        happended in the
                                        application
                                        
Shopkeeper              Reducer         Ties the store and
                                        actions together

-------------------------------------------------------

A "store" that holds state of your 
application.

An "action" that describes what happened 
in the application

A "reducer" which handles that action and decide how to
update the state.

-------------------------------------------------------

3 Principles 

1.First Principle
    The global state of your application is stored
    as an object inside a single store

    Maintain our application state in a single object
    which would be managed by the redux state.

2.Second Principle
    The only way to change the state is to dispatch
    an action, an object that describes what 
    happened.

    To update the state of your app, you need to 
    let redux know about what an action

    Not allowed to directly update the state object.

3.Third Principle

    To specify how the state tree is updated based on 
    actions, you write pure reducers.

    Reducer - (previousState,action) => newState



        --------> Javascript App --------
        |                               | dispatch
        |                               |
    Redux Store                     Action
     (State)                            ^
        ^                               |
        |                               |
        -------->  Reducer  <------------


*/
