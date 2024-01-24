import menus from '../data/Menu-detail.json';

// 제이슨 형식으로 메뉴 전체를 반환
export function getMemuList (){
  return menus;
}

// menuDetails 에서 넘겨준 메뉴 코드 값과 일치하는 메뉴 객체를 반환
export function getMenuDetail(menuCode){

  // 사용자가 요청한 메뉴 코드와 일치하는 메뉴를 반환함 필터 반환형은 배열
  return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];  // 메뉴코드 하나만 나옴. 배열 인덱스 하나로 지정
}


export function searchMenu(menuName){
  return menus.filter(menu => menu.menuName.match(menuName));  // 검색결과. 결과가 여러개 나올수도 있음. 배열지정 x 
}