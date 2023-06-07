import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import DisplayData from './components/DisplayData'
import {cancelBooking, newBooking} from "./redux/action/bookingaction"
function App() {
  let [formdetails,setformdetails] =useState({name:"",amt:""});
  let dispatch=useDispatch();
  let bookticket=()=>{
     dispatch(newBooking(formdetails.name,formdetails.amt));
  }
  let cancelticket=()=>{
    dispatch(cancelBooking(formdetails.name,formdetails.amt));
  }
  return (
    <div>
       <DisplayData/>
        Name : <input type="text" name="nm" id="nm"
        value={formdetails.name}
        onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}/><br/>
        Amount : <input type="text" name="amt" id="amt"
        value={formdetails.amt}
        onChange={(event)=>{setformdetails({...formdetails,amt:event.target.value})}}/><br/>
       <button type="button" name="btn"  id="newbk"
       onClick={bookticket}>New Booking</button>
      <button type="button" name="btn" id="cancelbk"
      onClick={cancelticket}>Cancel Booking</button>
    </div>
  );
}

export default App;
