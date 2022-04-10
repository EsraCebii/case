import api from "../../utils/api"

export const getPackages = () => async (dispatch) => {
    dispatch({ type: "GET_PACKAGES_START" });
    try {
      const response = await api.get("/packages");
      dispatch({ type: "GET_PACKAGES_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_PACKAGES_ERROR" });
    }
  };
  export const addSeletedPackage = (selectedPackage) => async (dispatch) => {

      dispatch({ type: "ADD_SELECTED_PACKAGE", payload: selectedPackage });
    
  };
  export const deleteSeletedPackage = (id) => async (dispatch) => {

    dispatch({ type: "DELETE_SELECTED_PACKAGE", payload: id });
};