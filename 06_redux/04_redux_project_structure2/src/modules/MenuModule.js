import { createActions, handleActions } from "redux-actions";


const initialState = {

};


const GET_MENULIST = "menu/GET_MENULIST";
const GET_MENU = "menu/GET_MENU";
const REGIST_MENU = "menu/REGIST_MENU";
const MODIFY_MENU = "menu/MODIFY_MENU";
const DELETE_MENU = "menu/DELETE_MENU";


// 액션 함수 정의  -- 함수가 각각 어떤 기능을 할 거라는 정의
export const {menu :{getMenulist, getMenu, registMenu, modifyMenu, deleteMenu}} = createActions({
    [GET_MENULIST] : (res) => ({menuList : res}),
    [GET_MENU] : (res) => ({menu: res}),
    [REGIST_MENU] : (res) => ({regist:res}),
    [MODIFY_MENU] : (res) =>({modify:res}),
    [DELETE_MENU] : (res) =>({delete: res})
});


// 리듀서 함수  -- reducer에 이런이런 함수들을 쓰고 반환값을 정해줌.  payload - 반환되는 데이터
const menuReducer = handleActions(
    {
        [GET_MENULIST] : (state, {payload}) =>{
            return payload
        },
        [GET_MENU] : (state, {payload})=>{
            return payload;
        },
        [REGIST_MENU] :(state, {payload}) =>{
            return payload;
        },
        [MODIFY_MENU] : (state, {payload}) =>{
            return payload;
        },
        [DELETE_MENU] : (state, {payload}) =>{
            return payload;
        }
    }, initialState
);

export default menuReducer;