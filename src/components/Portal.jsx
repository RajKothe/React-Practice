import React,{Component} from "react";
import ReactDOM from "react-dom";

class OtherRoot extends Component {
    render() {
        return(
            ReactDOM.createPortal(
                <h1>Other Root</h1>,document.getElementById('otherroot')
            )           
        )
    }
}

export default OtherRoot;