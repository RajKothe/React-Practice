//useEffect.....

import { useState, useEffect } from "react";

const UsedEffect = () => {

    const[count,setCount] = useState(0);

    useEffect(()=> {
        setTimeout(()=> {
            setCount((count) => count + 1);
        },1000);
    },[]) // [] //Runs only on the first render

    return (
        <h1>I have rendered {count} times!</h1>
    )
}

export default UsedEffect; 