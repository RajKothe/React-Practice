
//Using Function component Event Handling

const EventHandling = () => {

   function ShowValue() {
        // e.preventDefault();
        console.log("Button Value");
    }

return ( 
    <button onClick={ShowValue}>Click Me Event</button>  
) 

}



//Using class component Event Handling

// import React,{Component} from "react";

// class EventHandling extends Component {

//     ShowValue(){
//         alert("Button Value");
//     }

//     render() {
//         return(
//             <button onClick={this.ShowValue}>Click Me</button>
//         )
//     }

// }

export default EventHandling;