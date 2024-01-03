import React, { Component } from 'react';

class Componentdidupdate extends Component {
    constructor(){
        super();
         console.warn("constructor")
        this.state = {
            // name:"Geeta"
            count: 0
        }
    }
    componentDidUpdate(preState){
        console.warn("componentDidUpdate",preState.count,this.state.count)
        if(this.state.count < 10) {
                this.setState({count:this.state.count + 1})
        }
    } 
    render(){
        //console.warn("render")
        return(
            <div>
                <h1>Component Did Update : {this.state.count}</h1>
                {/* <button onClick={()=>{this.setState({name:"Pallavi"})}}>Update Name</button> */}
                <button onClick={()=>{this.setState({count: 1 })}}>Update Name</button>
            </div>
        )
    }
}

export default Componentdidupdate;