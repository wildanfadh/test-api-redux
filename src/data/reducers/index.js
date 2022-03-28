// combines all reducers into one root reducer
import { combineReducers } from "redux";
import AuthReducer from "./auth";
import MessageReducer from "./message";

const rootReducer = combineReducers({
    auth: AuthReducer,
    message: MessageReducer
});


export default rootReducer;
