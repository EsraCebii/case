const INITIAL_STATE = {
    data: [],
    loading: false,
    error: "",
  };
  const payReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "PAY_START":
        return { ...state, loading: true, error: "" };
      case "PAY_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "GET_PAY_ERROR":
        return { ...state, loading: false, error: "Error paying." };
      default:
        return state;
    }
  };
  export default payReducer;