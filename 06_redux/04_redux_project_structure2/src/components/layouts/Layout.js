import { Outlet } from "react-router-dom"
import Header from "../commons/Header"
import Navbar from "../commons/Navbar"


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