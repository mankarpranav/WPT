export const newBooking =(name,amt)=>{
    return ({
        type:"NEW_BOOKING",
        payload :{
            name,
            amt
        }
    })
    
}

export const cancelBooking =(name,refundamt)=>{
    return ({
        type:"CANCEL_BOOKING",
        payload :{
            name,
            refundamt
        }
    })
    
}