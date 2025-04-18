import React, { useState } from 'react'
import { Button, Modal, Form,InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProduct } from '../JS/actions/productAction'

const AddProduct = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  //----------------
  const dispatch=useDispatch()

  const [newProd,setNewProd]=useState({
    title: "",
    description:"",
    quantity:"",
    image:"", 
    price:""
  });
  const handleChange=(e)=>{
    setNewProd({...newProd,[e.target.name]:e.target.value })
  }
  const handleaddProduct=(e)=>{
    e.preventDefault();
    dispatch(addProduct(newProd))
    handleClose();
  }

  return (
    <div>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add a product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>
        <Form  onSubmit={handleaddProduct}>
        <Modal.Body>
          
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Title" name="title" value={newProd.title} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Descritption" name="description" value={newProd.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Quantity" name="quantity" value={newProd.quantity} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Add your image's URL" name="image" value={newProd.image} onChange={handleChange} />
            </Form.Group>
            <InputGroup>
  <Form.Control
    type="number"
    name="price"
    value={newProd.price}
    onChange={handleChange}
    min="0"
    step="0.01"
  />
  <InputGroup.Text>€</InputGroup.Text>
</InputGroup>
          
          
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>Close</Button>
        <Button variant="outline-primary" type="submit">Save Product</Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
    </div>
  )
}

export default AddProduct