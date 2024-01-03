import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
        return(
            <div>
                <ul>
                    <li><NavLink to="/home" style={{color:"red"}}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/user/raj">Raj</NavLink></li>
                    <li><NavLink to="/user/saish">Saish</NavLink></li>
                </ul>
            </div>
        )
}

export default Navbar;


