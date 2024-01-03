//Conditional Operator using class component

import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    render() {
        return (
            this.state.isLoggedIn ? (<div style={{fontWeight:"bold"}}>Welcome Saish</div>) : (<div style={{fontWeight:"bold"}}>Welcome Raj</div>)
        )
    }
}

//Conditional Operator using functin Component
// const ConditionalRendering = () => {
//     var isLoggedIn = false

//     return(
//          isLoggedIn ? (<div>Welcome Saish</div>) : (<div>Welcome Raj</div>)
//     )
// }

export default ConditionalRendering