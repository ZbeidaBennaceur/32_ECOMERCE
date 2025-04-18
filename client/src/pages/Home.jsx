import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProd} from '../JS/actions/productAction'
import ListProd from '../components/ListProd';

const Home = () => {

  const dispatch=useDispatch();
  const products=useSelector(state=>state.productReducer.products)
  console.log(products)
  useEffect(()=>{
dispatch(getAllProd());
},
[dispatch]);
  return (
    <div style={{marginTop:"2rem"}}>
  
      <ListProd products={products} all={true}/>
    </div>
  )
}

export default Home

