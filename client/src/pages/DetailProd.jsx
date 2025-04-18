import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getOneProduct} from '../JS/actions/productAction';
 
const DetailProd = () => {
    const params=useParams();
    const dispatch=useDispatch();
    const product=useSelector(state=>state.productReducer.prod)
    useEffect(()=>
        {dispatch(getOneProduct(params.id))},[params,dispatch])

  return (
    <div>
      {product.title}
    </div>
  )
}

export default DetailProd
