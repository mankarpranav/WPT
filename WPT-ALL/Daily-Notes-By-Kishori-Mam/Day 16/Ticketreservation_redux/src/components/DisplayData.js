import { useSelector } from "react-redux";
const DisplayData=(props)=>{
    let reservationlist=useSelector((state) => state.reservationHistory)
    let cancellationlist=useSelector((state) => state.cancellationHistory);
    let amount=useSelector((state) => state.accounting);
    
    return (
        <div>
            Reservation List: {JSON.stringify(reservationlist)}<br/>
            Cancellation List : {JSON.stringify(cancellationlist)}<br/>
            Amount:{amount}
        </div>
    )
}
export default DisplayData;