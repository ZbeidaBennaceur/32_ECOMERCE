import axios from 'axios'
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCTS, GET_ALL_PRODUCTS, GET_MY_PRODUCT, GET_PRODUCT, LOAD_PRODUCT } from '../actionsTypes/productActionTypes'

//actions pour avoir la liste des produits de l'api
export const getAllProd=()=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
        const result = await axios.get("/api/product/allProduct");
        dispatch({type:GET_ALL_PRODUCTS, payload:result.data.listProd})
    } catch (error) {
        dispatch({type:FAIL_PRODUCTS, payload:error.response.data
        })
    }
}

//action pour rajouter un produit
export const addProduct=(newProd)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        const result = await axios.post("/api/product/addProd",newProd,config)
    dispatch({type:ADD_PRODUCT, payload:result.data})
    dispatch(getMyProd())
} catch (error) {
    dispatch({type:FAIL_PRODUCTS, payload:error.response.data
    })
}
}

//détail d'un produit précis par id
export const getOneProduct=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
       
        const result = await axios.get(`/api/product/${id}`)
    dispatch({type:GET_PRODUCT, payload:result.data})
} catch (error) {
    dispatch({type:FAIL_PRODUCTS, payload:error.response.data
    })
}
}


//détail d'un produit d'un user
export const getMyProd=()=>async(dispatch)=>{
    //console.log("TOKEN ➤", localStorage.getItem('token'))
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        const result = await axios.get("/api/product/myProd",config)
        console.log("DATA RECEIVED ➤", result.data)
    dispatch({type:GET_MY_PRODUCT, payload:result.data})
    dispatch(getAllProd());
} catch (error) {
    dispatch({type:FAIL_PRODUCTS, payload:error.response.data
    })
}
}

//editer un produit
export const editProd=(id,prodToEdit)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        };
       
        const result = await axios.put(`/api/product/${id}`,prodToEdit,config)
    dispatch({type:EDIT_PRODUCT, payload:result.data})
    dispatch(getMyProd())
} catch (error) {
    dispatch({type:FAIL_PRODUCTS, payload:error.response.data
    })
}
}

//supression d'un produit
export const deleteProd=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
   
    try {
        let config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        };
        const result=await axios.delete(`/api/product/${id}`,config);
        dispatch({type:DELETE_PRODUCT, payload:result.data})
        dispatch(getMyProd())

    } catch (error) {
        dispatch({type:FAIL_PRODUCTS, payload:error.response.data
        })
}
}