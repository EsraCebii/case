import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import packageReducer from "./reducers/packageReducer";
import agreementReducer from "./reducers/agreementReducer"

const rootReducer = combineReducers({
    user: userReducer,
    package: packageReducer,
    agreement: agreementReducer,
});

export default rootReducer;