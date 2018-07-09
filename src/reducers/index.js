import { combineReducers } from "redux";
import * as menu from "./menu";

const AppReducer = combineReducers({
  ...menu
});

export default AppReducer;
