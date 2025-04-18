import React, { useState } from 'react'
import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {editProd} from '../JS/actions/productAction'


function EditProduct({ product }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [prodtoEdit, setProdtoEdit] = useState({
    title: product.title,
    description: product.description,
    quantity: product.quantity,
    image: product.image,
    price: product.price
  });

  const handleChange = (e) => {
    setProdtoEdit({ ...prodtoEdit, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editProd(product._id, prodtoEdit));
  };
  
  

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your product</Modal.Title>
        </Modal.Header>
        <Form  onSubmit={handleEdit}>
        <Modal.Body>
          
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Title" name="title" value={prodtoEdit.title} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Descritption" name="description" value={prodtoEdit.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Quantity" name="quantity" value={prodtoEdit.quantity} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Add your image's URL" name="image" value={prodtoEdit.image} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
            <InputGroup>
  <Form.Control
    type="number"
    name="price"
    value={prodtoEdit.price}
    onChange={handleChange}
    min="0"
    step="0.01"
  />
  <InputGroup.Text>€</InputGroup.Text>
</InputGroup>
            </Form.Group>
         
          
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>Close</Button>
        <Button variant="outline-primary" type="submit" onClick={handleClose}>Save Product</Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
    </div>
  )


}

  

export default EditProduct