import {useState} from 'react';
import EmployeeDetails from './EmployeeDetails';
const RegistrationForm=()=>{
    let [formdetails,setformdetails]=useState({name:"",gender:"male",domain:["mutualfund"],city:""})
    let [flag,setflag]=useState(false);
    let handlechange=(event)=>{
        if(event.target.checked){
            setformdetails({...formdetails,gender:event.target.value})
        }
    }
    let setdomaindetails=(event)=>{
        if(event.target.checked){
            if(!formdetails.domain.includes(event.target.value)){
                setformdetails({...formdetails,domain:[...formdetails.domain,event.target.value]})
            }
        }else{
            if(formdetails.domain.includes(event.target.value)){
                let newarr=formdetails.domain.filter(a=>a!==event.target.value)
                setformdetails({...formdetails,domain:newarr});
            }
        }
    }
    let displaydata=()=>{
        console.log(formdetails);
        alert(JSON.stringify(formdetails))
        setflag(true)
        localStorage.setItem("empdata",JSON.stringify(formdetails))
    }
    return(
        <div>
        <form>
            Name : <input type="text" name="nm" id="nm"
            value={formdetails.name}
            onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}></input><br/>
            Gender : <input type="radio" name="gender" id="male" value="male"
                checked={formdetails.gender==="male"}
                onChange={(event)=>{handlechange(event)}}
            />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female"
                checked={formdetails.gender==="female"}
                onChange={(event)=>{handlechange(event)}}
                />
                <label for="female">Female</label><br></br>
            Domain:
                 <input type="checkbox" name="domain" id="telecom" value="telecom"
                  checked={formdetails.domain.includes("telecom")}
                  onChange={(event)=>{setdomaindetails(event)}}
                 />
                <label for="telecom">telecom</label>
                <input type="checkbox" name="domain" id="banking" value="banking"
                checked={formdetails.domain.includes("banking")}
                onChange={(event)=>{setdomaindetails(event)}}
                />
                <label for="banking">banking</label>
                <input type="checkbox" name="domain" id="mutualfund" value="mutualfund"
                checked={formdetails.domain.includes("mutualfund")}
                onChange={(event)=>{setdomaindetails(event)}}   
                />
                <label for="mutualfund">mutual fund</label>
                <input type="checkbox" name="domain" id="inssurance" value="inssurance"
                checked={formdetails.domain.includes("inssurance")}
                onChange={(event)=>{setdomaindetails(event)}}
                />
                <label for="inssurance">inssurance</label>
            <br/>
            City: <select id="city" name="city" 
            onChange={(event)=>{setformdetails({...formdetails,city:event.target.value})}}>
                    <option value="pune">Pune</option>
                    <option value="mumbai">mumbai</option>
                    <option value="nashik">nashik</option>
                    <option value="satara">satara</option>
            </select>
            <button type="button" name="btn" id="btn" value="btn" onClick={displaydata}>Register me</button>
        </form>
        {flag?<EmployeeDetails/>:""}
        </div>
    )
}

export default RegistrationForm;