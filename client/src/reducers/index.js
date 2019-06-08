import { combineReducers } from "redux";
import campusReducer from "./campusReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  campus: campusReducer,
  student: studentReducer
});

export default rootReducer;
