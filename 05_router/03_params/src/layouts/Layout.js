import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Navbar from "../components/Navbar";



const Layout = () => {

  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>                {/* 자식 들을 그려주는 부분 */}
    </>
  )
}

export default Layout;