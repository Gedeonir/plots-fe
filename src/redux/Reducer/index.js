import { combineReducers } from "redux";
import counter from "./counter";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  counter: counter,
  LoginReducer:LoginReducer,
});

export default rootReducer;