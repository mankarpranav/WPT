import { useState } from "react";

const EmployeeTable=(props)=>{
    //..it will make myname variable as state, so changes will be done by setmyname function only
    let [myname,setmyname]=useState("");
    let addnewname=()=>{
       props.insertData(myname)
    }
    let renderTable=props.empdata.map((name,index)=><tr key={index}><td>{name}</td></tr>)
    return(
        <div>
        <input type="text" name="nm" id="nm"
        value={myname}
        onChange={(event)=>{setmyname(event.target.value)}}></input>
        <button type="button" name="btn" id="btn" value="btn" onClick={addnewname}>Add new name</button>
        <table border='2'>
        <thead>
        <tr>
            <th>employee name</th>
        </tr>
        </thead>
        <tbody>
           {renderTable}

        </tbody>
       
               
        </table>
        </div>
    )

}
export default EmployeeTable;