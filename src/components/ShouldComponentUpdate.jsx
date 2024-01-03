import React, { Component } from 'react';

class Componentshouldupdate extends Component {
    constructor(){
        super();
         this.state = {
            count : 0
         }
    }

    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate",this.state.count);
        if(this.state.count > 5 && this.state.count < 10) {
            return true;
        }
       
    }
   
    render(){
        return(
            <div>
                <h1>Should Component Update : {this.state.count} </h1>
                <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Update</button>      
            </div>
        )
    }
}

export default Componentshouldupdate;