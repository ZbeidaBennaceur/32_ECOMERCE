import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMyProd } from '../JS/actions/productAction'
import ListProd from '../components/ListProd';
import AddProduct from '../components/AddProduct';

const Profile = () => {
  const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  const myProd=useSelector(state=>state.productReducer.myProducts)
  //chargement
  useEffect(()=>{dispatch(getMyProd());

  },[dispatch]);
  return (
    <div>
      <h3 style={{fontFamily:"sans-serif"}}>Hello {user.name}</h3>
      <div style={{marginTop:"0.5rem", marginBottom:"2rem"}}>
      <AddProduct/>
      </div>
      <ListProd products={myProd} all={false}/>
    </div>
  )
}

export default Profile
