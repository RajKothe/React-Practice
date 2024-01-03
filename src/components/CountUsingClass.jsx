import React, {Component} from "react";

class CountUsingClass extends Component {

constructor(props) {
    super(props)
    this.state = {
        count : 0
    }
}

// IncrementClick() {
//     this.state.count = this.state.count + 1;
// }
IncrementClick() {
    this.setState((prevState,props) => ({
        count: prevState.count + props.addvalue
    }))
    console.log(this.state.count)
}


render() {
    return(
        <div>
            <div>Count - {this.state.count}</div>
             <button onClick={() =>this.IncrementClick()}>+</button>
        </div>
    )
}

}

export default CountUsingClass;