import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import User from "../components/User";


const Router = () => {
        return(
            <div className="">
                <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/user/:name" element={<User />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
}

export default Router;