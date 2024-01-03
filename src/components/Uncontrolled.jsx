//Uncontrolled Component....

import React,{useRef} from "react";

const Uncontrolled = () => {
    let inputRef = useRef(null)
    function submitForm(e) {
        e.preventDefault();
        console.warn("input field current value is :" ,inputRef.current.value)
    }

return(
<div>
    <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />  <br />
        <button>Submit Button</button>
    </form>    
</div>
    )
}
export default Uncontrolled; 

