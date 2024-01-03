//useState color change and Hold Multiple dataType

import { useState } from "react";

const ColorState = () => {

    // const[color,setColor] = useState("red");
    // const[model,setModel] = useState("Audi");
    // const[year,setYear] = useState("2023");

    const[car,setCar] = useState({
        model:"Mustang",
        color:"Red",
        year:"2023"
    });

return (
    <>
 {/* <div>
        <h1>My Favorite color is {color}!</h1>
        <button type="button" onClick={()=>setCar("Yellow")}>Change Text</button>
</div> */}
<div>
        <p style={{fontWeight:"bold"}}>
            It is {car.color} {car.model} from {car.year}.
        </p>    
</div>
    </>   
)

}

export default ColorState;