import api from "../../utils/api"

export const login = (values) => async (dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api.post("/signup", values);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };