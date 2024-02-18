import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import {Outlet} from "react-router-dom";


const Layout = () => {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layout;