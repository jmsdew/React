import { NavLink } from "react-router-dom"

const Navbar = () => {

const activeStyle = {
  backgroundColor : "blue",
  color : "white"
}

return (
  <div>
    <ul>
      <li>
        <NavLink
          to={"/main"} style={({isActive}) => isActive? activeStyle:null}>Main</NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"} style={({isActive}) => isActive? activeStyle:null}>blog</NavLink>
      </li>
    </ul>
  </div>
)
}
export default Navbar;