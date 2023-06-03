import React,{component} from 'react';
class MyFriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            names:["Rajan","Revati","Ashwini","Deepali","Sangeeta"],
            count:3}

    }
    renderlist=()=>{
        return this.state.names.map((a,index)=><li key={index}>{a}</li>)
    }
    render(){
        return(
            <div>
            <h1>Friends list</h1>
            <ul>
                {this.renderlist()}
            </ul>
            </div>

        )
    }
}

export default MyFriendsList;