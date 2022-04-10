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