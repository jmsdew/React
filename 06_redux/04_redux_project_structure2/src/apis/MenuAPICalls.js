import { deleteMenu, getMenu, getMenuList, getMenulist, modifyMenu, registMenu } from "../modules/MenuModule";
import { request } from "./APi";


export function callGetMenuListAPI() {
  console.log("getMenuList API calls");

  return async (dispatch, getState) => {
    const result = await request("get", "/menu");
    console.log("getMenuList result : ", result);

    dispatch(getMenulist(result));
  }
}


export function callRegistMenuAPI(menu) {
  console.log(`registMenu api calls...`);

  return async (dispatch, getState) => {
    const result = await request("POST", `/menu`, menu);
    console.log("registMenu result : ", result);
    dispatch(registMenu(result));
  }
}

export function callGetMenuAPI(id) {
  console.log("getMenu api calls..");

  return async (dispatch, getState) => {
    const result = await request("GET", "/menu/" + id);
    console.log('getMenu result : ', result);
    dispatch(getMenu(result));
  }
}


export function callModifyMenuAPI(menu) {
  console.log("modifyMenu API call");

  return async (dispatch, getState) => {
    const result = await request("PUT", `/menu/${menu.id}`, menu);
    console.log("modifyMenu result : ", result);
    dispatch(modifyMenu(result));
  }

}


export function callDeleteMenuAPI(id) {
  console.log("deleteMenu api call");

  return async (dispatch, getState) => {
    const result = await request("DELETE", "/menu/" + id);
    console.log("deleteMenu result : " + result);
    dispatch(deleteMenu(result));
  }
}