import { composeWithDevTools} from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";

import {thunk} from "redux-thunk";
import rootReducer from "./modules";

/* const rootReducer = combineReducers({
  "action" : (state, {payload}) =>{
    console.log("payload: ", payload);
    return payload;
  }
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
 */

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
