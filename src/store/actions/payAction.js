import api from "../../utils/api"
export const pay = (form) => async (dispatch) => {
    dispatch({ type: "PAY_START" });
    try {
        const response = await api().post("/payment", form);
      dispatch({ type: "PAY_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "PAY_ERROR" });
    }
  };