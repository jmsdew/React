import { getMenuList } from "../modules/MenuModule";
import { request } from "./APi";


export function callGetMenuListAPI(){
  console.log("getMenuList API calls");

  return async(dispatch, getState) =>{
    const result = await request("get", "/menu");
    console.log("getMenuList result : " , result);

    dispatch(getMenuList(result));
  }
}