import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {useSelector } from 'react-redux'
//import { getOneUser } from '../JS/actions/userActions';

const UserDetails = ({show,handleClose,userId}) => {
   // const dispatch=useDispatch();
    const {user,isLoad}=useSelector(state=>state.userReducer);

    //useEffect(()=>{
        //console.log(userId)
       // dispatch(getOneUser(userId))},[dispatch,userId,show]);
       // console.log(user)
       // console.log(isLoad)
    
  
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {user && !isLoad &&(
                <div>
                    <p>
                        Name: {user.name}
                    </p>
                    <p>
                        Email: {user.email}
                    </p>
                    <p>
                        Phone: {user.phone}
                    </p>
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default UserDetails

