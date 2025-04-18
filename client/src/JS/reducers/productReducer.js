//import
//import Product from "../../../../model/Product";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT, GET_MY_PRODUCT, LOAD_PRODUCT } from "../actionsTypes/productActionTypes"



//initalisation state
const initialState = {
    loadP: false,
    products: [],
    prod: {},
    myProducts: [],
    success: false,
    error: null
}


//pure function 

const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOAD_PRODUCT: return { ...state, loadP: true };
       
        case GET_ALL_PRODUCTS: return { ...state,
             loadP: false, 
             products: payload, 
             success: true }
      
        
             case GET_PRODUCT:
                return {
                  ...state,
                  loadP: false,
                  prod: payload.prodToGet,
                  success: true
                }

        case GET_MY_PRODUCT:return{...state,
                loadP:false,
                myProducts:payload.myProdList,
                success:true }

        case ADD_PRODUCT: return { ...state, 
            loadP: false,
            products: [...state.products, payload.newProd],
            success: true }    
      
        case EDIT_PRODUCT: return {...state,
            loadP:false,
            products:state.products.map((prod)=>prod._id===payload.id?
        {...prod,...payload.prodToEdit}:prod)
        }

        case DELETE_PRODUCT: return {...state,
            loadP:false,
            products:state.products.filter(prod=>prod._id!==payload.id),
            success:true
        }
        case FAIL_PRODUCTS:return {...state,loadP:false, errors:payload, success:false}
        
        default:
            return state
    }

}
export default productReducer