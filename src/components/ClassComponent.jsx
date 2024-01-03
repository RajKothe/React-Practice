//Class Component....
//Destructuring Props and State....

import React, { Component } from "react"

class Welcome extends Component {
    render() {
        const {FirstName,LastName} = this.props
        return(
            <h1>My Name is {FirstName} {LastName}.</h1>    
        )
        
    }
}

export default Welcome;