import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {DeleteOneUser} from '../JS/actions/userActions'

const ToSupprimer = ({show,handleClose,user}) => {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch (DeleteOneUser(user._id));
        handleClose();
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     Are you sure you want to delete {user.name} ?
     </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ToSupprimer
