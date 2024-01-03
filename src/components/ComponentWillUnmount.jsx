import React, {Component} from 'react';
import ComponentWillUnmountChild from '../components/ComponentWillUnmountChild';

class ComponentWillUnmount extends Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div className=''>
              {
                this.state.show ?  <ComponentWillUnmountChild /> : <h1>Child Component Remove</h1>
              }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
            </div>
        )
    }
}

export default ComponentWillUnmount;