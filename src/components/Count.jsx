//useState Used.....

import { useState } from "react";

const Count = () => {

    const[num,setNum] = useState(0)

    const IncrementClick = () => {
        setNum(num + 1);
    }

    const  DecrementClick = () => {
        if (num > 0) {
            setNum(num - 1);       
        }
        else  {
            alert('minimum value reached')
            setNum(0);
        }
        
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="h1_Style">{ num }</h1>
                    <div className="btn_div">
                        <button onClick={IncrementClick}>Increment</button>
                        <button onClick={DecrementClick}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Count;