//functions to create actions
const new_booking=(name,amt)=>{
    return (
    {type:"newbooking",
    payload:{name:name,amount:amt}}
    )

}
const cancel_booking=(name,amt)=>{
    return (
    {type:"cancelbooking",
    payload:{name:name,amount:amt}}
    )

}
//write rdeucers
const reservationHistoryReducer=(oldreservationlist=[],action)=>{
    switch(action.type){
        case "newbooking":
            return [...oldreservationlist,{...action.payload}]
            break;
        case "cancelbooking":
            return oldreservationlist.filter(a=>a.name!==action.payload.name)
            break;
        default: 
           return oldreservationlist;
    }

}
const cancellationHistoryReducer=(oldcancellationlist=[],action)=>{
    switch(action.type){
        case "cancelbooking":
            return [...oldcancellationlist,{...action.payload}]
            break;
        default: 
           return oldcancellationlist;
    }

}

const accountingReducer=(amount=2000,action)=>{
    switch(action.type){
        case "newbooking":
            return amount+parseInt(action.payload.amount)
            break;
        case "cancelbooking":
            return amount-parseInt(action.payload.amount)
            break;
        default: 
           return amount;
    }

}
//create store
const {createStore,combineReducers}=Redux;

const bookingStore=combineReducers({
    accounting:accountingReducer,
    reservationHistory:reservationHistoryReducer,
    cancellationHistory:cancellationHistoryReducer
})

const store=createStore(bookingStore);

//send actions
const action=new_booking("Rajan",3000)
store.dispatch(action);
console.log(store.getState())
const action1=new_booking("Revati",3000)
store.dispatch(action1);
console.log(store.getState())
const action3=cancel_booking("Rajan",2000)
store.dispatch(action3);
console.log(store.getState())