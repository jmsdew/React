import { createActions, handleActions } from "redux-actions";

const initialState ={};

export const LOGIN = "user/LOGIN";
export const RESET_LOGIN_USER = "user/RESET_LOGIN_USER";
export const {user : {login,resetLoginUser}} = createActions({
  [LOGIN] : (res) =>({res}),
  [RESET_LOGIN_USER] : (res = initialState) => ({res})  // 객체임을 명시해줌. 다른의미 없음
});


const userReducer = handleActions({   // payload 객체에서 res라는 객체를 빼와서 담아줌. 여기 payload 에는
                                      //  res 객체 하나밖에 없어서 res없어도 에러가 발생하지 않지만 여러개면 에러
  [LOGIN] : (state, {payload : res})=>{
    if(res){
      localStorage.setItem("isLogin", true);
    }else {
      res = {message : "LOGIN_FAIL"};
    }

    return res;
  },
  [RESET_LOGIN_USER] : (state, {payload})=>{
    return payload;
  }
}, initialState);

export default userReducer;