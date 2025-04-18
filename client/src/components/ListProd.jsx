import React from 'react'
import Products from './Products'

const ListProd = ({products,all}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around", gap:"10px", flexWrap:"wrap"}}>
        {products.map(prod=><Products key={prod._id} product={prod} all={all}/>)}

    </div>
  )
}

export default ListProd
