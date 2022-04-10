const INITIAL_STATE = {
    data: [],
    loading: false,
    error: "",
  };
  const agreementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_AGREEMENT_START":
        return { ...state, loading: true, error: "" };
      case "GET_AGREEMENT_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "GET_GET_AGREEMENT_ERROR":
        return { ...state, loading: false, error: "Error fetching agreement." };
      default:
        return state;
    }
  };
  export default agreementReducer;