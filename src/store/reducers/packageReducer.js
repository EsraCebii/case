import { act } from "@testing-library/react";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
  selectedPackages: [],
};
const packageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PACKAGES_START":
      return { ...state, loading: true, error: "" };
    case "GET_PACKAGES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_PACKAGES_ERROR":
      return { ...state, loading: false, error: "Error fetching packages." };
    case "ADD_SELECTED_PACKAGE":
      return { ...state, loading: false, selectedPackages: [action.payload, ...state.selectedPackages] };
      case "DELETE_SELECTED_PACKAGE":
        return { ...state, loading: false, selectedPackages: state.selectedPackages.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};
export default packageReducer;
