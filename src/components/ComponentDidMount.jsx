import React, { Component } from 'react';

class Componentdidmount extends Component {
    constructor(){
        super();
        // console.warn("constructor")
        this.state = {
            name:"Raj"
        }
    }
    componentDidMount(){
        console.warn("componentDidMount")
    } 
    render(){
        console.warn("render")
        return(
            <div>
                <h1>Component Did Mount : {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Saish"})}}>Update Name</button>
            </div>
        )
    }
}


export default Componentdidmount;