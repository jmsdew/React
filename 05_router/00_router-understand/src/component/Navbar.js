import { NavLink } from "react-router-dom"

const Navbar = () => {

const activeStyle = {
  backgroundColor : "gray",
  color : "white"
}

return (
  <div>
    <ul>
      <li>
        <NavLink
          to={"/main"} style={({isActive}) => isActive? activeStyle:null}>구단 정보</NavLink>
      </li>
      <li>
        <NavLink
          to={"/Blog"} style={({isActive}) => isActive? activeStyle:null}>선수단 정보</NavLink>
      </li>
    </ul>
  </div>
)
}
export default Navbar;