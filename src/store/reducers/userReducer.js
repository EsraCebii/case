const INITIAL_STATE = {
    fullName: "",
    email: "",
};

 const userReducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {...state, loading: true, error: ""};
        case "LOGIN_SUCCESS":
            return {...state, loading: false, data: action.payload};
        case "LOGIN_ERROR":
            return {...state, loading: false, error: "Login failed."};
        default:
            return state;
    }
}
export default userReducer;