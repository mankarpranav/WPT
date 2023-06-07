// Actions

/*

The only way your application can interact with 
the store

Carry some info from your app to the redux store

Plain Js objects

Have a 'type' property that describes something
that happened in the application.

The 'type' property is typically defined as string 
constant

*/

//action creator is function that
//returns the action.

const CAKE_ORDERED = "CAKE_ORDERED";

//action-->
/*
    {
        type: CAKE_ORDERED,
        quantity: 1
    }
*/

//now put that action in action creator function.
// 1.action is object with type property
// 2.action creator is a function that returns
//   an object.

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

//--------------------------------------------------

//Reducer -->

/*

Specify how the app's state changes in responce 
to actions sent to the store.

Function that accepts state and action as arguments
and returns the next state
of the application.

update the state based on the actions

(previousState, action) => newState

*/

const initialState = {
  numOfCakes: 10,
};

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //object property can contain multiple
        //properties then use spread operator
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//-------------------------------------------------------

//Redux Store -->

/*

Store brings actions and reducer together

One store for the entire application

Responsibilities ->
1.Holds application state
2.Allows access to state via getState()
3.Allows state to be updated via dispatch(action)
4.Registers listeners via subsribe(listener)
5.Handles unregistering of listeners via the function
  returned by subsribe(listener).

*/

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("pdate stare", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

//above code incomplete;
//need redux to import and add few lines of codes
