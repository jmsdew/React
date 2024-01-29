import { Outlet } from "react-router-dom"
import Navbar from "../components/commons/Navbar";
import Header from "../components/commons/Header";

const Layout = () =>{
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default Layout;