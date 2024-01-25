import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Navbar from "../component/Navbar"


const Layout = () => {

  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
    </>
  )
}
export default Layout;