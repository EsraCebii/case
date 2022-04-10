import api from "../../utils/api"

export const getAgreement = () => async (dispatch) => {
    dispatch({ type: "GET_AGREEMENT_START" });
    try {
      const response = await api.get("/payment");
      dispatch({ type: "GET_AGREEMENT_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_AGREEMENT_ERROR" });
    }
  };