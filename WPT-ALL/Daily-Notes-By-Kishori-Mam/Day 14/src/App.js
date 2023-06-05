import React,{Component} from 'react';
import EmployeeTable from './components/EmployeeTable'
class App extends React.Component{
  constructor(props){
       super(props);
       this.state={
        name:"ksdjklsj",
        arr:["Revati","Atharv","Rajan"]
       }
  }
  addname=(nm)=>{
        this.setState({...this.state,arr:[...this.state.arr,nm]})
  }
  render(){
    return (<div>
      <h1>Hello world!!</h1>
      <EmployeeTable empdata={this.state.arr} insertData={this.addname}/>
      
    </div>)

  }
 
  

}

export default App;