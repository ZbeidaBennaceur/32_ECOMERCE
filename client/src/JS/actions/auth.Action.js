//imports
import axios from "axios"
import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH,CLEAR_SUCCESS_AUTH,CLEAR_ERRORS_AUTH} from "../actionsTypes/auth.ActionTypes"

//functions: action(type,payload)
//action register for a new user
export const register = (newUser,navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH })
    //console.log( newUser);
    try {
        const result = await axios.post("/api/auth/register", newUser)
        localStorage.setItem("token", result.data.token);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate("/profile")

    } catch (error) {
        const backendError = error.response?.data;

if (backendError?.errors && Array.isArray(backendError.errors)) {
}
        dispatch({
          type: FAIL_AUTH,
          payload: error.response?.data?.errors || ["Erreur inconnue"]
        })
    }
}

//action login
export const login = (user,navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH })
    try {
        const result = await axios.post("/api/auth/login", user)
        dispatch({ type: SUCCESS_AUTH, payload: result.data })
        navigate("/profile")
    } catch (error) {
        const serverError = error.response?.data;
        
      
        dispatch({
          type: FAIL_AUTH,
          payload: serverError?.errors || ["Erreur inconnue"]
        });
      }
}

//action current (to check if the user is connected)
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };

      const result = await axios.get("/api/auth/current", config);
      dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
      console.error("🚨 Erreur CURRENT USER détaillée:", error.response?.data);
      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err, i) => 
          console.error(`Erreur ${i + 1}:`, err.msg)
        );
      }
      dispatch({
        type: FAIL_AUTH,
        payload: error.response?.data?.errors || ["Erreur inconnue"],
      });
    }
  };
  

//logout = remove token (session expired)

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
}

//clear errors

export const clearError=()=>{
  return {
    type:CLEAR_ERRORS_AUTH
  }
}

export const clearSuccess=()=>{
  return {
    type:CLEAR_SUCCESS_AUTH
  }
}


