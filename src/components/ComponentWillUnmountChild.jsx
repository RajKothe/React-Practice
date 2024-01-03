import React, {Component} from 'react';

class ComponentWillUnmountChild extends Component {

    componentWillUnmount() {  // only work with class component....
        alert("ComponentWillUnmount Called")
    }

    render() {
        return (
            <div className=''>
                <h1>Student Component</h1>
            </div>
        )
    }
}

export default ComponentWillUnmountChild;