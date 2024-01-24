import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMenuDetail } from "../api/MenuApi";


const MenuDetails = () => {

  const {menuCode} = useParams();    // pathvariable 을 통해 menu/menuCode 에서 menuCode를 꺼내 담음

  const [menu,setMenu] = useState({
    menuName : '',
    menuPrice : '',
    categoryName : '',
    detail : {description:'',image:''}
  });
  useEffect(()=>{
    setMenu(getMenuDetail(menuCode));
    console.log(menuCode);
    console.log(getMenuDetail(menuCode));
  },[]);

  return (
    <>
      <h2>메뉴 상세 설명</h2>
      <h3>메뉴 이름 : {menu.menuName}</h3>
      <h3>메뉴 가격 : {menu.menuPrice}</h3>
      <h3>메뉴 카테고리 : {menu.categoryName}</h3>
      <h3>메뉴 설명 : {menu.detail.description}</h3>

      <img src={menu.detail.image} style={{maxWidth:500}}/>
    </>
  )
}
export default MenuDetails;