import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import packageReducer from "./reducers/packageReducer";
import agreementReducer from "./reducers/agreementReducer"
import payReducer from "./reducers/payReducer";

const rootReducer = combineReducers({
    user: userReducer,
    package: packageReducer,
    agreement: agreementReducer,
    pay: payReducer,
});

export default rootReducer;