import axios from "axios"
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionsTypes/userActionTypes"

//get the list of all users
export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.get("/api/user/allUsers", config)
        //console.log(result);
        dispatch({
            type: GET_ALL_USERS, payload: result.data.listUsers,
        })
       // console.log(result)
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
};


//get one user
export const getOneUser = (id) => async (dispatch) => {
    console.log(id)
    dispatch({ type: LOAD_USER })
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.get(`/api/user/${id}`, config)
        dispatch({
            type: GET_USER,
            payload: result.data.oneUser,
        })
        console.log (result.data)
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
};

//deleting one user
export const DeleteOneUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.delete(`/api/user/${id}`, config)
        dispatch({
            type: DELETE_USER,
            payload: result.data.userToDelete,

           
        })
      dispatch(getUsers())
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
};