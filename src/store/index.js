import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import packageReducer from "./reducers/packageReducer"

const rootReducer = combineReducers({
    user: userReducer,
    package: packageReducer,
});

export default rootReducer;