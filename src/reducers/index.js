import { combineReducers } from "redux";
import * as sites from "./sites";

const AppReducer = combineReducers({
  ...sites
});

export default AppReducer;
