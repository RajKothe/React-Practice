//Controlled Component....

import React, {useState} from "react";

const Controlled = ()=>{

    let[val,setVal] = useState("000");
    
    return(
        <div>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
            <h3>Value {val}</h3>
        </div>
    )

}

export default Controlled;