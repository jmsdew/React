import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import MenuItem from "../items/MenuItem";

const MenuList = () => {
  const result = useSelector(state => state.menuReducer);
  const menuList = result.menuList;
  const dispatch = useDispatch();

  console.log(menuList);

  useEffect(()=>{
    dispatch(callGetMenuListAPI());
  },[])

  return (
    menuList && (
      <div className="menuBox">
          {menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
      </div>
    )
  )
}

export default MenuList;