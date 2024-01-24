import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMenu } from "../api/MenuApi";
import boxStyle from "./Menu.module.css";
import MenuItem from "../components/MenuItem";

const MenuSearchResult = () => {

  const [search] = useSearchParams();  /* /menu/search?menuName=${searchValue} search에 뒤에 값을 담음,  */

  const searchMenuName = search.get("menuName");  // 꺼내서 밸류 값을 담음 .. 여기선 갈치튀김
  const [menuList, setMenuList] = useState([]);

  /* 
      pathVariable http:localhost/menu/30
      queryString Parameter http:localhost/menu?menuName="갈치튀김"
  */

  // mount 시 에만 동작해 메뉴 리스트를 뿌려줌
  useEffect(
    ()=>{
          setMenuList(searchMenu(searchMenuName));
    },[]
  )

    
  return (
    <>
        <h1>검색 결과</h1>
        <div className={boxStyle.Menubox}>
          {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
    </>
  )
}

export default MenuSearchResult;