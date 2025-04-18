//import

import { LOAD_USER,GET_ALL_USERS,GET_USER,FAIL_USER,DELETE_USER } from '../actionsTypes/userActionTypes'


//initialisation
const initialState={
    users:[],
    user:{},
    isLoad:false,
    errors:[],
    success:false,
}




//pure function
const userReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case LOAD_USER:return {...state,isLoad:true}
    case GET_ALL_USERS:
        return {...state,isLoad:false, users:payload}
    
    case GET_USER:return {
...state,
isLoad:false,
user:payload}   
     case DELETE_USER:
        const newList=state.users.filter(el=>el._id!==payload._id)
        console.log(payload)
        return {
            ...state,isLoad:false, users:newList
        }
        case FAIL_USER: return {...state, isLoad:false, errors:payload, success: true}

    default:
       return state;
}
}

export default userReducer