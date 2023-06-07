//reducers
//these are functions which will change the state

export const reservationHistoryreducer=(oldReservationList=[],action)=>{
    console.log("in reservation history")
    switch(action.type){
        case "NEW_BOOKING":
            return [...oldReservationList,{...action.payload}]
            break;
        case "CANCEL_BOOKING":
            return oldReservationList.filter((ob)=>{
                  return ob.name!==action.payload.name;  
            })
            break
        default:
            return oldReservationList;
    }


}

export const cancellationHistoryreducer=(oldCancellationList=[],action)=>{
    console.log("in cancellation history")
    if (action.type==="CANCEL_BOOKING"){
        return [...oldCancellationList,{...action.payload}];
    }
    return oldCancellationList;

}

export const accountingreducer=(totalmoney=100,action)=>{
    if(action.type==="NEW_BOOKING"){
        return totalmoney+parseInt(action.payload.amt);
    }else if(action.type==="CANCEL_BOOKING"){
        return totalmoney-parseInt(action.payload.refundamt);
    }
    return totalmoney;
}