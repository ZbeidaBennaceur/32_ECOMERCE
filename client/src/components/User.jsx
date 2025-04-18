import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserDetails from './UserDetails'
import ToSupprimer from './ToSupprimer';
import { getOneUser } from '../JS/actions/userActions';

function User({ user }) {
  const [details, setDetails] = useState(false);
  const [supprimer, setSupprimer]=useState(false);
 const dispatch=useDispatch();
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <div className="d-flex gap-2 justify-content-center">
          <Button variant="outline-primary" onClick={() => { setDetails(true); dispatch(getOneUser(user._id))} }>Details</Button>
          <Button variant="outline-danger" onClick={() => { setSupprimer(true); } }>Delete</Button>
          </div>
        </Card.Body>
      </Card>
      <UserDetails show={details} handleClose={() => setDetails(false)} user={user._id} />
    <ToSupprimer show={supprimer} handleClose={()=>setSupprimer(false)} user={user}/>
    </div>
  );
}

export default User
