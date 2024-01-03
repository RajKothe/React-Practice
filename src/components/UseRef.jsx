//useRef....

import React, {Component, createRef } from "react";

class useRef extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }

    componentDidMount(){
        console.warn(this.inputRef.current.value="1000")
    }

    getVal() {
        this.inputRef.current.style.color = "red"
        this.inputRef.current.style.backgroundColor = "black"
    }

    render(){
        return(
            <div>
                <h1>Ref in React</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        );
    }
    
}

export default useRef;