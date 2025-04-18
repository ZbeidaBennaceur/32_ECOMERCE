import React from 'react'
import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteProd} from '../JS/actions/productAction';
import EditProduct from './EditProduct';



const Products = ({product,all}) => {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    if (window.confirm("Are you sure you want to delete this product?")) {
    dispatch(deleteProd(product._id))};
  }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>

        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text>
        {product.price} €
        </Card.Text>
        {all? (
       <Link to={`/prod/${product._id}`}>
       <Button variant="outline-primary">See details</Button>
       </Link>
       ):(
        <>
  <div className="d-flex gap-2 justify-content-center">
  <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
      <EditProduct product={product}/> 
      </div>
        </>
       )}
      
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Products
