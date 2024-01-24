import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getMemuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css"

const Menu = () => {

  const [menuList, setMenuList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(
    ()=>{
      setMenuList(getMemuList());
    },[]
  );

  const onClickHandler = () => {  // 네비 영역에서는 navLink 많이 쓰고 그 외에는 navigate 많이 사용

    navigate(`/menu/search?menuName=${searchValue}`);
  }
  return (
    <>
      <h1>판매 메뉴 목록</h1>
      <div>
          <input type="search" name="menuName" onChange={e => {setSearchValue(e.target.value)}}/>
          <button onClick={onClickHandler}>검색</button>
      </div>
      <div className={boxStyle.MenuBox}>
        {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
      </div>
    </>
  )
}
export default Menu;