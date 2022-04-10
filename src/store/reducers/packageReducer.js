const INITIAL_STATE = {
    data: [],
  loading: false,
  error: "",
};
const packageReducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PACKAGES_START":
            return {...state, loading: true, error: ""};
        case "GET_PACKAGES_SUCCESS":
            return {...state, loading: false, data: action.payload};
        case "GET_PACKAGES_ERROR":
            return {...state, loading: false, error: "Error fetching packages."};
        default:
            return state;
    }
}
export default packageReducer;