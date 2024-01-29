import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";

//  여러개의 리듀서를 하나로 묶음
const rootReducer = combineReducers({
  userReducer,
  menuReducer
});

export default rootReducer;